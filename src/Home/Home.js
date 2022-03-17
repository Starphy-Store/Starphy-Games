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

//Slider juegos compatibles y descargables
const db = getFirestore(firebase2);

const Home = () => {
  const [game, setGame] = useState([]);

  const filteronline = game.filter((x) => {
    if (x.categoria1 == "Online") return true;
    if (x.categoria2 == "Online") return true;
    if (x.categoria3 == "Online") return true;
  });

  const filtercoop = game.filter((x) => {
    if (x.categoria1 == "Cooperativo") return true;
    if (x.categoria2 == "Cooperativo") return true;
    if (x.categoria3 == "Cooperativo") return true;
  });
  const filterArcade = game.filter((x) => {
    if (x.categoria1 == "Arcade") return true;
    if (x.categoria2 == "Arcade") return true;
    if (x.categoria3 == "Arcade") return true;
  });
  const filterSupervivencia = game.filter((x) => {
    if (x.categoria1 == "Supervivencia") return true;
    if (x.categoria2 == "Supervivencia") return true;
    if (x.categoria3 == "Supervivencia") return true;
  });
  const filterSimulacion = game.filter((x) => {
    if (x.categoria1 == "Simulacion") return true;
    if (x.categoria2 == "Simulacion") return true;
    if (x.categoria3 == "Simulacion") return true;
  });
  const filterBattleRoyale = game.filter((x) => {
    if (x.categoria1 == "Battle Royale") return true;
    if (x.categoria2 == "Battle Royale") return true;
    if (x.categoria3 == "Battle Royale") return true;
  });
  const filterAcción = game.filter((x) => {
    if (x.categoria1 == "Acción") return true;
    if (x.categoria2 == "Acción") return true;
    if (x.categoria3 == "Acción") return true;
  });
  const filterRPG = game.filter((x) => {
    if (x.categoria1 == "RPG") return true;
    if (x.categoria2 == "RPG") return true;
    if (x.categoria3 == "RPG") return true;
  });
  const filterCarreras = game.filter((x) => {
    if (x.categoria1 == "Carreras") return true;
    if (x.categoria2 == "Carreras") return true;
    if (x.categoria3 == "Carreras") return true;
  });
  const filterFPS = game.filter((x) => {
    if (x.categoria1 == "FPS") return true;
    if (x.categoria2 == "FPS") return true;
    if (x.categoria3 == "FPS") return true;
  });
  const filterPuzle = game.filter((x) => {
    if (x.categoria1 == "Puzle") return true;
    if (x.categoria2 == "Puzle") return true;
    if (x.categoria3 == "Puzle") return true;
  });
  const filterLucha = game.filter((x) => {
    if (x.categoria1 == "Lucha") return true;
    if (x.categoria2 == "Lucha") return true;
    if (x.categoria3 == "Lucha") return true;
  });
  const filterMMORPG = game.filter((x) => {
    if (x.categoria1 == "MMORPG") return true;
    if (x.categoria2 == "MMORPG") return true;
    if (x.categoria3 == "MMORPG") return true;
  });
  const filterMOBA = game.filter((x) => {
    if (x.categoria1 == "MOBA") return true;
    if (x.categoria2 == "MOBA") return true;
    if (x.categoria3 == "MOBA") return true;
  });
  const filterAgilidadMental = game.filter((x) => {
    if (x.categoria1 == "Agilidad Mental") return true;
    if (x.categoria2 == "Agilidad Mental") return true;
    if (x.categoria3 == "Agilidad Mental") return true;
  });
  const filterShooter = game.filter((x) => {
    if (x.categoria1 == "Shooter") return true;
    if (x.categoria2 == "Shooter") return true;
    if (x.categoria3 == "Shooter") return true;
  });
  const filterTerror = game.filter((x) => {
    if (x.categoria1 == "Terror") return true;
    if (x.categoria2 == "Terror") return true;
    if (x.categoria3 == "Terror") return true;
  });
  const filterMundoAbierto = game.filter((x) => {
    if (x.categoria1 == "Mundo Abierto") return true;
    if (x.categoria2 == "Mundo Abierto") return true;
    if (x.categoria3 == "Mundo Abierto") return true;
  });
  const filterMinijuegos = game.filter((x) => {
    if (x.categoria1 == "Minijuegos") return true;
    if (x.categoria2 == "Minijuegos") return true;
    if (x.categoria3 == "Minijuegos") return true;
  });
  const filterSigilo = game.filter((x) => {
    if (x.categoria1 == "Sigilo") return true;
    if (x.categoria2 == "Sigilo") return true;
    if (x.categoria3 == "Sigilo") return true;
  });

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

  function dollarsign(input) {
    if (input == 0) {
      return "Gratis";
    } else {
      return "$" + input;
    }
  }

  return (
    <div>
      <Header />

      <Container style={{ height: "600px" }}>
        <SliderDelHome />
      </Container>
      <h1 style={{ color: "white" }}>Los mejores juegos para ti 🔥</h1>
      <Recomendations1 />

      <Footer></Footer>
    </div>
  );
};

export default Home;
