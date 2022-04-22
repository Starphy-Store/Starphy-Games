import React, { useState, useEffect } from "react";
import { Container, Col, Row, Carousel } from "react-bootstrap";
import {
  query,
  collection,
  onSnapshot,
  getFirestore,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";
import { ArrowBarRight } from "react-bootstrap-icons";
import firebase2 from "../Home/Firebase2.js";
import { Link } from "react-router-dom";
//importacion del headee

import Footer from "../Footer/Footer";
import Header from "../Components/Nav/Header";
import CardStyle from "../Components/Cards/CardStyle";
import "./Home.css";

//importacion de las Cards
import SliderDelHome from "../Components/SliderDelHome";

//Slider de recomendaciones
import Recomendations1 from "./Recomendations1";
import Explorar from "./Explorar.js";

//Slider juegos compatibles y descargables
const db = getFirestore(firebase2);

const Home = () => {
  const [game, setGame] = useState([]);

  function getGames() {
    const ref = query(collection(db, "games"));

    onSnapshot(ref, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        const { videojuego, ...rest } = doc.data();
        items.push({ ...rest, id: doc.id });
      });
      setGame(items);
    });
  }
  useEffect(() => {
    getGames();
  }, []);

  return (
    <div>
      <Header name="top" />
      <SliderDelHome />
      <div
        className="nose"
        style={{
          height: "30px",
          width: "100%",
          position: "absolute",
          zIndex: "2",

          marginTop: "-20px",
        }}
      ></div>

      <Recomendations1 />

      <Explorar />
      <Footer></Footer>
    </div>
  );
};

export default Home;
