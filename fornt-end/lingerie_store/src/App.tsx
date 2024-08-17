import "./App.css";
import { RouterProvider } from "react-router-dom";
import { ProductsProvider } from "./context/LingereStoreContext";
import { router } from "./router";
import { Header } from "./components/Header/Header";

function App() {
    return (
        <div>
            <Header />
            <ProductsProvider>
                <RouterProvider router={router} />
            </ProductsProvider>
        </div>
    );
}

export default App;
