import React from "react";

import CardData from "./cardData/CardData";

function CardDetails() {
  return (
    <div className="card-details">
      <h2 className="card-details__h2">Credit card details</h2>

      <CardData />

      <button className="card-details_btn">CONFIRM</button>
    </div>
  );
}

export default CardDetails;
