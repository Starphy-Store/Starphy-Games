import React, { useState, useEffect } from "react";

//importacion del header
import Header from "../Components/Nav/Header";

//imagenes
/* import Barrita from "https://i.postimg.cc/9f5R5HX9/Dise-o-sin-t-tulo-6-removebg-preview.png"; */

//importacion de las Cards
import Slider from "./Slider";

//Slider de recomendaciones
import Recomendations1 from "./Recomendations1";

const Home = ({ game }) => {
  return (
    <div>
      <Slider />
      <Header />
      <div style={{ marginTop: "70vh" }}>
        {/*  <img src={Barrita}></img> */}
        <h1 style={{ color: "white" }}>Los mejores juegos para ti</h1>
      </div>
      <Recomendations1 numCol="3" />
      <h1>Juegos multijugador 👋</h1>
    </div>
  );
};
export default Home;
