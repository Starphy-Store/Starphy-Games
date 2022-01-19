import React, { useState, useEffect } from "react";
import { Container, Col } from "react-bootstrap";

//importacion del header
import Header from "../Components/Nav/Header";

import "./Home.css";

//importacion de las Cards
import SliderDelHome from "../Components/SliderDelHome";

//Slider de recomendaciones
import Recomendations1 from "./Recomendations1";

//Slider juegos compatibles y descargables
import CompatibleGames from "../Components/compatibleDownloadGames/CompatibleGames";

const Home = ({ game }) => {
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
      <div style={{ paddingTop: "90vh" }} >
        {/*  <img src={Barrita}></img> */}
        <h1 style={{ color: "white" }}>Los mejores juegos para ti</h1>
      </div>
        <Recomendations1 />
      
      {/* <CompatibleGames /> */}
      <h1>Juegos multijugador 👋</h1>
    </div>
  );
};
export default Home;
