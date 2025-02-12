import React, { ReactNode, SyntheticEvent, useEffect } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

import Backdrop from "./BackDrop";
import ModalContent from "./ModalContent";
import CloseButton from "./CloseButton";

interface ModalProps {
  onClose: () => void;
  maxwidth?: string;
  maxheight?: string;
  children: ReactNode;
}

const ModalWindow: React.FC<ModalProps> = ({
  onClose,
  maxwidth,
  maxheight,
  children,
}) => {
  useEffect(() => {
    const handleEscClick = ({ code }: KeyboardEvent) => {
      if (code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscClick);

    disableBodyScroll(document.body);

    return () => {
      window.removeEventListener("keydown", handleEscClick);
      enableBodyScroll(document.body);
    };
  }, [onClose]);

  const handleBackdropClick = (e: SyntheticEvent): void => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Backdrop onClick={handleBackdropClick} maxheight={maxheight}>
      <ModalContent maxwidth={maxwidth}>
        <CloseButton onClick={onClose} />
        {children}
      </ModalContent>
    </Backdrop>
  );
};

export default ModalWindow;
