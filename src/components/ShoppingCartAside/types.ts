import type { Product } from "../../types/product-env";

export interface ProductShoppingCart extends Product {
	cantidad: number;
	total: number;
	increaseQuantity: () => void;
	decreaseQuantity: () => void;
}