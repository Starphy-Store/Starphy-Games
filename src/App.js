import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//importacion del header
import Header from "./Components/Nav/Header"

//importacion de las Cards
import Slider from "./Home/Slider"

//Slider de recomendaciones
import Recomendations1 from "./Home/Recomendations1";

function App() {

  return (
    <div>
      <Header />
      <Slider />
      <Recomendations1 />
    </div>
  );
}

export default App;
