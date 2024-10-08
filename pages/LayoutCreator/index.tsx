import React, { useState, useEffect, useMemo } from "react";
import { Layer, Stage, Image as KonvaImage } from "react-konva";
import Konva from "konva";
import { useImages } from "@/app/hooks/useImages";
import { Button } from "@mui/material";
import { VisuallyHiddenInput } from "./styled";

const LayoutCreator = () => {
  const { importedImages, setImportedImages } = useImages();

  const modifiedImages = useMemo(() => {
    if (!importedImages?.length) {
      return [];
    }
    return importedImages.map((image) => ({
      src: image,
      x: 20,
      y: 20,
      img: null,
    }));
  }, [importedImages]);

  const [images, setImages] = useState<
    { src: string; x: number; y: number; img: HTMLImageElement | null }[]
  >([]);

  useEffect(() => {
    setImages(modifiedImages);
  }, [modifiedImages]);

  const loadImages = React.useCallback(async () => {
    const loadedImages = await Promise.all(
      images.map((image) => {
        return new Promise<HTMLImageElement>((resolve) => {
          const img = new window.Image();
          img.src = image.src;
          img.onload = () => resolve(img);
        });
      })
    );

    setImages((prevImages) =>
      prevImages.map((image, index) => ({
        ...image,
        img: loadedImages[index],
      }))
    );
  }, [images]);

  useEffect(() => {
    if (images.length > 0) {
      loadImages();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images]);

  const handleDragEnd = (
    e: Konva.KonvaEventObject<DragEvent>,
    index: number
  ) => {
    const { x, y } = e.target.position();
    setImages((prevImages) =>
      prevImages.map((image, i) => (i === index ? { ...image, x, y } : image))
    );
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const newImages = files.map((file, index) => {
      const src = URL.createObjectURL(file);
      return {
        src,
        x: 20 * (images.length + index),
        y: 20 * (images.length + index),
        img: null,
      };
    });
    setImages((prevImages) => [...prevImages, ...newImages]);
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
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        style={{ border: "1px solid red" }}
      >
        <Layer>
          {images.map(
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
