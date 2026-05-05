import { create } from "zustand";
import type { OrderInitial,ProductOrderProps } from "../types/order-env";

type OrderStore = {
    order: OrderInitial;
    createOrder: (products: ProductOrderProps) => void;
}

export const useOrderStore = create<OrderStore>((set) => ({
    order: {
        numero_orden: "",
        fecha: new Date(),
        estado: "pendiente",
        items: [],
        resumen: {
            subtotal: 0,
            total: 0
        }
    },
    createOrder: (products: ProductOrderProps) => {
        //traer el producto del componente de orden flotante
        
        //actualizar a la orden insertando el prroducto en la clave items
        set((state) => ({
            order: {
                ...state.order,
                items: [...state.order.items, products]
            }
        }))
    }
}));