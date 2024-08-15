import { createContext, useState, useEffect, ReactNode, FC } from 'react';

import { AxiosError } from 'axios';
import { Product } from '../type';
import { axiosApi } from '../ApiAxios/axios';

interface ProductsContextProps {
    products: Product[] | null;
    loading: boolean;
    error: string | null;
}

interface ProductsProviderProps {
    children: ReactNode;
}

const ProductsContext = createContext<ProductsContextProps | undefined>(undefined);

const ProductsProvider: FC<ProductsProviderProps> = ({ children }) => {
    const [products, setProducts] = useState<Product[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axiosApi.get('/products');
                setProducts(response.data);
                setLoading(false);
            } catch (err: unknown) { // Используйте `unknown` и проверьте тип внутри блока catch
                if (err instanceof AxiosError) {
                    // Если ошибка является экземпляром AxiosError
                    const message = err.response?.data?.message || 'Ошибка при загрузке данных';
                    setError(message);
                } else if (err instanceof Error) {
                    // Если ошибка является обычной ошибкой JavaScript
                    setError(err.message);
                } else {
                    // Для других типов ошибок
                    setError('Неизвестная ошибка');
                }
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <ProductsContext.Provider value={{ products, loading, error }}>
            {children}
        </ProductsContext.Provider>
    );
};

export { ProductsProvider, ProductsContext };
