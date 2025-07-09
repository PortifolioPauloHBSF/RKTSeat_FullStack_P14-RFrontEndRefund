import { BrowserRouter } from "react-router";
import { AuthRoutes } from "./AuthRoutes";
import { EmployeeRoutes } from "./EmployeeRoutes";
import { ManagerRoutes } from "./ManagerRoutes";

export function Routes() {
    return (
        <BrowserRouter>
            {/* <AuthRoutes /> */}
            {/* <EmployeeRoutes /> */}
            <ManagerRoutes />
        </BrowserRouter>
    );
}
