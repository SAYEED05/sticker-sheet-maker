import useUi from "@/app/hooks/useUi";
import Modal from "@/app/styled/components/Modal";
import React, { useCallback } from "react";
import SettingsForm from "./SettingsForm";
import ModalHeader from "@/app/styled/components/Modal/ModalHeader";
import { CanvasSettingsModalWrapper } from "./styled";

const CanvasSettingsModal = () => {
  const { isModalOpen, setIsModalOpen } = useUi();
  console.log(isModalOpen, "isModalOpen");

  const handleClose = useCallback(
    () => setIsModalOpen(false),
    [setIsModalOpen]
  );
  return (
    <Modal open={isModalOpen} handleClose={handleClose}>
      <CanvasSettingsModalWrapper>
        <ModalHeader modalName={"Canvas Settings"} handleClose={handleClose} />
        <SettingsForm />
      </CanvasSettingsModalWrapper>
    </Modal>
  );
};

export default CanvasSettingsModal;
