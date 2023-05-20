import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import konamiCode from "./assets/KonamiCode.json";

const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [currentLevel, setLevel] = useState(1);
  const [currentCards, setCurrentCards] = useState([]);
  const [totalLives, setTotalLives] = useState(1);
  const [showAlert, setShowAlert] = useState(false);

  const [keyUpCount, setKeyUpCount] = useState(0);
  const [codeIsActivated, setCodeIsActivated] = useState(false);

  const incrementCurrentScore = () => {
    setCurrentScore(currentScore + 1);
    if (currentScore + 1 > bestScore) updateBestScore();
  };

  const incrementLevel = () => {
    refreshCards(currentLevel + 1);
    setLevel(currentLevel + 1);
    setShowAlert(false);
  };

  const updateBestScore = () => {
    setBestScore(currentScore + 1);
  };

  const madeAMistake = () => {
    if (totalLives === 1) {
      restartGame();
    } else {
      setTotalLives(totalLives - 1);
    }
  };

  const restartGame = () => {
    //set current Score to 0, set Level to 1, set current Cards to Level 1, deactivate code, set lives to 1
    setCurrentScore(0);
    setLevel(1);
    refreshCards(1);
    setCodeIsActivated(false);
    setTotalLives(1);
    setShowAlert(true);
  };

  const incrementTotalLives = () => {
    if (!codeIsActivated) {
      setTotalLives(3);
      setCodeIsActivated(true);
    }
  };

  const upUpDownDown = (event) => {
    if (!codeIsActivated) {
      let code = event.code;

      //if the current code hasn't completed the konami code but hasn't had a mistake yet either
      if (keyUpCount < konamiCode.data.length - 1) {
        //if the next keyup is the right key for konami code, continue waiting for next key
        if (konamiCode.data[keyUpCount] === code) {
          setKeyUpCount(keyUpCount + 1);
        } //if the next keyup is the wrong key for konami code, start over
        else {
          setKeyUpCount(0);
        } //if the current code is equal to the konami code
      } else {
        setKeyUpCount(0);
        incrementTotalLives();
      }
    }
  };

  const refreshCards = async (size) => {
    let tempCards = [];

    //clears screen while loading new cards
    setCurrentCards([]);

    for (let i = 0; i < size * 2; i++) {
      try {
        let response = await fetch("https://picsum.photos/300/");
        let picture = await response.url;
        tempCards.push({
          picture: picture,
          name: i + "",
          hasBeenSelected: false,
        });
      } catch (e) {
        console.error(e.message);
      }
    }
    setCurrentCards(tempCards);
  };

  useEffect(() => {
    refreshCards(1);
  }, []);

  useEffect(() => {
    window.addEventListener("keyup", upUpDownDown);

    return () => {
      window.removeEventListener("keyup", upUpDownDown);
    };
  });

  return (
    <div className="app">
      <div className="top">
        <Header
          currentScore={currentScore}
          currentLevel={currentLevel}
          bestScore={bestScore}
          codeIsActivated={codeIsActivated}
          totalLives={totalLives}
        />
        <Body
          currentCards={currentCards}
          setCurrentCards={setCurrentCards}
          incrementCurrentScore={incrementCurrentScore}
          currentLevel={currentLevel}
          incrementLevel={incrementLevel}
          madeAMistake={madeAMistake}
          showAlert={showAlert}
          setShowAlert={setShowAlert}
          codeIsActivated={codeIsActivated}
        />
      </div>
      <Footer />
    </div>
  );
};

export default App;
