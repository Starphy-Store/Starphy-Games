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

import firebase2 from "../Home/Firebase2.js";
import { Link } from "react-router-dom";
//importacion del headee

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

  const filtros = game.filter((x) => x.esunjuego == "si");
  const filteronline = filtros.filter((x) => {
    if (x.categoria1 == "Online") return true;
    if (x.categoria2 == "Online") return true;
    if (x.categoria3 == "Online") return true;
  });
  const filtercoop = filtros.filter((x) => {
    if (x.categoria1 == "Cooperativo") return true;
    if (x.categoria2 == "Cooperativo") return true;
    if (x.categoria3 == "Cooperativo") return true;
  });
  console.log(filteronline);

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
  }
  useEffect(() => {
    getGames();
  }, []);

  function dollarsign(input) {
    if (input == "Gratis") {
      return input;
    } else {
      return "$" + input;
    }
  }
  return (
    <div>
      <Container>
        <Col>
          <Header />
        </Col>
      </Container>
      <Container>
        <SliderDelHome />
      </Container>
      <div style={{ paddingTop: "78vh" }}>
        {/*  <img src={Barrita}></img> */}
        <h1 style={{ color: "white" }}>Los mejores juegos para ti</h1>
      </div>
      <Recomendations1 />
      <h1>Juegos multijugador 👋</h1>
      <Container className="d-flex">
        {filteronline.map((item) => (
          <Link to={`/GamesShow/${item.juego}`} className="w-25">
            <Container key={item.id}>
              <Row>
                <Col md={212}>
                  <div className="profile-card-2 ">
                    <img src={item.imagenportada} className="img-responsive" />
                    <div className="background "></div>
                    <div className="profile-name">{item.juego}</div>
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

      <h1>Juegos Cooperativo 🎊</h1>

      <Container className="d-flex">
        {filtercoop.map((item) => (
          <Link to={`/GamesShow/${item.juego}`} className="w-25">
            <Container key={item.id}>
              <Row>
                <Col md={12}>
                  <div className="profile-card-2 ">
                    <img src={item.imagenportada} className="img-responsive" />
                    <div className="background "></div>
                    <div className="profile-name">{item.juego}</div>
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
    </div>
  );
};
export default Home;
