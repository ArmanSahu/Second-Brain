import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/AuthStore";

export const Protected = ({ children }: { children: React.ReactNode }) => {
    const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
    const loading = useAuthStore((s) => s.loading);

    if (loading) {
        return <div>loading...</div>;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login"/>;
    }

    return <>{children}</>;
};