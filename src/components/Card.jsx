import React from "react";

const Card = ({ title, imageUrl, description, handleClick }) => {
  return (
    <div className={`card`} onClick={handleClick}>
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
    </div>
  );
};

export default Card;
