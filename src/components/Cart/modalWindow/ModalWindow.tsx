import React from "react";
import "./ModalWindow";
import ModalContent from "./modalContent/ModalContent";
//import {WrapperWindow} from "./wrapperWindow/WrapperWindow";


function ModalWindow(){
   

    return(
        //  modal-wrapper__block add if className
        <div className="modal-wrapper ">
           <ModalContent />
        </div>
    )
}

export default ModalWindow;