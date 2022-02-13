import React from "react";

const CardList = ({ cards }) => {
  if (cards.length === 0) {
    return <div>Number of results: 0</div>;
  }
  const renderedList = cards.map((card) => {
    return (
      <div className="five wide column" key={card.id}>
        <img alt={card.name} src={card.card_images[0].image_url_small} />
      </div>
    );
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
