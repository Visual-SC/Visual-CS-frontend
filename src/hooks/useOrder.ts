import { create } from "zustand";
import type { OrderInitial, ProductOrderProps, ResumenOrden } from "../types/order-env";

const calculateResumen = (items: ProductOrderProps[]): ResumenOrden => {
    const subtotal = items.reduce((acc, item) => acc + item.total, 0);
    return {
        subtotal,
        total: subtotal
    };
};

type OrderStore = {
    order: OrderInitial;
    createOrder: (products: ProductOrderProps) => void;
    increaseItemQuantity: (productId: string) => void;
    decreaseItemQuantity: (productId: string) => void;
    removeItem: (productId: string) => void;
    sendOrder: () => Promise<void>;
    clearOrder: () => void;
}

export const useOrderStore = create<OrderStore>((set, get) => ({
    order: {
        numero_orden: "",
        fecha: new Date().toISOString(),
        estado: "pendiente",
        items: [],
        resumen: {
            subtotal: 0,
            total: 0
        },
        _id:""
    },
    createOrder: (products: ProductOrderProps) => {
        set((state) => {
            const existing = state.order.items.find((item) => item._id === products._id);

            const items = existing
                ? state.order.items.map((item) => {
                    if (item._id !== products._id) return item;

                    const nextCantidad = item.cantidad + products.cantidad;
                    return {
                        ...item,
                        cantidad: nextCantidad,
                        total: nextCantidad * item.precio
                    };
                })
                : [...state.order.items, products];

            return {
                order: {
                    ...state.order,
                    items,
                    resumen: calculateResumen(items)
                }
            };
        });
    },
    increaseItemQuantity: (productId: string) => {
        set((state) => {
            const items = state.order.items.map((item) => {
                if (item._id !== productId) return item;
                const nextCantidad = item.cantidad + 1;
                return {
                    ...item,
                    cantidad: nextCantidad,
                    total: nextCantidad * item.precio
                };
            });

            return {
                order: {
                    ...state.order,
                    items,
                    resumen: calculateResumen(items)
                }
            };
        });
    },
    decreaseItemQuantity: (productId: string) => {
        set((state) => {
            const items = state.order.items.map((item) => {
                if (item._id !== productId) return item;
                const nextCantidad = item.cantidad > 1 ? item.cantidad - 1 : 1;
                return {
                    ...item,
                    cantidad: nextCantidad,
                    total: nextCantidad * item.precio
                };
            });

            return {
                order: {
                    ...state.order,
                    items,
                    resumen: calculateResumen(items)
                }
            };
        });
    },
    removeItem: (productId: string) => {
        set((state) => {
            const items = state.order.items.filter((item) => item._id !== productId);
            return {
                order: {
                    ...state.order,
                    items,
                    resumen: calculateResumen(items)
                }
            };
        });
    },
    sendOrder: async () => {
        const { _id, ...rest } = get().order;
        const numero_orden = crypto.randomUUID();
        const orderToSend = {
            ...rest,
            numero_orden,
        };

        set((state) => ({
            order: { ...state.order, numero_orden }
        }));

        const response = await fetch(`http://localhost:3001/api/create-order`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(orderToSend),
        });

        if (!response.ok) {
            const errorBody = await response.text().catch(() => "");
            throw new Error(`Error al crear la orden (${response.status}): ${errorBody}`);
        }

        await response.json();
    },
    clearOrder: () => {
        set({
            order: {
                numero_orden: "",
                fecha: new Date().toISOString(),
                estado: "pendiente",
                items: [],
                resumen: { subtotal: 0, total: 0 }
            }
        });
    }
}));