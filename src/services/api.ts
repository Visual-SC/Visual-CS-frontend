// Función para obtener productos desde la API ☕
export async function fetchProducts() {
  try {
    const response = await fetch("http://localhost:3001/api/get-products");


    if (!response.ok) {
      throw new Error("Error al obtener productos");
    }
    const data = await response.json();

    return data.data; 
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export async function fetchProductByCategory(category: string) {
  try {
    const safeCategory = encodeURIComponent(category);
    const response = await fetch(`http://localhost:3001/api/get-products/${safeCategory}`);
    if (!response.ok) {
      throw new Error("Error al obtener productos por categoría");
    }
    const data = await response.json();

    return data.data;
  } catch (error) {
    console.error(`Error obteniendo productos por categoría ❌: ${category}`, error);
    return [];
  }
}
