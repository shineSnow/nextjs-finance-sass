import { create } from "zustand";


type OpenAccountState = {
    id?: string;
    isOpen: boolean;
    onOpen: (id: string) => void;
    onclose: () => void;
}

export const useOpenAccount = create<OpenAccountState>(set => ({
    id: undefined,
    isOpen: false,
    onOpen: (id: string) => set({ isOpen: true, id }),
    onclose: () => set({ isOpen: false, id: undefined })
}))