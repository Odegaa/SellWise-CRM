import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IStore {
  toggle: boolean;
  toggleOpen: () => void;
  toggleClose: () => void;
}

const useBarsStore = create(
  persist<IStore>(
    (set) => ({
      toggle: false,
      toggleOpen: () => set({ toggle: true }),
      toggleClose: () => set({ toggle: false }),
    }),
    {
      name: 'bars',
    },
  ),
);

export { useBarsStore };
