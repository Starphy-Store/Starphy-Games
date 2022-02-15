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
import { Carousel, Form } from "react-bootstrap";
import "../../Components/Components.css";
import firebase2 from "../../Home/Firebase2";

//importacion de imagenes

const db = getFirestore(firebase2);

function Slider() {
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
    <div className="Slider">
      {filtrado2.map((item) => (
        <Carousel
          variant="dark"
          indicators={false}
          style={{ zIndex: "0", borderRadius: "10px" }}
          className="carousel-inner"
        >
          <Carousel.Item>
            <iframe
              style={{ width: "100%", height: "100%" }}
              src="https://www.youtube.com/embed/NN-9SQXoi50"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            {/* <img
              className="d-block w-100 h-70"
              src={item.imagenjuego}
              className="sliderImg"
              alt="First slide"
            /> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-70"
              src={item.imagenjuego2}
              alt="Second slide"
              className="sliderImg"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-70"
              src={item.imagenjuego3}
              alt="Second slide"
              className="sliderImg"
            />
          </Carousel.Item>
          4{" "}
        </Carousel>
      ))}
    </div>
  );
}
export default Slider;