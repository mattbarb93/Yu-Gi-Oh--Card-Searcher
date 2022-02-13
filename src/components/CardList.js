import React from "react";
import CardItem from "./CardItem";

const CardList = ({ cards, onCardSelect }) => {
  if (cards.length === 0) {
    return <div>Number of results: 0</div>;
  }
  const renderedList = cards.map((card) => {
    return <CardItem key={card.id} onCardSelect={onCardSelect} card={card} />;
  });
  return (
    <div>
      <div className="ui segment">
        Your search returned {cards.length} results:
      </div>
      <div className="ui grid">
        <div className="ui column grid">{renderedList}</div>
      </div>
    </div>
  );
};

export default CardList;
