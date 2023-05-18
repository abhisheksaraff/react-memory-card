import React from "react";

const Card = ({ picture, name, hasBeenSelected, updateHasBeenSelected }) => {
  return (
    <div onClick={() => updateHasBeenSelected(name)}>
      <div>{picture}</div>
      <div>{name}</div>
      <div>{hasBeenSelected + ""}</div>
    </div>
  );
};

export default Card;
