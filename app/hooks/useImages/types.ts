import { ImageStore } from "@/app/store/types";
import Konva from "konva";
export interface UseImagesReturnType {
  importedImages: ImageStore["importedImages"];
  setImportedImages: ImageStore["setImportedImages"];
  reset: ImageStore["reset"];
  selectedImage: ImageStore["selectedImage"];
  setSelectedImage: ImageStore["setSelectedImage"];
  exportCanvas: () => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDragEnd: (e: Konva.KonvaEventObject<DragEvent>, index: number) => void;
}
