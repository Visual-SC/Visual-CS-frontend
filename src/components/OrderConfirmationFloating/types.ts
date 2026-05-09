import type { ProductOrderProps } from "../../types/order-env";

export type CategoriesPropsList = {
  category: string;
};

export type FloatingContentProps = {
  productById: Omit<ProductOrderProps, "cantidad" | "total">;
  closeOrder: () => void;
  createOrder: (products: ProductOrderProps) => void;
  showAddedToast: (payload: { nombre: string; cantidad: number; total: number }) => void;
};