//Documentacion!
//https://react-bootstrap.github.io/components/cards/

/* import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Home from "../../Home/Home";
import CardStyle from "./CardStyle";

//listo mano
const Service = () => {
  const [game, setGame] = useState([]);

  const apiurl =
    "https://api.rawg.io/api/games?key=8be7428a65a94da0849bced3aa5ef6b3&platform=4";
  const fetchApi = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setGame(data.results))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchApi(apiurl);
  }, []);

  return (
    <div className="container">
      <CardStyle game={game} />
    </div>
  );
};

export default Service; */
