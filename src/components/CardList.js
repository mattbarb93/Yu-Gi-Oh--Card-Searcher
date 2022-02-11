import React from "react";

const CardList = ({ cards }) => {
  console.log(cards);
  const renderedList = cards.map((card) => {
    return <div key={card.id}>{card.name}</div>;
  });
  return <div>{renderedList}</div>;
};

export default CardList;
