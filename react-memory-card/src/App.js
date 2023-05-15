import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import data from "./assets/data.json"

const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [currentLevel, setLevel] = useState(1);
  const [currentCards, setCurrentCards] = useState(data[0]);
  const [madeAMistake, setMadeAMistake] = useState(false);

  const incrementCurrentScore = () => {
    setCurrentScore(currentScore + 1);
  };

  const incrementLevel = () => {
    setCurrentCards(data[currentLevel]);
    setLevel(currentLevel + 1);
  };

  const updateBestScore = () => {
    setBestScore(currentScore);
  };

  const initializeGame = () => {
    //set current Score to 0, set Level to 1, set current Cards to Level 1
    setCurrentScore(0);
    setLevel(1);
    setCurrentCards(data[0]);
  };

  return (
    <div>
      <Header currentScore = {currentScore} bestScore = {bestScore}/>
      <Body currentCards = {currentCards} />
      <Footer />
    </div>
  );
};

export default App;
