import React from "react";

const Card = ({ title, imageUrl, description, isClicked, handleClick }) => {
  const cardStyle = isClicked ? { border: "10px solid red" } : {};

  return (
    <div className="card" style={cardStyle} onClick={handleClick}>
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
    </div>
  );
};

export default Card;
