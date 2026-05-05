import { create } from "zustand";

export type AddedToastPayload = {
  nombre: string;
  cantidad: number;
  total: number;
};

type UiStore = {
  addedToastVisible: boolean;
  addedToastId: number;
  addedToastPayload: AddedToastPayload | null;
  showAddedToast: (payload: AddedToastPayload) => void;
  hideAddedToast: () => void;
};

export const useUiStore = create<UiStore>((set) => ({
  addedToastVisible: false,
  addedToastId: 0,
  addedToastPayload: null,
  showAddedToast: (payload) =>
    set(() => ({
      addedToastVisible: true,
      addedToastId: Date.now(),
      addedToastPayload: payload
    })),
  hideAddedToast: () =>
    set((state) => ({
      addedToastVisible: false,
      addedToastPayload: state.addedToastPayload,
      addedToastId: state.addedToastId
    }))
}));
