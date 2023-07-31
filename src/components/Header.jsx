import React, { useState, useEffect } from "react";

const Header = ({ score }) => {
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
    }
  }, [score]);

  return (
    <header>
      <h1>Card Memory Game</h1>
      <div className="score-container">
        <p>Score: {score}</p>
        <p>High Score: {bestScore}</p>
      </div>
    </header>
  );
};

export default Header;
