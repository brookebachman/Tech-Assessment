import React, { useEffect } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = async () => {
    try {
      // Trigger the sign-in redirect
      await signInWithRedirect(auth, provider);
    } catch (error) {
      console.error("Error during Google login:", error);
    }
  };

  // Handle the redirect result after the page reloads
  useEffect(() => {
    const handleRedirectResult = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (result) {
          const user = result.user;
          console.log("User details:", user);
          navigate("/dashboard"); // Navigate after successful login
        }
      } catch (error) {
        console.error("Error handling redirect result:", error);
      }
    };

    handleRedirectResult();
  }, [auth, navigate]);

  return (
    <div className="login">
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  );
};

export default Login;
