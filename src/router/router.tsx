import { createBrowserRouter, Navigate } from "react-router";
import { RootLayout } from "../layouts/root.layout";
import { HomePage } from "../pages/home/home";
import { ProductsListPage } from "../pages/product/productsList.page";
import { ProductDetailPage } from "../pages/product/productDetail.page";

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
                path: "/product/:modelNumber",
                element: <ProductDetailPage />
            }
        ]
    },
    {
        path: "*",
        element: <Navigate to={"/"} replace />
    }
])