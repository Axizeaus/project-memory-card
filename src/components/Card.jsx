// Card.jsx
import React from "react";

const Card = ({ title, imageUrl, description, isClicked, handleClick }) => {
  return (
    <div className={`card ${isClicked ? "clicked" : ""}`} onClick={handleClick}>
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
    </div>
  );
};

export default Card;
