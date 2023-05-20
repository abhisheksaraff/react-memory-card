import React from "react";

const Card = ({ picture, name, hasBeenSelected, updateHasBeenClicked }) => {
  return (
    <div onClick={() => updateHasBeenClicked(name)}>
      <img src={picture} alt={picture}/>
      <div>{picture}</div>
      <div>{name}</div>
      <div>{hasBeenSelected + ""}</div>
    </div>
  );
};

export default Card;
