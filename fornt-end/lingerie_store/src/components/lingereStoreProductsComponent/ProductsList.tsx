import useProducts from "../../hooks/useProducts";
import "./ProductsList.css";
import { useEffect, useState } from "react";

type LikedProductsState = Record<string, boolean>;

// Функция для загрузки состояния лайков из localStorage
const loadLikedProducts = (): LikedProductsState => {
    const storedState = localStorage.getItem('likedProducts');
    return storedState ? JSON.parse(storedState) : {};
};

// Функция для сохранения состояния лайков в localStorage
const saveLikedProducts = (state: LikedProductsState) => {
    localStorage.setItem('likedProducts', JSON.stringify(state));
};


export const ProductsList = () => {
    const { products, loading, error } = useProducts();
    const [iconLikedColor, setIconLikedColor] = useState<LikedProductsState>(loadLikedProducts);

    useEffect(() => {
        // Обновление localStorage при изменении состояния лайков
        saveLikedProducts(iconLikedColor);
    }, [iconLikedColor]);

    if (loading) {
        return <p>Загрузка...</p>; // Показываем сообщение о загрузке или спиннер
    }

    if (error) {
        return <p>{error}</p>; // Показываем сообщение об ошибке
    }

    const likedProductIconColor = (productId: string) => {
        setIconLikedColor((prevState) => ({
            ...prevState,
            [productId]: !prevState[productId],
        }));
    };

    return (
        <div className='lingerie-products-content'>
            <div className='filters-products'>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>

            <div className='lingerie-products-box'>
                {products?.map((product) => (
                    <div key={product._id} className='lingerie-products'>
                        <span className='liked-product'>
                            <svg
                                onClick={() => likedProductIconColor(product._id)}
                                fill={iconLikedColor[product._id] ? 'red' : '#000000'}
                                version='1.1'
                                id='Capa_1'
                                width='800px'
                                height='800px'
                                viewBox='0 0 475.528 475.528'
                                className='liked-product-icon '
                            >
                                <g>
                                    <g>
                                        <path
                                            d='M237.376,436.245l0.774,0.976c210.94-85.154,292.221-282.553,199.331-367.706
			c-92.899-85.154-199.331,30.953-199.331,30.953h-0.774c0,0-106.44-116.107-199.331-30.953
			C-54.844,154.658,26.437,351.092,237.376,436.245z'
                                        />
                                    </g>
                                </g>
                            </svg>
                        </span>

                        <img
                            className='lingerie-image'
                            src={product.images[0]}
                        />
                        <section className='product-info'>
                            <span>{product.name}</span>
                            <span>{product.price}</span>
                        </section>
                        <section className='product-color'>
                            <div className='product-color-selection'>
                                <span
                                    style={{
                                        background: `${product.colors[0].toLowerCase()}`,
                                    }}
                                ></span>
                            </div>
                            <div className='product-color-selection'>
                                <span
                                    style={{
                                        background: `${product.colors[1].toLowerCase()}`,
                                    }}
                                ></span>
                            </div>
                        </section>
                    </div>
                ))}
            </div>
        </div>
    );
};
