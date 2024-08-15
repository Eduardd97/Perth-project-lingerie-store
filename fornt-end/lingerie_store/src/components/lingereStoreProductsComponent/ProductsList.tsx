import React from 'react'
import { useProducts } from '../../context/LingereStoreContext';

export const ProductsList = () => {
    const { products, loading, error } = useProducts();

    if (loading) {
        return <p>Загрузка...</p>; // Показываем сообщение о загрузке или спиннер
    }

    if (error) {
        return <p>{error}</p>; // Показываем сообщение об ошибке
    }

    return (
        <div>
            <h1>Список продуктов:</h1>
            <ul>
                {products?.map(product => (
                    <li key={product._id}>{product.name}</li>
                ))}
            </ul>
        </div>
    );
};


