import { ImageStore } from "@/app/store/types";

export interface UseImagesReturnType {
  importedImages: ImageStore["importedImages"];
  setImportedImages: ImageStore["setImportedImages"];
  reset: ImageStore["reset"];
}
