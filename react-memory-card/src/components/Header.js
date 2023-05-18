import React from "react";

const Header = ({
  currentScore,
  currentLevel,
  bestScore,
  codeIsActivated,
  totalLives,
}) => {
  return (
    <div>
      <div>Level = {currentLevel}</div>
      <div>Score = {currentScore}</div>
      <div>Best Score = {bestScore}</div>
      {codeIsActivated && <div>Lives Left = {totalLives}</div>}
    </div>
  );
};

export default Header;
