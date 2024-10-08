import Link from "next/link";
import React, { useState, useEffect } from "react";
import sample1 from "@/app/assets/sample-1.png";
import sample2 from "@/app/assets/sample-2.png"; // Add more sample images as needed
import { Layer, Stage, Image as KonvaImage } from "react-konva";
import Konva from "konva";

const LayoutCreator = () => {
  const [images, setImages] = useState<
    { src: string; x: number; y: number; img: HTMLImageElement | null }[]
  >([
    { src: sample1.src, x: 20, y: 20, img: null },
    { src: sample2.src, x: 240, y: 20, img: null },
    // Add more images with different positions as needed
  ]);

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
    loadImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDragEnd = (
    e: Konva.KonvaEventObject<DragEvent>,
    index: number
  ) => {
    const { x, y } = e.target.position();
    setImages((prevImages) =>
      prevImages.map((image, i) => (i === index ? { ...image, x, y } : image))
    );
  };

  console.log("first");

  return (
    <>
      <Link href="/">Home</Link>
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
