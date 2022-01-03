/* // For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase, { initializeApp } from "firebase/firebase-app";

import { useState, useEffect } from "react";
import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Creadores from "./PruebasApi.js";
//importacion de la imagen
import MinecraftImg from "../../Assets/MinecraftImg.jpg";
import "./CardEstilo.css";
import { Carousel, Form, Row, Col } from "react-bootstrap";
import Payment from "../../GamesShow/Components/Payment.js";
import fortnite from "../../src/Home/fornite.jpg";
import { querySnapshot } from "firebase/firestore";



firebaseian.initializeApp(firebaseConfig); 

function firebaseian() {
  const [games, setgames] = useState([]);

   const ref = firebase.firestore().collection("games"); 

  function getGames() {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setgames(items);
    });
  }
  useEffect(() => {
    getGames();
  }, []);

  return (
    <>
      <Container>
        {games.map((game) => (
          <Container className="carousel5">
            <Row>
              <Col>
                <Card
                  key={game.id}
                  className="border-0"
                  style={{ width: "100%" }}
                >
                  <Link to={`/${item.slug}`}>
                    <Card.Img
                      variant="top"
                      src={fortnite}
                      className="img-fluid img-card"
                    />
                  </Link>
                  <Card.Body>
                    <Card.Title>
                      {game.precio}
                      <p>
                        {game.juego}
                        <h6></h6>
                        <h6>Rating⭐</h6>
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
}

export default firebaseian;
 */
