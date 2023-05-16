import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import data from "./assets/data.json";

const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [currentLevel, setLevel] = useState(1);
  const [currentCards, setCurrentCards] = useState(data.data[0]);
  const [totalLives, setTotalLives] = useState(1);

  const incrementCurrentScore = () => {
    setCurrentScore(currentScore + 1);

    if (currentScore + 1 > bestScore) updateBestScore();
  };

  const incrementLevel = () => {
    setCurrentCards(data.data[currentLevel]);
    setLevel(currentLevel + 1);
  };

  const updateBestScore = () => {
    setBestScore(currentScore + 1);
  };

  const incrementTotalLives = () => {
    setTotalLives(30);
  };

  const madeAMistake = () => {
    if (totalLives === 1) {
      initializeGame();
    } else {
      setTotalLives(totalLives - 1);
    }
  };

  const initializeGame = () => {
    console.log(`You Lost at Score: ${currentScore}`);

    //set current Score to 0, set Level to 1, set current Cards to Level 1
    setCurrentScore(0);
    setLevel(1);
    setCurrentCards(data.data[0]);
  };

  const upUpDownDown = () => {
    incrementTotalLives();
  };

  return (
    <div>
      <Header
        currentScore={currentScore}
        bestScore={bestScore}
        totalLives={totalLives}
      />
      <Body
        currentCards={currentCards}
        incrementCurrentScore={incrementCurrentScore}
        incrementLevel={incrementLevel}
        madeAMistake={madeAMistake}
      />
      <Footer />
    </div>
  );
};

export default App;
