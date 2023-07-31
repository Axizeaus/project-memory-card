import React from "react";
import Card from "./Card";

const cardData = [
  {
    title: "Card 1",
    imageUrl: "https://via.placeholder.com/300",
    description: "This is the first card.",
  },
  {
    title: "Card 2",
    imageUrl: "https://via.placeholder.com/300",
    description: "This is the second card.",
  },
  {
    title: "Card 3",
    imageUrl: "https://via.placeholder.com/300",
    description: "This is the third card.",
  },
  {
    title: "Card 4",
    imageUrl: "https://via.placeholder.com/300",
    description: "This is the fourth card.",
  },
  {
    title: "Card 5",
    imageUrl: "https://via.placeholder.com/300",
    description: "This is the fifth card.",
  },
  {
    title: "Card 6",
    imageUrl: "https://via.placeholder.com/300",
    description: "This is the sixth card.",
  },
  {
    title: "Card 7",
    imageUrl: "https://via.placeholder.com/300",
    description: "This is the seventh card.",
  },
  {
    title: "Card 8",
    imageUrl: "https://via.placeholder.com/300",
    description: "This is the eighth card.",
  },
  {
    title: "Card 9",
    imageUrl: "https://via.placeholder.com/300",
    description: "This is the ninth card.",
  },
  {
    title: "Card 10",
    imageUrl: "https://via.placeholder.com/300",
    description: "This is the tenth card.",
  },
];

const CardContainer = () => {
  return (
    <div className="card-container">
      {cardData.map((card, index) => (
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
