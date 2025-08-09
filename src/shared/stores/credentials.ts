import { createStore } from 'zustand/vanilla';
import { persist } from 'zustand/middleware';

// Definir el estado de la aplicación
interface UserState {
  user: unknown;
  jwt: string;
}

interface UserActions {
  setJWT: (jwt: string) => void;
  setUser: (user: unknown) => void;
}

  // Acciones
//   setMessages: (messages: Message[]) => void;

// Crear store vanilla
export const userStore = createStore<UserState & UserActions>()(
  persist(
    (set, get) => ({
      user: "",
      jwt: "",
      setUser: (user) => set({ user }),
      setJWT: (jwt) => set({ jwt }),
    }),
    {
      name: 'nexo',
    }
  )
);