// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

// Helper function for Google sign in
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result;
  } catch (error) {
    console.error("Error signing in with Google: ", error);
    throw error;
  }
};

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

// Export Firebase auth
const auth = getAuth(app);

console.log("Firebase App Initialized");

export { auth, signInWithPopup };
