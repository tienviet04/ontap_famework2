import { Navigate, Outlet } from "react-router-dom";

export default function Layout() {
    const token = localStorage.getItem('token');

    if (!token) {
        alert("Bạn cần đăng nhập");
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <Outlet />
        </div>
    );
}