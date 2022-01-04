import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import GamesCarousel from "./GamesCarousel";
import Mojang from "../../Assets/Mojang.png";
import logoMinecraft from "../../Assets/1000.png";
import "../GamesShow.css";
import { useParams } from "react-router-dom";
import firebase2 from "../../Home/Firebase2.js";
import DataIndex from "../../DataIndex/DataIndex";
import CardStyle from "../../Components/Cards/CardStyle";
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
  const { doc } = useParams();

  console.log(doc);
  const [game, setGame] = useState([]);

  useEffect(() => {
    getGames();
  }, []);

  function getGames() {
    const juegos = query(collection(db, "games"));
    setGame(juegos);
  }

  return (
    <div>
      <Container className="GamesInfo">
        <Row>
          <Col md={7}>
            <GamesCarousel />

            <h6>Aventura | Construccion | Mundo abierto </h6>
            <Row className="pt-3">
              <img
                src={Mojang}
                style={{ width: "90px", borderRadius: "15%", align: "left" }}
              ></img>
              <h3>sexooooo aa</h3>
            </Row>
          </Col>
          <Col md={5}>
            <Col style={{ backgroundColor: "#1f1f1f", borderRadius: "10px" }}>
              <Row>
                <img
                  src={logoMinecraft}
                  style={{ width: "100%", heigth: "auto" }}
                />
                <h2 style={{ textAlign: "center", paddingTop: "-20px" }}>
                  sexo aaaa
                </h2>
              </Row>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SecundaryImgs;
