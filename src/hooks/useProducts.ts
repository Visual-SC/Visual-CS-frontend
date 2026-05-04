import { create } from "zustand";
import { fetchProductByCategory, fetchProducts } from "../services/api";
import type { Product } from "../types/product-env";	

type ProductStore ={
	products: Product[];
	productsByCategory: Product[];
	getProducts: () => Promise<void>;
	getProductsByCategory: (category: string) => Promise<void>;
}

export const useProductStore = create<ProductStore>((set) => ({
	// función para obtener todos los productos desde la API ☕
	products: [],
	getProducts: async () => {
		try {
			const products = await fetchProducts();
			set({ products });
		} catch (error) {
			console.error("Error fetching products:", error);
		}
	},

	// funcion para obtener los productos por categorías desde la API ☕
	productsByCategory: [],
	getProductsByCategory: async (category: string) => {
		try {
			const resolvedCategory = category || "base_de_espresso";
			const products = await fetchProductByCategory(resolvedCategory);
			set({ productsByCategory: products });
		} catch (error) {
			console.error("Error fetching products by category:", error);
		}
	},
}));