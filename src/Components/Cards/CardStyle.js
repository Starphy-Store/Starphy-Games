//Documentacion!
//https://react-bootstrap.github.io/components/cards/

import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Creadores from "./PruebasApi.js";
//importacion de la imagen
import MinecraftImg from "../../Assets/MinecraftImg.jpg";
import "./CardEstilo.css";
import { Carousel, Form, Row, Col } from "react-bootstrap";
import Payment from "../../GamesShow/Payment.js";

const TopGames = function () {
  const [game, setGame] = useState([]);

  const apiurl =
    "https://api.rawg.io/api/games?key=8be7428a65a94da0849bced3aa5ef6b3&platform=4&page=1";
  const fetchApi = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setGame(data.results))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    console.log("2 veces");
    fetchApi(apiurl);
  }, []);

  return (
    <>
      <Container>
        {game.map((item, index) => (
          <Container className="carousel5">
            <Row>
              <Col md={2}>
                <Card
                  key={index}
                  className="border-0"
                  style={{ width: "100%" }}
                >
                  <Link to={`/${item.slug}`}>
                    <Card.Img
                      variant="top"
                      src={item.background_image}
                      className="img-fluid"
                    />
                  </Link>
                  <Card.Body>
                    <Card.Title>
                      $11.99
                      <p>
                        {item.name}
                        <h6></h6>
                        <h6>Rating {item.rating}⭐</h6>
                      </p>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        ))}
      </Container>
    </>
  );
};

export default TopGames;
