import React from "react";

const Header = ({
  currentScore,
  currentLevel,
  bestScore,
  codeIsActivated,
  totalLives,
}) => {
  return (
    <nav className="header navbar fixed-top navbar-dark bg-dark">
      <h1 className="navbar-brand">Infinite Memory Card</h1>
      <span className="navbar-text">
        Level {currentLevel} | Current Score: {currentScore} | Best Score: {bestScore}
        {codeIsActivated && (
          <span className="navbar-text"> | Lives Left: {totalLives}</span>
        )}
      </span>
    </nav>
  );
};

export default Header;
