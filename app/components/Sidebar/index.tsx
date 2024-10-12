import DownloadIcon from "@/app/assets/icons/DownloadIcon";
import SettingsIcon from "@/app/assets/icons/SettingsIcon";
import UploadIcon from "@/app/assets/icons/UploadIcon";
import React from "react";
import { VisuallyHiddenInput, Wrapper } from "./styled";
import useUi from "@/app/hooks/useUi";
import { useImages } from "@/app/hooks/useImages";

const Sidebar = () => {
  const { setIsModalOpen, isModalOpen } = useUi();
  const { exportCanvas, handleFileChange } = useImages();

  return (
    <Wrapper>
      <label htmlFor="file-upload">
        <UploadIcon />
        <VisuallyHiddenInput
          id="file-upload"
          type="file"
          onChange={handleFileChange}
          multiple
        />
      </label>
      <SettingsIcon onClick={() => setIsModalOpen(isModalOpen)} />
      <DownloadIcon onClick={() => exportCanvas()} />
    </Wrapper>
  );
};

export default Sidebar;
