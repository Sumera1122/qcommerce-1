// types/product.ts
export interface Product {
    selectedVariant: any;
    weight?: number;
    imageUrl: string;
    quantity: number;
    _id: string;
    category: string;  // Define a separate interface for the products
    name: string;
    id: number;
    price: number;
    originalPrice?: number;
    tags?: string[];
    image?: {
        asset: {
            _ref: string;
            _type: string;
        };
    };
    description?: string;
    available: boolean;
}

