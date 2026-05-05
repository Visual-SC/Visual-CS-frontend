import type { Product } from "../../types/product-env";

export type ProductCardProps = Omit<Product, "categoria"| "disponible"|"ingredientes"|"imagen"|"descripcion"> 

export type CategoriesPropsList = {
  category: string;
  text: string; 
}