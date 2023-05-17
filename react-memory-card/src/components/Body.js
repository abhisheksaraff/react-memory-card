import React, { useState } from "react";

import Card from "./Card";

const Body = ({
  currentCards,
  incrementCurrentScore,
  incrementLevel,
  madeAMistake,
}) => {
  const [cardsDisplay, setCardsDisplay] = useState(currentCards);

  const shuffle = () => {
    //shuffle currentCards
    let newOrder = [],
      shuffledCards = []; //contains the order in which currentCards will be shuffled

    //this will run until newOrder has a position for each element of currentCards that will later be stored in cardsDisplay
    while (newOrder.length !== currentCards.length) {
      let tempPosition = Math.floor(Math.random() * cardsDisplay.length); //Generate a temp number between 0 and length of cards - 1

      if (!newOrder.includes(tempPosition)) newOrder.push(tempPosition);
    }

    //arrange shuffledCards according to newOrder
    for (let i = 0; i < currentCards.length; i++) {
      shuffledCards.push(currentCards[newOrder[i]]);
    }

    setCardsDisplay(shuffledCards);
  };

  //shuffle();

  return (
    <>
      <button onClick={incrementCurrentScore}>+</button>
      <button onClick={madeAMistake}>-</button>
      <ul>
        {cardsDisplay.map((card) => {
          return <li key={card.name}><Card picture={card.picture} name={card.name} hasBeenSelected={card.hasBeenSelected} /></li>;
        })}
      </ul>
    </>
  );
};

export default Body;
