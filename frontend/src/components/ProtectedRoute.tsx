import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/AuthStore";

export const Protected = ({ children }: { children: React.ReactNode }) => {

    const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
    const loading = useAuthStore((s) => s.loading);

    if (loading) {
        return <div className="h-screen w-screen fixed top-0 left-0 flex justify-center items-center">
            <div className="loader">

            </div>
        </div>;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login"/>;
    }

    return <>{children}</>;
};