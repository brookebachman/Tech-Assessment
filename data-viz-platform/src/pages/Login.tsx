import { auth, provider, signInWithPopup } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();

  // Check if the user is already authenticated and redirect to dashboard
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // If user is authenticated, navigate to dashboard
        navigate("/dashboard");
      }
    });

    return () => unsubscribe(); // Clean up the listener on unmount
  }, [navigate]);

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User details: ", user);

      // Navigate to the dashboard after successful login
      navigate("/dashboard");
    } catch (error: any) {
      // Catching error as `any` for proper handling
      console.error("Error during Google login: ", error.message);
    }
  };

  return (
    <div className="login">
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  );
};

export default Login;
