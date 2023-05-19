import React, { useEffect, useState } from "react";

import Card from "./Card";

const Body = ({
  currentCards,
  setCurrentCards,
  incrementCurrentScore,
  incrementLevel,
  madeAMistake,
}) => {
  const shuffle = (cards) => {
    //shuffle currentCards
    let newOrder = [],
      shuffledCards = []; //contains the order in which currentCards will be shuffled

    //this will run until newOrder has a position for each element of currentCards that will later be stored in currentCards
    while (newOrder.length !== cards.length) {
      let tempPosition = Math.floor(Math.random() * cards.length); //Generate a temp number between 0 and length of cards - 1

      if (!newOrder.includes(tempPosition)) newOrder.push(tempPosition);
    }

    //arrange shuffledCards according to newOrder
    for (let i = 0; i < cards.length; i++) {
      shuffledCards.push(cards[newOrder[i]]);
    }

    return shuffledCards;
  };

  const updateHasBeenClicked = (cardId) => {
    let tempCurrentCards = [];
    let hasMadeAMistake = false;

    currentCards.forEach((card) => {
      if (card.name === cardId) {
        if (card.hasBeenSelected === false) {
          //cards hasn't been clicked before
          incrementCurrentScore();
          tempCurrentCards.push({
            picture: card.picture,
            name: card.name,
            hasBeenSelected: true,
          });
        } else {
          //cards has been clicked before
          hasMadeAMistake = true;
          tempCurrentCards.push(card);
        }
      } else tempCurrentCards.push(card); //untouched card
    });

    if (!hasMadeAMistake) {
      let selectedCardsCount = 0;
      tempCurrentCards.forEach((card) => {
        if (card.hasBeenSelected) selectedCardsCount++;
      });

      if (selectedCardsCount === currentCards.length) {
        //every cards has been selected
        incrementLevel();
      } else {
        //not all cards have been selected
        setCurrentCards(shuffle(tempCurrentCards));
      }
    } else {
      setCurrentCards(shuffle(tempCurrentCards));
      madeAMistake();
    }
  };

  return (
    <>
      <ul>
        {currentCards.map((card) => {
          return (
            <li key={card.name}>
              <Card
                picture={card.picture}
                name={card.name}
                hasBeenSelected={card.hasBeenSelected}
                updateHasBeenClicked={updateHasBeenClicked}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Body;
