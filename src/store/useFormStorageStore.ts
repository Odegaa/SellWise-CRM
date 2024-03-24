import { create } from 'zustand';

interface IModalStore {
  paramsForm: any;
  modal: boolean;
  toggleModal: () => void;
  setParamsForm: (params: any) => void;
  setParamsItem: (params: any) => void;
}

export const useFormStorageStore = create<IModalStore>((set) => ({
  paramsForm: null,
  modal: false,
  toggleModal: () => set((state) => ({ modal: !state.modal })),
  setParamsForm: (params) => set({ paramsForm: params, modal: true }),
  setParamsItem: (params) => set({ paramsForm: params }),
}));
