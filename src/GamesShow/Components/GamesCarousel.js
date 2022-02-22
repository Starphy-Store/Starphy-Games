import React, { useState, useEffect } from "react";
import { Carousel, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import MinecraftImg from "../../Assets/MinecraftImg.jpg";
import firebase2 from "../../Home/Firebase2";
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

function GamesCarousel() {
  const { id } = useParams();

  const [game, setGame] = useState({});

  function getGames() {
    const ref = doc(db, "games", id);

    onSnapshot(ref, (querySnapshot) => {
      getDoc(ref, id).then((data) => {
        const { videojuego, ...rest } = data.data();
        const juego = rest;
        console.log(juego);
        setGame({ ...juego, id });
      });
    });
  }

  useEffect(() => {
    getGames();
  }, []);

  return (
    <div>
      <Carousel indicators={false} className="pb-4 minicarousel">
        <Carousel.Item>
          <Row>
            <Col md={4}>
              <img src={game.imagenjuego} className="GamesCarouselImg"></img>
            </Col>
            <Col md={4}>
              <img src={game.imagenportada} className="GamesCarouselImg"></img>
            </Col>
            <Col md={4}>
              <img src={game.imagenjuego2} className="GamesCarouselImg"></img>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col md={4}>
              <img src={game.imagenjuego2} className="GamesCarouselImg"></img>
            </Col>
            <Col md={4}>
              <img src={game.imagenjuego} className="GamesCarouselImg"></img>
            </Col>
            <Col md={4}>
              <img src={game.imagenportada} className="GamesCarouselImg"></img>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col md={4}>
              <img src={game.imagenportada} className="GamesCarouselImg"></img>
            </Col>
            <Col md={4}>
              <img src={game.imagenjuego} className="GamesCarouselImg"></img>
            </Col>
            <Col md={4}>
              <img src={game.imagenjuego2} className="GamesCarouselImg"></img>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default GamesCarousel;
