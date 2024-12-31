import ReactDOM from "react-dom";
import { AuthProvider } from "./Context";
import App from "../App";

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById("root")
);
