import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const auth = getAuth(); // Initialize Firebase auth
      const provider = new GoogleAuthProvider(); // Create a new GoogleAuthProvider

      // Sign in with redirect
      await signInWithRedirect(auth, provider);

      // After redirect, handle the result
      const result = await getRedirectResult(auth);
      if (result) {
        const user = result.user;
        console.log("User details: ", user);
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error during Google login: ", error);
    }
  };

  return (
    <div className="login">
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  );
};

export default Login;
