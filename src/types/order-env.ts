import type { Product } from "./product-env";

export type EstadoOrden = 'pendiente' | 'preparando' | 'completada' | 'cancelada';

export interface ProductOrderProps extends Product {
  cantidad: number;
  total: number;
}

export interface ProductCardOrderProps extends ProductOrderProps {
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
  discardProduct: () => void;
}

export type ResumenOrden = {
  subtotal: number;
  total: number;
}

export type OrderInitial = {
    numero_orden: string,
    fecha: Date,
    estado: EstadoOrden,
    items: ProductOrderProps[],
    resumen: ResumenOrden
}