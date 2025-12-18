import { Navigate } from "react-router-dom";
// Private Routes used for protected Pages If user can't login then it's redirect to Login page;
    const PrivateRoute = ({ children }) => {
     const token = localStorage.getItem("token");
     return token ? children : <Navigate to="/" />;// Check if token is presents it's render to protected pages;
   };

export default PrivateRoute;
