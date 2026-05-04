import type { Product } from "../../types/product-env";

export interface ProductOrderProps extends Product {
  cantidad: number;
  total: number;
}