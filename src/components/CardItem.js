import React from "react";
import "./CardItem.css";

const CardDetail = ({ card, onCardSelect }) => {
  return (
    // <div>CardDetail</div>
    <div
      onClick={() => onCardSelect(card)}
      className="five wide column card-item"
      key={card.id}
    >
      <img alt={card.name} src={card.card_images[0].image_url_small} />
    </div>
  );
};

export default CardDetail;
