import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Definir el estado de la aplicación
interface UserState {
    username: string
    jwt: string

    // Acciones
    setJWT: (jwt: string) => void 
    setUser: (username: string) => void 
}

  // Acciones
//   setMessages: (messages: Message[]) => void;

// Crear store
export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
        username: "",
        jwt: "",
      
      // Acciones
        setUser: (username) => set({username}),
        setJWT: (jwt) => set({jwt})
    }),
    {
      name: 'nexo',
    //   partialize: (state) => ({ 
    //     sessionId: state.sessionId,
    //     theme: state.theme,
    //   }),
    }
  )
);