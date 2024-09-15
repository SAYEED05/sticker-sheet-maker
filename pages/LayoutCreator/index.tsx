import { useImages } from "@/app/hooks/useImages";
import Link from "next/link";
import React from "react";

const LayoutCreator = () => {
  const { importedImages } = useImages();
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas && !!importedImages?.length) {
      const context = canvas.getContext("2d");
      if (context) {
        importedImages?.forEach((image, index) => {
          const img = new Image();
          img.src = image;
          img.onload = () => {
            context.drawImage(img, index * 100, 0, 100, 100); // Example positioning
          };
        });
      }
    }
  }, [importedImages]);

  return (
    <>
      <Link href="/">Home</Link>
      <canvas
        style={{ width: "100%", height: "100%", backgroundColor: "#000" }}
      ></canvas>
    </>
  );
};

export default LayoutCreator;
