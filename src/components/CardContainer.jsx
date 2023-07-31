import React, { useState, useEffect } from "react";
import Card from "./Card";
import cardData from "./cardData.json";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const CardContainer = ({ setScore }) => {
  const initialData = cardData.cardData.map((card) => ({
    ...card,
    isClicked: false,
  }));
  const [data, setData] = useState(initialData);
  const [clickedCards, setClickedCards] = useState([]);

  useEffect(() => {
    setData((prevData) => shuffleArray([...prevData]));
  }, [clickedCards]); // Use an empty dependency array to trigger the effect only once when the component mounts

  const handleCardClick = (id) => {
    if (clickedCards.includes(id)) {
      console.log("You lose");
      setData(initialData);
      setClickedCards([]);
      setScore(0);
    } else {
      setClickedCards((prevClickedCards) => [...prevClickedCards, id]);

      setData((prevData) =>
        prevData.map((card) =>
          card.id === id ? { ...card, isClicked: true } : card
        )
      );

      setScore((prevScore) => prevScore + 1);
    }
  };

  return (
    <main>
      <div className="card-container">
        {data.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            imageUrl={card.imageUrl}
            description={card.description}
            isClicked={card.isClicked}
            handleClick={() => handleCardClick(card.id)}
          />
        ))}
      </div>
    </main>
  );
};

export default CardContainer;
