import { BrowserRouter } from "react-router";
import { Loading } from "../components/Loading";
import { AuthRoutes } from "./AuthRoutes";
import { EmployeeRoutes } from "./EmployeeRoutes";
import { ManagerRoutes } from "./ManagerRoutes";

const isLoading = true;

export function Routes() {
    if (isLoading) {
        return <Loading />;
    }

    return (
        <BrowserRouter>
            <AuthRoutes />
            {/* <EmployeeRoutes /> */}
            {/* <ManagerRoutes /> */}
        </BrowserRouter>
    );
}
