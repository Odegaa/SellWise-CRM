import { create } from 'zustand';

interface IAuthStore {
  authTokens: string | null;
  setAuthTokens: (tokens: string) => void;
  clearAuthTokens: () => void;
}

export const useAuthStore = create<IAuthStore>((set) => ({
  authTokens: null,
  setAuthTokens: (tokens: string) => set({ authTokens: tokens }),
  clearAuthTokens: () => set({ authTokens: null }),
}));
