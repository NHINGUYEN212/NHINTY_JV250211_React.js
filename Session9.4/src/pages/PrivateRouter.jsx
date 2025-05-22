import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRouter({ isLoggedIn }) {
    return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
}
