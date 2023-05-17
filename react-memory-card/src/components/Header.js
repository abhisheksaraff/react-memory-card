import React from "react";

const Header = ({ currentScore, bestScore, codeIsActivated, totalLives }) => {
  return (
    <div>
      <div>Score = {currentScore}</div>
      <div>Best Score = {bestScore}</div>
      {codeIsActivated && <div>Lives Left = {totalLives}</div>}
    </div>
  );
};

export default Header;
