import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set, get) => ({
      messages: 1, // State variabel
      increaseMessages: () => set({ messages: get().messages + 1 }), // Funktion som lægger til variablen
    }),
    {
      name: "message-storage",
    }
  )
);

export default useStore;
