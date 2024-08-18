import { LikedProductsState } from "../type";

// Функция для загрузки состояния лайков из localStorage
export const loadLikedProducts = (): LikedProductsState => {
    const storedState = localStorage.getItem('likedProducts');
    return storedState ? JSON.parse(storedState) : {};
};

// Функция для сохранения состояния лайков в localStorage
export const saveLikedProducts = (state: LikedProductsState) => {
    localStorage.setItem('likedProducts', JSON.stringify(state));
};