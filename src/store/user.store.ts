import { create } from "zustand";

interface User {
  id: number;
  name: string;
  email: string;
}


interface UserStore {
  user: User | null;
  isAuth: boolean;
  login: (userData: User) => void;
  logout: () => void;
}
export const useUserStore = create<UserStore>((set) => ({
  user: null,
  isAuth: false,

  login: (userData) =>
    set(() => ({
      user: userData,
      isAuth: true,
    })),

  logout: () =>
    set(() => ({
      user: null,
      isAuth: false,
    })),
}));
