import { useEffect, useState, useRef } from "react";
import { SupabaseGrid } from "@supabase/grid";
import { supabase } from "../lib/api";
import { RecoverPassword } from "./RecoverPassword";

const postAndWait = async (url, data, options = {}, headers = {}) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...headers,
      },
      body: JSON.stringify(data),
      ...options,
    });
    const json = await response.json();
    return json;
  } catch (error) {
    return { error };
  }
};

export const Home = ({ user }) => {
  const [recoveryToken, setRecoveryToken] = useState(null);

  supabase
    .from("buildings")
    .select()
    .then((e) => console.log(e));

  useEffect(() => {
    /* Recovery url is of the form
     * <SITE_URL>#access_token=x&refresh_token=y&expires_in=z&token_type=bearer&type=recovery
     * Read more on https://supabase.com/docs/reference/javascript/reset-password-email#notes
     */
    let url = window.location.hash;
    let query = url.slice(1);
    let result = {};

    query.split("&").forEach((part) => {
      const item = part.split("=");
      result[item[0]] = decodeURIComponent(item[1]);
    });

    if (result.type === "recovery") {
      setRecoveryToken(result.access_token);
    }
  }, []);

  const handleLogout = async () => {
    supabase.auth.signOut().catch(console.error);
  };

  return recoveryToken ? (
    <RecoverPassword
      token={recoveryToken}
      setRecoveryToken={setRecoveryToken}
    />
  ) : (
    <>
      <header>
        <button onClick={handleLogout}>Logout</button>
      </header>
      <main>
        <SupabaseGrid
          table={"buildings"}
          gridProps={{ height: "100%" }}
          onError={(error) => {
            console.log("ERROR: ", error);
          }}
          onAddColumn={() => {
            console.log("add new column");
          }}
          onEditColumn={(columnName) => {
            console.log("edit column: ", columnName);
          }}
          onDeleteColumn={(columnName) => {
            console.log("delete column: ", columnName);
          }}
          onAddRow={() => {
            console.log("add new row");
            return {};
          }}
          onEditRow={(row) => {
            console.log("edit row: ", row.idx);
          }}
          onSqlQuery={async (query) => {
            const res = await postAndWait(
              "https://vxsdstulbhooisnsjagb.supabase.co/api/sql-query",
              { query }
            );
            return res;
          }}
          headerActions={
            <>
              <span>{`'{headerActions}' can be used to insert`}</span>,
              <button>react nodes here</button>,
            </>
          }
        />
      </main>
    </>
  );
};
