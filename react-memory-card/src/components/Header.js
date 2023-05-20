import React from "react";

const Header = ({
  currentScore,
  currentLevel,
  bestScore,
  codeIsActivated,
  totalLives,
}) => {
  return (
    <nav class="header navbar fixed-top navbar-dark bg-dark">
      <a class="navbar-brand">Memory Card Game</a>
      <span class="navbar-text">
        Level: {currentLevel} | Current Score: {currentScore} | Best Score: {bestScore}
        {codeIsActivated && (
          <span class="navbar-text"> | Lives Left: {totalLives}</span>
        )}
      </span>
    </nav>
  );
};

export default Header;
