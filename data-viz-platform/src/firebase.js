// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkKQEJl-fHfik5d9S5X-ZufFah4YiJJ3w",
  authDomain: "tech-challenge-5a71b.firebaseapp.com",
  projectId: "tech-challenge-5a71b",
  storageBucket: "tech-challenge-5a71b.firebasestorage.app",
  messagingSenderId: "960871106530",
  appId: "1:960871106530:web:41cf2912875c5ba9c91bbb",
  measurementId: "G-DVE5K6SCMM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { auth, googleProvider };
