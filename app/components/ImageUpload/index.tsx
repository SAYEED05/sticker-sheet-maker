import { Button } from "@mui/material";
import React from "react";

import { useImageStore } from "@/app/store/imageStore";
import Image from "next/image";
import { convertFileListToObjectUrls } from "@/app/utils";
import { VisuallyHiddenInput } from "./styled";

const ImageUpload = () => {
  const { importedImages, setImportedImages } = useImageStore();

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
        <VisuallyHiddenInput
          type="file"
          onChange={(event) => {
            if (event.target.files) {
              const converted = convertFileListToObjectUrls(event.target.files);
              setImportedImages(converted);
            }
          }}
          multiple
        />
      </Button>
      {importedImages?.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt="Uploaded Image"
          width={200}
          height={200}
        />
      ))}
      <div
        style={{
          //a4-sheet dimension
          width: "210mm",
          height: "297mm",
          background: "red",
          transform: "rotate(90deg)",
        }}
      ></div>
    </>
  );
};

export default ImageUpload;
