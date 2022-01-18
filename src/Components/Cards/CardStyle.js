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
  const [gameName, setgameName] = useState([]);

  const limitGame = game.slice(0, 4);

  const filtros = game.filter((x) => x.esunjuego == "si");

  const tried = filtros.map((x) => x.juego);

  function getGames() {
    const ref = query(collection(db, "games"));

    onSnapshot(ref, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data(), doc.id);
      });
      console.log();
      setGame(items);
    });

    if (tried.length >= 4) {
      const pusheado = [];
      const lolitotequiero = tried + "...";
      pusheado.push(lolitotequiero);
      setgameName(pusheado);
    }
    console.log(tried);
  }

  useEffect(() => {
    getGames();
  }, []);
  //Usar filter
  function truncate(input) {
    if (input.length > 20) return input.substring(0, 20) + "...";
    else return input;
  }
  return (
    <>
      <Container>
        {filtros.map((item) => (
          <Container key={item.id} className="carousel5">
            <Row>
              <Col>
                <Card
                  className="border-0"
                  style={{ width: "100%", borderRadius: "15px" }}
                >
                  <Link to={`/GamesShow/${item.juego}`}>
                    <Card.Img
                      variant="top"
                      src={item.imagen}
                      className="img-fluid img-card"
                      style={{ borderRadius: "15px 15px 0 0" }}
                    />
                  </Link>
                  <Card.Body>
                    <Card.Title>
                      <h4>{truncate(item.juego)}</h4>
                      <h6>Mojang</h6>
                      <h6>{item.precio}</h6>
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
