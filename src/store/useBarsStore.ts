import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IStore {
  toggle: boolean;
  setToggle: () => void;
  toggleClose: () => void;
}

const useBarsStore = create(
  persist<IStore>(
    (set) => ({
      toggle: false,
      setToggle: () => set((state) => ({ toggle: !state.toggle })),
      toggleClose: () => set({ toggle: false }),
    }),
    {
      name: 'bars',
    },
  ),
);

export { useBarsStore };
