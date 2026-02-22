import { create } from 'zustand';
import { combine } from 'zustand/middleware';

export const useAppUX = create(
  combine(
    {
      asideHeader: false,
      activeSection: null as string | null,
    },
    (set) => ({
      //modificaciones para el botón de hamburguesa y el asideHeader
      openAsideHeader: () => set({ asideHeader: true }),
      closeAsideHeader: () => set({ asideHeader: false }),
      toggleAsideHeader: () => set((state) => ({ asideHeader: !state.asideHeader })),
      setActiveSection: (section: string | null) => set({ activeSection: section }),
    })
  )
);