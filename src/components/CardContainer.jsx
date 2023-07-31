import React, { useState } from "react";
import Card from "./Card";
import cardData from "./cardData.json"; // Import the card data from cardData.json

const CardContainer = () => {
  const initialData = cardData.cardData;
  const [data, setData] = useState(initialData);

  const shuffleCards = () => {
    const shuffledData = [...data];
    for (let i = shuffledData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]];
    }
    setData(shuffledData);
  };

  return (
    <div className="card-container">
      {data.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          imageUrl={card.imageUrl}
          description={card.description}
          handleClick={shuffleCards} // Pass the shuffle function as a prop to the Card component
        />
      ))}
    </div>
  );
};

export default CardContainer;
