//Documentacion!
//https://react-bootstrap.github.io/components/cards/

import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Creadores from "./PruebasApi.js";
//importacion de la imagen
import MinecraftImg from "../../Assets/MinecraftImg.jpg";
import "./CardEstilo.css";
import { initializeApp } from "firebase/app";
import { Carousel, Form, Row, Col } from "react-bootstrap";
import Payment from "../../GamesShow/Components/Payment.js";
import fortnite from "../../Components/Cards/fortnite.jpg";
import firebase2 from "../../Home/Firebase2.js";
import {
  query,
  collection,
  onSnapshot,
  getFirestore,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";

const db = getFirestore(firebase2);
const TopGames = function () {
  const [game, setGame] = useState([]);

  function getGames() {
    const ref = query(collection(db, "games"));

    const unsub = onSnapshot(ref, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setGame(items);
    });
  }
  useEffect(() => {
    getGames();
  }, []);

  return (
    <>
      <Container>
        {game.map((games) => (
          <Container className="carousel5">
            <Row>
              <Col>
                <Card
                  key={games.id}
                  className="border-0"
                  style={{ width: "100%" }}
                >
                  <Card.Img
                    variant="top"
                    src={games.imagen}
                    className="img-fluid img-card"
                  />

                  <Card.Body>
                    <Card.Title>
                      {games.precio}
                      <p>
                        {games.juego}
                        <h6></h6>
                        <h6>Rating ⭐</h6>
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
