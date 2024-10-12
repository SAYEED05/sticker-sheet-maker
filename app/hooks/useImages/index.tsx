import { useImageStore } from "@/app/store/imageStore";
import { UseImagesReturnType } from "./types";
import { useShallow } from "zustand/shallow";
import Konva from "konva";

export const useImages = (): UseImagesReturnType => {
  const {
    importedImages,
    setImportedImages,
    reset,
    selectedImage,
    setSelectedImage,
  } = useImageStore(
    useShallow((state) => ({
      importedImages: state.importedImages,
      setImportedImages: state.setImportedImages,
      reset: state.reset,
      selectedImage: state.selectedImage,
      setSelectedImage: state.setSelectedImage,
    }))
  );

  const exportCanvas = () => {
    const stage = Konva.stages[0];
    const scale = 2; // Increase the scale for higher resolution
    const dataURL = stage.toDataURL({ pixelRatio: scale });
    const link = document.createElement("a");
    link.download = "canvas.png";
    link.href = dataURL;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const newImages = files.map((file, index) => {
      const src = URL.createObjectURL(file);
      return {
        src,
        x: 20 * (importedImages.length + index),
        y: 20 * (importedImages.length + index),
        img: null,
      };
    });
    setImportedImages([...importedImages, ...newImages]);
  };

  const handleDragEnd = (
    e: Konva.KonvaEventObject<DragEvent>,
    index: number
  ) => {
    const { x, y } = e.target.position();
    setImportedImages(
      importedImages.map((image, i) =>
        i === index ? { ...image, x, y } : image
      )
    );
  };

  return {
    importedImages,
    setImportedImages,
    reset,
    selectedImage,
    setSelectedImage,
    exportCanvas,
    handleFileChange,
    handleDragEnd,
  };
};
