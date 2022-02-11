import React from "react";

const CardList = ({ cards }) => {
  const renderedList = cards.map((card) => {
    return (
      <div key={card.id}>
        <img alt={card.name} src={card.card_images[0].image_url} />
      </div>
    );
  });
  return <div>{renderedList}</div>;
};

export default CardList;
