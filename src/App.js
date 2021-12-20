import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//importacion del Home
import Home from "./Home/Home";

//importacion del Login

import Login from "./LoginPage/Login";
import Recuperar from "./LoginPage/Recover";
import CreatePass from "./LoginPage/CreatePassword.js";
import Register from "./RegisterPage/Register.js";
import Error404 from "./pages/Error404";
import GamesShow from "./GamesShow/GamesShow";
import CardStyle from "../src/Components/Cards/CardStyle";

//importacion del bootstrap y del css
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/:slug" element={<CardStyle />} />
        <Route path="/" element={<Home />} />
        <Route path="/LoginUser" element={<Login />} />
        <Route path="/RecoverPassword" element={<Recuperar />} />
        <Route path="/CreatePassword" element={<CreatePass />} />
        <Route path="/register" element={<Register />} />
        <Route path="/GamesShow" element={<GamesShow />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

// <Container className="loginContainer">
//   <Login />
// </Container>
export default App;
