import React from "react";
import "./CardDetail.css";

const CardDetail = ({ card }) => {
  if (!card) {
    return <div>Selected Card Details</div>;
  }
  return (
    <div className="card-detail">
      <img alt={card.name} src={card.card_images[0].image_url} />
    </div>
  );
};

export default CardDetail;
