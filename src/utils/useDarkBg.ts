import { create } from "zustand";

type DarkBgStore = {
  bgVisible: boolean;
  cartVisible: boolean;
  productFloatingVisible: boolean;
  orderCreatedVisible: boolean;
  toggleBg: () => void;
  openBg: () => void;
  closeBg: () => void;
  openCart: () => void;
  closeCart: () => void;
  openOrderFloating: () => void;
  closeOrderFloating: () => void;
  openOrderCreated: () => void;
  closeOrderCreated: () => void;
};

export const useDarkBg = create<DarkBgStore>((set) => ({
  bgVisible: false,
  cartVisible: false,
  productFloatingVisible: false,
  orderCreatedVisible: false,
  toggleBg: () => set((state) => ({ bgVisible: !state.bgVisible })),
  openBg: () => set({ bgVisible: true }),
  closeBg: () => set({ bgVisible: false, cartVisible: false, productFloatingVisible: false }),
  openCart: () => set({ cartVisible: true }),
  closeCart: () => set({ cartVisible: false }),
  openOrderFloating: () => set({ productFloatingVisible: true }),
  closeOrderFloating: () => set({ productFloatingVisible: false }),
  openOrderCreated: () => set({ orderCreatedVisible: true }),
  closeOrderCreated: () => set({ orderCreatedVisible: false })
}));    