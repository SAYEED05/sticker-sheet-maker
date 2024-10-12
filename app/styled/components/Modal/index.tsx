import { Props } from "./types";
import { ModalBody, StyledBaseModal } from "./styled";
export default function Modal({ open, handleClose, children }: Props) {
  return (
    <StyledBaseModal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalBody>{children}</ModalBody>
    </StyledBaseModal>
  );
}
