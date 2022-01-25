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
  const { id } = useParams([]);

  const [game, setGame] = useState([]);

  const filtrado = game.filter((x) => x.esunjuego == "si");

  const filtrado2 = filtrado.filter((x) => x.juego == id);

  function getGames() {
    const ref = query(collection(db, "games"));

    onSnapshot(ref, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data(), id);
      });
      setGame(items);
    });
  }

  useEffect(() => {
    getGames();
  }, []);

  return (
    <div>
      {filtrado2.map((item) => (
        <Carousel indicators={false} className="pb-4 minicarousel">
          <Carousel.Item>
            <Row>
              <Col md={4}>
                <img
                  src={item.imagenportada}
                  className="GamesCarouselImg"
                ></img>
              </Col>
              <Col md={4}>
                <img src={item.imagenjuego} className="GamesCarouselImg"></img>
              </Col>
              <Col md={4}>
                <img src={item.imagenjuego2} className="GamesCarouselImg"></img>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              <Col md={4}>
                <img
                  src={item.imagenportada}
                  className="GamesCarouselImg"
                ></img>
              </Col>
              <Col md={4}>
                <img src={item.imagenjuego} className="GamesCarouselImg"></img>
              </Col>
              <Col md={4}>
                <img src={item.imagenjuego2} className="GamesCarouselImg"></img>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              <Col md={4}>
                <img
                  src={item.imagenportada}
                  className="GamesCarouselImg"
                ></img>
              </Col>
              <Col md={4}>
                <img src={item.imagenjuego} className="GamesCarouselImg"></img>
              </Col>
              <Col md={4}>
                <img src={item.imagenjuego2} className="GamesCarouselImg"></img>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      ))}
    </div>
  );
}
export default GamesCarousel;
