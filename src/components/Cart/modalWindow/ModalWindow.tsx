import React from "react";
import "./ModalWindow";
import ModalContent from "./modalContent/ModalContent";
//import {WrapperWindow} from "./wrapperWindow/WrapperWindow";


function ModalWindow(){
   

    return(
        //  modal-wrapper__block add if className
        <div className="modal-wrapper modal-wrapper__block">
           <ModalContent />
        </div>
    )
}

export default ModalWindow;