import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//importacion del Home
import Home from "./Home/Home"

import Login from "./Components/login/Login";


import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>  

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/LoginUser" element={<Login />} />
    </Routes> 
    </>
  );
}

// <Container className="loginContainer">
//   <Login />
// </Container>
export default App;
