// Función para obtener productos desde la API ☕
export async function fetchProducts() {
	const response = await fetch("http://localhost:3001/api/get-products");
	try {
		if (!response.ok) {
		throw new Error("Error al obtener productos");
	}

	const data = await response.json();
	
	return data;
	} catch (error) {
		console.error("Error fetching products:", error);
		throw error;
	}
}
