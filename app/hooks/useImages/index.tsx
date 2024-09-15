import { useImageStore } from "@/app/store/imageStore";
import { UseImagesReturnType } from "./types";

export const useImages = (): UseImagesReturnType => {
  const importedImages = useImageStore((state) => state.importedImages);
  const setImportedImages = useImageStore((state) => state.setImportedImages);
  const reset = useImageStore((state) => state.reset);
  return { importedImages, setImportedImages, reset };
};
