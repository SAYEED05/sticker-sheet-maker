import React from "react";
import { HeaderWrapper } from "./styled";
import CloseIcon from "@/app/assets/icons/CloseIcon";
import { ModalHeaderProps } from "./types";
import { Typography } from "@mui/material";

const ModalHeader = ({ modalName = "", handleClose }: ModalHeaderProps) => {
  return (
    <HeaderWrapper>
      <Typography fontSize={24} color="#B9BAA3" className="flex items-center">
        {modalName}
      </Typography>
      {handleClose && (
        <div>
          <CloseIcon onClick={() => handleClose?.()} />
        </div>
      )}
    </HeaderWrapper>
  );
};

export default ModalHeader;
