import { create } from "zustand";

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
			const response = await fetch("http://localhost:3001/api/get-products");
			if (!response.ok) {
				throw new Error("Error al obtener productos");
			}
			const data = await response.json();
			set({ products: data.data });
		} catch (error) {
			console.error("Error fetching products:", error);
		}
	}
}));