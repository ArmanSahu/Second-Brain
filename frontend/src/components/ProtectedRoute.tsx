import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/AuthStore";
import { Loader } from "./Loader";

export const Protected = ({ children }: { children: React.ReactNode }) => {

    const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
    const loading = useAuthStore((s) => s.loading);

    if (loading) {
        return <Loader />
    }

    if (!isAuthenticated) {
        return <Navigate to="/login"/>;
    }

    return <>{children}</>;
};