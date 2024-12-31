// PrivateRoute.tsx
import { Navigate } from "react-router-dom";
import { useAuth } from "./Context";

interface PrivateRouteProps {
  element: JSX.Element;
  path: string;
}

const PrivateRoute = ({ element }: PrivateRouteProps) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
