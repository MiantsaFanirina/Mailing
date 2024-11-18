import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/landing";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import MainLayout from "./layouts/MainLayout.jsx";
import MailPage from "./pages/mail.jsx";
import EmployeesPage from "./pages/employees.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage/>
    },
    {
        path: "/login",
        element: <LoginPage/>
    },
    {
        path: "/register",
        element: <RegisterPage/>
    },
    {
        path: "/mail",
        element: <MainLayout/>,
        children: [
            {
                path: "",
                element: <MailPage/>
            }
        ]
    },
    {
        path: "/employees",
        element: <MainLayout/>,
        children: [
            {
                path: "",
                element: <EmployeesPage/>
            }
        ]
    }
])

export default router