import React from "react";

const Header = ({currentScore, bestScore, totalLives}) => {
  return <div><div>Score = {currentScore}</div>
  <div>Best Score = {bestScore}</div>
  <div>Lives Left = {totalLives}</div></div>;
};

export default Header;
