export type Product = {
    _id:  string,
    name: string,
    description: string,
    price: number,
    category_id: string,
    images: string[],
    sizes: string[],
    colors: string[],
    purpose?: string;
    seasonality?: string;
    materials?: string;
};

export type LikedProductsState = Record<string, boolean>;

export type FilterCategory = string[];