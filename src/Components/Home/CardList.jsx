import React from "react";
import Card from "./Card";
import Carousel from "react-multi-carousel";
const CardList = ({ games, setGames }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1500 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1500, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel responsive={responsive}>
      {games.map((game) => (
        <Card game={game} key={game.id} />
      ))}
    </Carousel>
  );
};

export default CardList;
