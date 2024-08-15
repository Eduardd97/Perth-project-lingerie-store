import "./App.css";
import { ProductsList } from "./components/lingereStoreProductsComponent/ProductsList";
import { ProductsProvider } from "./context/LingereStoreContext";

function App() {
    return (
        <ProductsProvider>
            <ProductsList />
        </ProductsProvider>
    );
}

export default App;
