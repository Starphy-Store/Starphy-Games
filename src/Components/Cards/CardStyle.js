//Documentacion!

//https://react-bootstrap.github.io/components/cards/

import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

//importacion de la imagen
import MinecraftImg from "../../Assets/MinecraftImg.jpg";
import { initializeApp } from "firebase/app";
import { Row, Col } from "react-bootstrap";
import "./CardsBacanas.css";

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
/* joder buenos dias */
const db = getFirestore(firebase2);

const TopGames = function () {
  const [game, setGame] = useState([]);
  const [gameName, setgameName] = useState([]);

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
    if (input.length > 14) return input.substring(0, 14) + "...";
    else return input;
  }
  function dollarsign(input) {
    if (input == "Gratis") {
      return input;
    } else {
      return "$" + input;
    }
  }
  return (
    <>
      <Container className="d-flex">
        {filtros.map((item) => (
          <Link to={`/GamesShow/${item.juego}`} className="w-25">
            <Container key={item.id}>
              <Row>
                <Col md={212}>
                  <div className="profile-card-2 ">
                    <img src={item.imagenportada} className="img-responsive" />
                    <div className="background "></div>
                    <div className="profile-name">{truncate(item.juego)}</div>
                    <div className="profile-username">{item.creator}</div>
                    <div className="profile-icons">
                      <h5>{dollarsign(item.precio)}</h5>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </Link>
        ))}
      </Container>
    </>
  );
};

export default TopGames;
