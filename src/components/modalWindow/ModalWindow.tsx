import React from "react";
import ModalContent from "./modalContent/ModalContent";

type PropsType = {
  modal: string;
};

function ModalWindow(props: PropsType) {
  return (
    <div className={"modal-wrapper" + " " + props.modal}>
      <ModalContent />
    </div>
  );
}

export default ModalWindow;
