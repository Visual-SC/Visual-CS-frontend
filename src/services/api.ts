import type { Product } from "../types/product-env";

const RAW_API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:3001";
const API_BASE_URL = RAW_API_BASE_URL.replace(/\/+$/, "");

function buildApiUrl(path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  if (!API_BASE_URL) return normalizedPath;

  // Tolerant behavior: if user sets VITE_API_BASE_URL ending with /api,
  // avoid duplicating the prefix when callers pass '/api/...'
  if (API_BASE_URL.endsWith("/api") && normalizedPath.startsWith("/api/")) {
    return `${API_BASE_URL}${normalizedPath.slice("/api".length)}`;
  }

  return `${API_BASE_URL}${normalizedPath}`;
}

type JsonValue = unknown;

async function requestJson(url: string): Promise<{ ok: boolean; status: number; data: JsonValue | null }> {
  const response = await fetch(url);
  let data: JsonValue | null = null;

  try {
    data = await response.json();
  } catch {
    data = null;
  }

  return { ok: response.ok, status: response.status, data };
}

async function requestFirstOk(urls: string[]) {
  let last = { ok: false, status: 0, data: null as JsonValue | null };
  for (const url of urls) {
    // eslint-disable-next-line no-await-in-loop
    last = await requestJson(buildApiUrl(url));
    if (last.ok) return { url, ...last };
  }
  const attempted = urls.join(" | ");
  throw new Error(`API request failed (status ${last.status}). Attempted: ${attempted}`);
}

function normalizeProducts(payload: JsonValue): Product[] {
  if (Array.isArray(payload)) return payload as Product[];
  if (payload && typeof payload === "object") {
    const maybeObj = payload as Record<string, unknown>;
    const data = maybeObj.data;
    const products = maybeObj.products;
    if (Array.isArray(data)) return data as Product[];
    if (Array.isArray(products)) return products as Product[];
  }
  return [];
}

function normalizeProduct(payload: JsonValue): Product | null {
  if (payload && typeof payload === "object") {
    const maybeObj = payload as Record<string, unknown>;
    const product = maybeObj.product;
    const data = maybeObj.data;
    if (product && typeof product === "object") return product as Product;
    if (data && typeof data === "object") return data as Product;
    if (typeof maybeObj._id === "string") return maybeObj as Product;
  }
  return null;
}

// Función para obtener productos desde la API ☕
export async function fetchProducts() {
  try {
    const { data } = await requestFirstOk([
      "/api/products",
      "/api/get-products",
    ]);

    return normalizeProducts(data);
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export async function fetchProductByCategory(category: string,page: number) {
  try {
    let safeCategory = encodeURIComponent(category);
    let safePage = Number(encodeURIComponent(page));

    const { data } = await requestFirstOk([
      // New API (per plan.md)
      `/api/products/category/${safeCategory}?page=${safePage}`,
      `/api/products/category/${safeCategory}`,
      // Legacy API
      `/api/get-products/${safeCategory}/${safePage}`,
      `/api/get-products/${safeCategory}`,
    ]);

    const products = normalizeProducts(data);
    const totalPages =
      (data && typeof data === "object" && typeof (data as Record<string, unknown>).totalPages === "number"
        ? ((data as Record<string, unknown>).totalPages as number)
        : 1);

    return { products, totalPages };
  } catch (error) {
    console.error(`Error obteniendo productos por categoría ❌: ${category}`, error);
    return {
      products: [],
      totalPages: 1,
    };
  }
}

export async function fechOneProductById(id: string) {
  try {
    let safeId = encodeURIComponent(id);
    const { data } = await requestFirstOk([
      // New API (per plan.md)
      `/api/products/${safeId}`,
      // Legacy API
      `/api/get-product/${safeId}`,
    ]);

    return { product: normalizeProduct(data) };
  } catch (error) {
    console.error(`Error obteniendo el producto por ID ❌: ${id}`, error);
    return { product: null };
  }
} 