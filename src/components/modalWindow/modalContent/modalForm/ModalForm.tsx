import React from "react";
import PersonDetails from "./personDetails/personDetails";
import CardDetails from "./cardDetails/CardDetails";

function ModalForm(){

    return(
        <form>
            <PersonDetails />
            <CardDetails />

        </form>
    )
}

export default ModalForm;