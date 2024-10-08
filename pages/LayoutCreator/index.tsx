import React, { useEffect, useRef } from "react";
import { Layer, Stage, Image as KonvaImage } from "react-konva";
import Konva from "konva";
import { useImages } from "@/app/hooks/useImages";
import { Button } from "@mui/material";
import { VisuallyHiddenInput } from "./styled";

const LayoutCreator = () => {
  const { importedImages, setImportedImages } = useImages();
  const importedImagesRef = useRef(importedImages);
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

  const exportCanvas = () => {
    const stage = Konva.stages[0];
    const dataURL = stage.toDataURL();
    const link = document.createElement("a");
    link.download = "canvas.png";
    link.href = dataURL;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        //   startIcon={<CloudUploadIcon />}
      >
        Upload Image(s)
        <VisuallyHiddenInput type="file" onChange={handleFileChange} multiple />
      </Button>
      <Button variant="contained" onClick={exportCanvas}>
        Export Canvas
      </Button>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        style={{ border: "1px solid red" }}
      >
        <Layer>
          {importedImages.map(
            (image, index) =>
              image.img && (
                <KonvaImage
                  key={index}
                  image={image.img}
                  x={image.x}
                  y={image.y}
                  width={200}
                  height={200}
                  draggable
                  onDragEnd={(e) => handleDragEnd(e, index)}
                  className="image-border"
                />
              )
          )}
        </Layer>
      </Stage>
    </>
  );
};

export default LayoutCreator;
