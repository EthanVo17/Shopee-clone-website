import { Category } from '../categorytype/Category.type';

interface Variant {
    sku: string;
    color?: string;
    size?: string;
    stock: number;
    price: number;
}

interface Product {
    _id: string;
    name: string;
    description: string;
    price: number;
    discountPrice?: number;
    countInStock: number;
    images: string[];
    category: Category | string;
    brand: string;
    slug: string;
    rating: number;
    numReviews: number;
    variant: Variant[];
    createdAt: string;
    updatedAt: string;
}

interface ProductListResponse {
    message: string;
    data: Product[];
    pagination: {
        currentPage: number;
        totalPages: number;
        totalItems: number;
        itemsPerPage: number;
    };
}

export type { Variant, Product, ProductListResponse };
