import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  query,
  collection,
  onSnapshot,
  getFirestore,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";
import { Carousel, Container, Form } from "react-bootstrap";
import "../../Components/Components.css";
import firebase2 from "../../Home/Firebase2";

//importacion de imagenes

const db = getFirestore(firebase2);

function Slider() {
  const { id } = useParams();

  const [game, setGame] = useState({});

  function getGames() {
    const ref = doc(db, "games", id);

    onSnapshot(ref, (querySnapshot) => {
      getDoc(ref, id).then((doc) => {
        const { videojuego, ...rest } = doc.data();

        setGame({ ...rest, id });
      });
    });
  }

  useEffect(() => {
    getGames();
  }, []);

  return (
    <div className="Slider">
      <Carousel
        variant="dark"
        indicators={false}
        style={{ zIndex: "0", borderRadius: "10px" }}
        className="carousel-inner"
      >
        <Carousel.Item>
          <iframe
            style={{ width: "100%", height: "600px" }}
            src="https://www.youtube.com/embed/NN-9SQXoi50"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-70"
            src={game.imagenjuego}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-70"
            src={game.imagenjuego2}
            alt="Second slide"
          />
        </Carousel.Item>
        4
      </Carousel>
    </div>
  );
}
export default Slider;
