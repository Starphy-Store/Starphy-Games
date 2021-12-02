import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

<<<<<<< HEAD
//importacion del header
import Header from "./Components/Nav/Header"

//importacion de las Cards
import Slider from "./Home/Slider"

//Slider de recomendaciones
import Recomendations1 from "./Home/Recomendations1";
=======
import Header from "./Components/Header";
import Login from "./Components/login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Login from "./Components/login/Login";
// import { Container } from "react-bootstrap";
>>>>>>> c83cfb5ca74c647be74266a6194377302fee3706

function App() {

  return (
<<<<<<< HEAD
    <div>
      <Header />
      <Slider />
      <Recomendations1 />
    </div>
=======
    <Routes>
      <Route path="/navbar" element={<Header />} />
      <Route path="/" element={<Login />} />
    </Routes>
>>>>>>> c83cfb5ca74c647be74266a6194377302fee3706
  );
}

// <Container className="loginContainer">
//   <Login />
// </Container>
export default App;
