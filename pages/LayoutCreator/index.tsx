import React, { useEffect, useRef } from "react";
import { Layer, Stage, Image as KonvaImage, Transformer } from "react-konva";
import Konva from "konva";
import { useImages } from "@/app/hooks/useImages";
import { Wrapper, CanvasWrapper } from "./styled";
import Sidebar from "@/app/components/Sidebar";
import CanvasSettingsModal from "@/app/components/CanvasSettingsModal";

const LayoutCreator = () => {
  const {
    importedImages,
    setImportedImages,
    selectedImage,
    setSelectedImage,
    handleDragEnd,
  } = useImages();
  const importedImagesRef = useRef(importedImages);
  const transformerRef = useRef<Konva.Transformer>(null);
  importedImagesRef.current = importedImages;

  const loadImages = React.useCallback(async () => {
    const loadedImages = await Promise.all(
      importedImagesRef.current.map((image) => {
        return new Promise<HTMLImageElement>((resolve) => {
          const img = new window.Image();
          img.src = image.src;
          img.onload = () => resolve(img);
        });
      })
    );

    setImportedImages(
      importedImagesRef.current.map((image, index) => ({
        ...image,
        img: loadedImages[index],
      }))
    );
  }, [setImportedImages]);

  useEffect(() => {
    if (importedImages.length > 0) {
      loadImages();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [importedImages.length]);

  useEffect(() => {
    if (transformerRef.current && selectedImage !== null) {
      const selectedNode = Konva.stages[0].findOne(`#image-${selectedImage}`);
      if (selectedNode) {
        transformerRef.current.nodes([selectedNode]);
      }
      transformerRef.current.getLayer()?.batchDraw();
    }
  }, [selectedImage]);

  return (
    <Wrapper>
      <Sidebar />
      <CanvasWrapper>
        <Stage
          width={3.779528 * 210}
          height={3.779528 * 297}
          /*    width={793}
          height={1122} */
          style={{ background: "#B9BAA3" }}
          onMouseDown={(e) => {
            if (e.target === e.target.getStage()) {
              setSelectedImage(null);
            }
          }}
        >
          <Layer>
            {importedImages.map(
              (image, index) =>
                image.img && (
                  <KonvaImage
                    key={index}
                    id={`image-${index}`}
                    image={image.img}
                    x={image.x}
                    y={image.y}
                    width={200}
                    height={200}
                    draggable
                    onDragEnd={(e) => handleDragEnd(e, index)}
                    onClick={() => setSelectedImage(index)}
                    className="image-border"
                  />
                )
            )}
            {selectedImage !== null && <Transformer ref={transformerRef} />}
          </Layer>
        </Stage>
      </CanvasWrapper>
      <CanvasSettingsModal />
    </Wrapper>
  );
};

export default LayoutCreator;
