import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IToken {
  token: string | null;
}

interface IStore {
  token: IToken['token'];
  signIn: (tokens: { token: string }) => void;
  signOut: () => void;
}

export const useAuthStorageStore = create(
  persist<IStore>(
    (set) => ({
      token: null,
      signIn: ({ token }) => set({ token }),
      signOut: () => set({ token: null }),
    }),
    {
      name: 'token',
    },
  ),
);
