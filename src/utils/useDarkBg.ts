import { create } from "zustand";

type DarkBgStore = {
  bgVisible: boolean;
  toggleBg: () => void;
  closeBg: () => void;
};

export const useDarkBg = create<DarkBgStore>((set) => ({
  bgVisible: false,
  toggleBg: () => set((state) => ({ bgVisible: !state.bgVisible })),
  closeBg: () => set({ bgVisible: false }),
}));    