import { supabase } from "../lib/api";
import { useRef } from "react";

export const RecoverPassword = ({ token, setRecoveryToken }) => {
  const newPasswordRef = useRef();

  const handleNewPassword = async () => {
    const newPassword = newPasswordRef.current.value;
    const { error } = await supabase.auth.api.updateUser(token, {
      password: newPassword,
    });

    if (!error) {
      // To render our app again
      setRecoveryToken(null);
    } else {
      console.error(error);
    }
  };

  return (
    <>
      <span>Recover Password</span>
      <label htmlFor={"email"}>
        <span>*</span>Enter new password:
      </label>
      <input type="password" ref={newPasswordRef} required />
      <button className="button" onClick={handleNewPassword}>
        Change Password
      </button>
    </>
  );
};
