// Función para obtener productos desde la API ☕
export async function fetchProducts() {
  try {
    const response = await fetch("http://localhost:3001/api/get-products");
    if (!response.ok) {
      throw new Error("Error al obtener productos");
    }
    const data = await response.json();

    return data.data; // Devuelve solo el array de productos
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}
