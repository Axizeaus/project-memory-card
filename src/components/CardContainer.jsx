import React from "react";
import Card from "./Card";
import cardData from "./cardData.json"; // Import the card data from cardData.json

const CardContainer = () => {
  const data = cardData.cardData;
  return (
    <div className="card-container">
      {data.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          imageUrl={card.imageUrl}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default CardContainer;
