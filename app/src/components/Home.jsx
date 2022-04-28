import { useEffect, useState, useRef } from "react";
import { useQuery } from "react-query";
import { supabase } from "../lib/api";
import { RecoverPassword } from "./RecoverPassword";

export const Home = ({ user }) => {
  const [recoveryToken, setRecoveryToken] = useState(null);
  const { data } = useQuery("buildings", () =>
    supabase.from("buildings").select()
  );

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

  console.log(data);
  if (!data) {
    return;
  }
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
      <main style={{ display: "flex", gap: 8 }}>
        {Object.entries(data.data[0]).map((building, level) => (
          <div>
            <div>{building}</div>
            <div>{level}</div>
          </div>
        ))}
      </main>
    </>
  );
};
