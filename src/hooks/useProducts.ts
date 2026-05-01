import { create } from "zustand";
import { fetchProducts } from "../services/api";

type Product = {
	nombre: string;
	categoria: string;
	precio: number;
	descripcion: string;
	disponible: boolean;
	imagen: string;
	ingredientes?: string[];
}

type ProductStore ={
	products: Product[];
	getProducts: () => Promise<void>;
}

export const useProductStore = create<ProductStore>((set) => ({
	products: [],
	getProducts: async () => {
		try {
			const products = await fetchProducts();
			set({ products });
		} catch (error) {
			console.error("Error fetching products:", error);
		}
	}
}));