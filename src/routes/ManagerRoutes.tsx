import { Route, Routes } from "react-router";
import { AppLayout } from "../components/AppLayout";
import { Dashboard } from "../pages/Dashboard";
import { NotFound } from "../pages/NotFound";

export function ManagerRoutes() {
    return (
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}
