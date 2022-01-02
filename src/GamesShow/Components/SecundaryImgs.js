import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import GamesCarousel from "./GamesCarousel";
import Mojang from "../../Assets/Mojang.png";
import logoMinecraft from "../../Assets/1000.png";
import "../GamesShow.css";
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

const SecundaryImgs = () => {
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
    <div>
      <Container className="GamesInfo">
        {game.map((games) => (
          <Row key={games.id}>
            <Col md={7}>
              <GamesCarousel />

              <h6>Aventura | Construccion | Mundo abierto </h6>
              <Row className="pt-3">
                <img
                  src={Mojang}
                  style={{ width: "90px", borderRadius: "15%", align: "left" }}
                ></img>
                <h3>{games.juego}</h3>
              </Row>
            </Col>
            <Col md={5}>
              <Col style={{ backgroundColor: "#1f1f1f", borderRadius: "10px" }}>
                <Row>
                  <img
                    src={logoMinecraft}
                    style={{ width: "100%", heigth: "auto" }}
                  />
                  <h2>mainkra</h2>
                </Row>
              </Col>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default SecundaryImgs;
