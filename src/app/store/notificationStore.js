import { create } from "zustand"; // Funktion importeres – opretter en store
import { persist } from "zustand/middleware"; // Funktion importeres – gør at state (messages) kan blive gemt i browserens lokale lagring

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
