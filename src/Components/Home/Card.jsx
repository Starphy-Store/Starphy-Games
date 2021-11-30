import React from "react";
import StyledCard from "./StyledCard";
const Card = ({ game }) => {
  return (
    <StyledCard>
      <img src={game.image} alt="game" />
      <span>{game.price}$</span>
      <h2>{game.name}</h2>
      <a href="https://github.com/">{game.creator}</a>
    </StyledCard>
  );
};

export default Card;
