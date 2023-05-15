import React, { useState } from "react";

import Card from "./Card";

const Body = (currentCards) => {
    const [cardsDisplay, setCardsDisplay] = useState(currentCards);
  
    const shuffle = () => {
        //shuffle cardsDisplay;
        //setCardsDisplay(shuffledCards);
    };

  return (
    <>
      Body
      <Card />
      <Card />
      <Card />
    </>
  );
};

export default Body;
