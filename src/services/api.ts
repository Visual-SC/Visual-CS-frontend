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

export async function fetchProductByCategory(category: string,page: number) {
  try {
    let safeCategory = encodeURIComponent(category);
    let safePage = Number(encodeURIComponent(page));
    let totalPage: number;  
    
    const response = await fetch(`http://localhost:3001/api/get-products/${safeCategory}/${safePage}`);
    if (!response.ok) {
      throw new Error("Error al obtener productos por categoría");
    }
    const data = await response.json();
  
    totalPage = data.totalPages || 1;

   
    return {
      products: data.data,
      totalPages: totalPage,
    };
  } catch (error) {
    console.error(`Error obteniendo productos por categoría ❌: ${category}`, error);
    return [];
  }
}
