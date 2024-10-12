import { Box, Modal, styled } from "@mui/material";

export const ModalBody = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 400,
  p: 4,
  outline: 0,
});

export const StyledBaseModal = styled(Modal)({});
export const HeaderWrapper = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignContent: "center",
});
