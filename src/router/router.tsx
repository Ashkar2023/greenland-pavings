import { createBrowserRouter, Navigate } from "react-router";
import { RootLayout } from "../layouts/root.layout";
import { HomePage } from "../pages/home/home";
import { ProductsListPage } from "../pages/product/productsList.page";
import { ProductDetailPage } from "../pages/product/productDetail.page";
import { About } from "../pages/about/about";
import { OurProjects } from "../pages/product/ourProjects.page";

export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "/products",
                element: <ProductsListPage />
            },
            {
                path: "/product/:model",
                element: <ProductDetailPage />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/ourProjects",
                element: <OurProjects />
            }
        ]
    },
    {
        path: "*",
        element: <Navigate to={"/"} replace />
    }
])