import { create } from "zustand";
import { ImageStore } from "./types";

export const useImageStore = create<ImageStore>((set) => ({
  importedImages: [],
  setImportedImages: (images: ImageStore["importedImages"]) =>
    set({ importedImages: images }),
  reset: () => set({ importedImages: [] }),
}));
