import ReactDOM from "react-dom/client"; // Import the correct method from 'react-dom/client'
import { AuthProvider } from "./Context"; // Adjust the import path if necessary
import App from "../App";

// Create a root and render the App component
const root = ReactDOM.createRoot(document.getElementById("root")!); // Ensure non-null assertion if you're certain the element exists
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
