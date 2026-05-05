import type { Product } from "../../types/product-env";

export interface ProductOrderProps extends Product {
  cantidad: number;
  total: number;
}

export type ProductCardProps = Omit<Product, "categoria"| "disponible"|"ingredientes"|"imagen"|"descripcion"> 

export type CategoriesPropsList = {
  category: string;
}