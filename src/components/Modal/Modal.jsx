import React from "react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import SVG from "react-inlinesvg";
import { del } from "../../assets/icon";

import { CloseIcon, ModalContent, ModalBackdrop } from "./Modal.styled";

const Modal = ({ width, setModalClose, children }) => {
  const modalRoot = document.querySelector("#modal-root");
  const handleCloseByEsc = (e) => {
    if (e.code === "Escape") {
      setModalClose();
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleCloseByEsc);
    return () => {
      window.removeEventListener("keydown", handleCloseByEsc);
    };
  });

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setModalClose();
    }
  };

  return createPortal(
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalContent onClick={(e) => e.stopPropagation()} width={width}>
        <CloseIcon onClick={() => setModalClose()}>
          <SVG src={del} width={14} height={14} title="close" />
        </CloseIcon>
        {children}
      </ModalContent>
    </ModalBackdrop>,
    modalRoot
  );
};
export default Modal;
