import { useRef, useState } from "react";
import { supabase } from "../lib/api";

export const Auth = () => {
  const [helperText, setHelperText] = useState({ error: null, text: null });
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleLogin = async (type) => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    const { user, error } =
      type === "LOGIN"
        ? await supabase.auth.signIn({ email, password })
        : await supabase.auth.signUp({ email, password });

    if (error) {
      setHelperText({ error: true, text: error.message });
    } else if (!user && !error) {
      setHelperText({
        error: false,
        text: "An email has been sent to you for verification!",
      });
    }
  };

  const handleOAuthLogin = async (provider) => {
    // You need to enable the third party auth you want in Authentication > Settings
    // Read more on: https://supabase.com/docs/guides/auth#third-party-logins
    let { error } = await supabase.auth.signIn({ provider });
    if (error) console.log("Error: ", error.message);
  };

  const forgotPassword = async (e) => {
    // Read more on https://supabase.com/docs/reference/javascript/reset-password-email#notes
    e.preventDefault();
    const email = prompt("Please enter your email:");

    if (email === null || email === "") {
      setHelperText({ error: true, text: "You must enter your email." });
    } else {
      let { error } = await supabase.auth.api.resetPasswordForEmail(email);
      if (error) {
        console.error("Error: ", error.message);
      } else {
        setHelperText({
          error: false,
          text: "Password recovery email has been sent.",
        });
      }
    }
  };

  return (
    <>
      <span>Login</span>
      <label className="flex-col  gap-4">
        Email:
        <input type={"email"} name={"email"} ref={emailRef} required />
      </label>
      <label className="flex-col gap-4">
        Password:
        <input type={"password"} name={"password"} ref={passwordRef} required />
      </label>
      <a href="" onClick={forgotPassword}>
        Forgot Password?
      </a>
      {!!helperText.text && <div>{helperText.text}</div>}
      <div style={{ display: "flex", gap: 8 }}>
        <button
          className="button green"
          onClick={() => handleLogin("LOGIN")}
          type="button"
        >
          Sign In
        </button>
        <button
          className="button"
          type="submit"
          onClick={() => handleLogin("REGISTER").catch(console.error)}
        >
          Sign Up
        </button>
      </div>
      <div>
        <span>Or continue with</span>
      </div>
      <div>
        <button
          className="button"
          onClick={() => handleOAuthLogin("github")}
          type="button"
        >
          GitHub
        </button>
      </div>
      <div>
        <button
          className="button"
          onClick={() => handleOAuthLogin("google")}
          type="button"
        >
          Google
        </button>
      </div>
    </>
  );
};
