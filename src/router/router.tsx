import { createBrowserRouter, Navigate } from "react-router";
import { RootLayout } from "../layouts/root.layout";
import { HomePage } from "../pages/home/home";

export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            }
        ]
    },
    {
        path:"*",
        element : <Navigate to={"/"} replace />
    }
])