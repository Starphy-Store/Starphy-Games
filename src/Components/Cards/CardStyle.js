//Documentacion!
//https://react-bootstrap.github.io/components/cards/

import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

//importacion de la imagen
import MinecraftImg from "../../Assets/MinecraftImg.jpg";

const TopGames = function () {
  useEffect(() => {
    fetchGames();
  }, []);

  const [games, setGames] = useState([]);

  const fetchGames = () => {
    console.log("aaaaaaa");
    fetch("https://rawg.io/api/collections/must-play/games")
      .then((resp) => resp.json())
      .then(({ results }) => setGames(results));
  };
  return (
    <div>
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <h3
              to={{
                pathname: `/game/${game.name}`,
                gameProps: {
                  game: game,
                },
              }} /* porque esploto? jasj */
            ></h3>
            <h3 style={{ color: "white" }}>{game.name}</h3>
            <img
              src={game.background_image}
              alt="game"
              style={{ width: "20vw", height: "auto" }}
            ></img>
          </li>
        ))}
      </ul>
    </div>
  );
};

function CardStyle() {
  <Card className="border-0" style={{ width: "100%" }}>
    <Card.Img variant="top" src={MinecraftImg} />
    <Card.Body>
      <Card.Title>
        $11.99
        <p>
          Minecraft Launcher
          <h6>Mojang</h6>
        </p>
      </Card.Title>
    </Card.Body>
  </Card>;
}
export default TopGames;
