import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//importacion del Home
import Home from "./Home/Home"

//importacion del Login
import Login from "./LoginPage/Login.js";

//importacion del bootstrap y del css
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>  

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
    </Routes> 
    </>
  );
}

// <Container className="loginContainer">
//   <Login />
// </Container>
export default App;
