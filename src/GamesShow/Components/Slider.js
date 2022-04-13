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
import ReactPlayer from "react-player";

//importacion de imagenes

const db = getFirestore(firebase2);

function Slider() {
  const { id } = useParams();

  const [game, setGame] = useState({});
  const [duration, setDuration] = useState("");

  function getGames() {
    const ref = doc(db, "games", id);

    onSnapshot(ref, (querySnapshot) => {
      getDoc(ref, id).then((doc) => {
        const { videojuego, ...rest } = doc.data();

        setGame({ ...rest, id });
      });
    });
  }

  console.log(duration);

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
          <ReactPlayer
            url="https://www.youtube.com/embed/NN-9SQXoi50"
            onDuration={setDuration}
            style={{ width: "100%", height: "600px" }}
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
