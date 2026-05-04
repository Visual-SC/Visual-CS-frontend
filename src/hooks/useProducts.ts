import { create } from "zustand";
import { fetchProductByCategory, fetchProducts } from "../services/api";
import type { Product } from "../types/product-env";	

type ProductStore ={
	products: Product[];
	productsByCategory: Product[];
	totalIndexPages: number;
	getProducts: () => Promise<void>;
	getProductsByCategory: (category: string, page: number, totalPages: number) => Promise<void>;
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

	// funcion para obtener los productos por categorías  y páginación desde la API ☕
	productsByCategory: [],
	totalIndexPages: 1,
	getProductsByCategory: async (category: string, page: number, totalPages: number) => {
		try {
			let resolvedCategory = category || "base_de_espresso";
			let resolvedPage = page || 1;
			
			const data = await fetchProductByCategory(resolvedCategory, resolvedPage);
			let resolvedTotalPages = (data && !Array.isArray(data) && data?.totalPages) || totalPages || 1;
			
			set({ 
				productsByCategory: Array.isArray(data) ? data : data?.products || [],
				totalIndexPages: resolvedTotalPages,
			});
		} catch (error) {
			console.error("Error fetching products by category:", error);
		}
	},
}));