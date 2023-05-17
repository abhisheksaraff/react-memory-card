import React from "react";

const Card = ({ picture, name, hasBeenSelected }) => {
  return (
    <div>
      <div>{picture}</div>
      <div>{name}</div>
      <div>{hasBeenSelected + ""}</div>
    </div>
  );
};

export default Card;
