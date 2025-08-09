import { createStore } from 'zustand/vanilla';
import { persist } from 'zustand/middleware';

// Definir el estado de la aplicación
interface UserState {
  username: string;
  jwt: string;
}

interface UserActions {
  setJWT: (jwt: string) => void;
  setUser: (username: string) => void;
}

  // Acciones
//   setMessages: (messages: Message[]) => void;

// Crear store vanilla
export const userStore = createStore<UserState & UserActions>()(
  persist(
    (set, get) => ({
      username: "",
      jwt: "",
      setUser: (username) => set({ username }),
      setJWT: (jwt) => set({ jwt }),
    }),
    {
      name: 'nexo',
    }
  )
);