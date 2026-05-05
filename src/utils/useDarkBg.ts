import { create } from "zustand";

type DarkBgStore = {
  bgVisible: boolean;
  cartVisible: boolean;
  productFloatingVisible: boolean;
  toggleBg: () => void;
  closeBg: () => void;
  openCart: () => void;
  closeCart: () => void;
  openOrderFloating: () => void;
  closeOrderFloating: () => void;
};

export const useDarkBg = create<DarkBgStore>((set) => ({
  bgVisible: false,
  cartVisible: false,
  productFloatingVisible: false,
  toggleBg: () => set((state) => ({ bgVisible: !state.bgVisible })),
  closeBg: () => set({ bgVisible: false, cartVisible: false, productFloatingVisible: false }),
  openCart: () => set({ cartVisible: true }),
  closeCart: () => set({ cartVisible: false }),
  openOrderFloating: () => set({ productFloatingVisible: true }),
  closeOrderFloating: () => set({ productFloatingVisible: false }),
}));    