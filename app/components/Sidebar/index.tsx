import DownloadIcon from "@/app/assets/icons/DownloadIcon";
import SettingsIcon from "@/app/assets/icons/SettingsIcon";
import UploadIcon from "@/app/assets/icons/UploadIcon";
import React from "react";
import { VisuallyHiddenInput, Wrapper } from "./styled";
import useUi from "@/app/hooks/useUi";
import { useImages } from "@/app/hooks/useImages";
import { Typography } from "@mui/material";

const Sidebar = () => {
  const { setIsModalOpen, isModalOpen } = useUi();
  const { exportCanvas, handleFileChange, importedImages } = useImages();

  return (
    <Wrapper>
      <label htmlFor="file-upload" style={{ position: "relative" }}>
        {importedImages?.length && (
          <div
            style={{
              height: "24px",
              width: "24px",
              color: "#000",
              position: "absolute",
              backgroundColor: "#B9BAA3",
              borderRadius: "50%",
              left: "36px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography fontSize={12}>{importedImages?.length}</Typography>
          </div>
        )}
        <UploadIcon />
        <VisuallyHiddenInput
          id="file-upload"
          type="file"
          onChange={handleFileChange}
          multiple
        />
      </label>
      <SettingsIcon onClick={() => setIsModalOpen(!isModalOpen)} />
      <DownloadIcon onClick={() => exportCanvas()} />
    </Wrapper>
  );
};

export default Sidebar;
