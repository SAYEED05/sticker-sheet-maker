import { create } from "zustand";
import { UiStore } from "./types";

export const useUiStore = create<UiStore>((set) => ({
  isModalOpen: false,
  setIsModalOpen: (isOpen: boolean) => set({ isModalOpen: isOpen }),
}));
