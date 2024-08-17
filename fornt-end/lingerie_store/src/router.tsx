import { createBrowserRouter } from "react-router-dom";
import { ProductsList } from "./components/LingereStoreProductsComponent/ProductsList";
import { HomePage } from "./components/HomePage/HomePage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "/products",
        element: <ProductsList/>
    }
])


