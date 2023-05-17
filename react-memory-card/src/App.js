import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import database from "./assets/Database.json";
import konamiCode from "./assets/KonamiCode.json";

const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [currentLevel, setLevel] = useState(1);
  const [currentCards, setCurrentCards] = useState(database.data[0]);
  const [totalLives, setTotalLives] = useState(1);

  const [keyUpCount, setKeyUpCount] = useState(0);
  //let keyUpCount = 0;
  const [codeIsActivated, setCodeIsActivated] = useState(false);
  //let codeIsActivated = false;

  const incrementCurrentScore = () => {
    setCurrentScore(currentScore + 1);

    if (currentScore + 1 > bestScore) updateBestScore();
  };

  const incrementLevel = () => {
    setCurrentCards(database.data[currentLevel]);
    setLevel(currentLevel + 1);
  };

  const updateBestScore = () => {
    setBestScore(currentScore + 1);
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
    setCurrentCards(database.data[0]);
  };

  const upUpDownDown = (event) => {
    //let name = event.key;
    let code = event.code;

    //if the current code hasn't completed the konami code but hasn't had a mistake yet either
    if (keyUpCount < konamiCode.data.length - 1) {
      //if the next keyup is the right key for konami code, continue waiting for next key
      if (konamiCode.data[keyUpCount] === code) {
        setKeyUpCount(keyUpCount + 1);
        //keyUpCount++;
      //if the next keyup is the wrong key for konami code, start over
      } else {
        setKeyUpCount(0);
        //keyUpCount = 0;
      }
    //if the current code is equal to the konami code
    } else {
      //setKeyUpCount(0);
      //keyUpCount = 0;
      incrementTotalLives();
      document.removeEventListener("keyup", upUpDownDown);
    }
    console.log(keyUpCount + " " + codeIsActivated);
  };

  const incrementTotalLives = () => {
    if (!codeIsActivated) {
      setTotalLives(30);
      setCodeIsActivated(true);
      //codeIsActivated = true;
    }
  };

  /*
  // Add event listener on keyup
  document.addEventListener(
    "keyup",
    (event) => {
      //let name = event.key;
      let code = event.code;

      if (keyUpCount < konamiCode.data.length - 1) {
        if (konamiCode.data[keyUpCount] === code) {
          setKeyUpCount(keyUpCount + 1);
          //keyUpCount++;
        } else {
          setKeyUpCount(0);
          //keyUpCount = 0;
        }
      } else {
        //setKeyUpCount(0);
        //keyUpCount = 0;
        incrementTotalLives();
      }
      console.log(keyUpCount + " " + codeIsActivated);
    },
    false
  );
*/

  useEffect(() => {
    document.addEventListener("keyup", (event) => upUpDownDown);
  }, []);

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
