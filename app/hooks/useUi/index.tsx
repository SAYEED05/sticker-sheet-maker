import { useUiStore } from "@/app/store/ui";
import { useShallow } from "zustand/shallow";

const useUi = () => {
  const { isModalOpen, setIsModalOpen } = useUiStore(
    useShallow((state) => ({
      isModalOpen: state.isModalOpen,
      setIsModalOpen: state.setIsModalOpen,
    }))
  );

  return {
    isModalOpen,
    setIsModalOpen,
  };
};

export default useUi;
