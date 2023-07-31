import React, { useState } from "react";
import Card from "./Card";
import cardData from "./cardData.json"; // Import the card data from cardData.json

const CardContainer = () => {
  const initialData = cardData.cardData.map((card) => ({
    ...card,
    isClicked: false,
  }));
  const [data, setData] = useState(initialData);
  const [clickedCards, setClickedCards] = useState([]);

  const shuffleCards = () => {
    const shuffledData = [...data];
    for (let i = shuffledData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]];
    }
    setData(shuffledData);
  };

  const handleClick = (id) => {
    if (clickedCards.includes(id)) {
      // Card is already clicked before, show "You lose" message
      console.log("You lose");
    } else {
      // Card is clicked for the first time, record the click
      setClickedCards((prevClickedCards) => [...prevClickedCards, id]);

      setData((prevData) =>
        prevData.map((card) =>
          card.id === id ? { ...card, isClicked: true } : card
        )
      );
      shuffleCards();
    }
  };

  console.log(clickedCards);

  return (
    <div className="card-container">
      {data.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          imageUrl={card.imageUrl}
          description={card.description}
          isClicked={card.isClicked}
          handleClick={() => handleClick(card.id)}
        />
      ))}
    </div>
  );
};

export default CardContainer;
