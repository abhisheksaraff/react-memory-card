import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [currentLevel, setLevel] = useState(0);

  const incrementCurrentScore = () => {
    setCurrentScore(currentScore + 1);
  };

  const incrementLevel = () => {
    setLevel(currentLevel + 1);
  };

  const updateBestScore = () => {
    setBestScore(currentScore);
  };

  const initializeGame = () => {
    //set Current Score to 0, set Level to 1
    setCurrentScore(0);
  };

  return (
    <div>
      <Header currentScore = {currentScore} bestScore = {bestScore}/>
      <Body />
      <Footer />
    </div>
  );
};

export default App;
