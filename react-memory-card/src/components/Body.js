import React, { useState } from "react";

import Card from "./Card";

const Body = ({ currentCards, incrementCurrentScore, incrementLevel, madeAMistake }) => {
  const [cardsDisplay, setCardsDisplay] = useState(currentCards);

  const shuffle = () => {
    //shuffle cardsDisplay;
    //setCardsDisplay(shuffledCards);
  };

  return (
    <>
      <button onClick={incrementCurrentScore}>+</button>
      <button onClick={madeAMistake}>-</button>
      <Card />
      <Card />
      <Card />
    </>
  );
};

export default Body;
