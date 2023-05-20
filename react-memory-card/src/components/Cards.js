import React from "react";
import Card from 'react-bootstrap/Card';

const Cards = ({ picture, name, hasBeenSelected, updateHasBeenClicked, codeIsActivated }) => {
  return (
    <Card className="cards" onClick={() => updateHasBeenClicked(name)}>
      <Card.Img variant="top" src={picture} />
      {/*codeIsActivated && <Card.Text>{hasBeenSelected + ""}</Card.Text>*/}
    </Card>
  );
};

export default Cards;
