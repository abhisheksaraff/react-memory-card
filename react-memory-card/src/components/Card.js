import React from "react";

const Card = ({ picture, name, hasBeenSelected, updateHasBeenClicked }) => {
  return (
    <div className="card" onClick={() => updateHasBeenClicked(name)}>
      <img src={picture} alt={picture}/>
      <div>{hasBeenSelected + ""}</div>
    </div>
  );
};

export default Card;
