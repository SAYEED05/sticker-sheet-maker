export interface Props {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

export interface ModalHeaderProps {
  modalName: string | undefined;
  handleClose: () => void | undefined;
}
