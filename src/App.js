//DOCUMENTACION!
//https://react-bootstrap.github.io/getting-started/introduction

import Header from "./Components/Header";
import Login from "./Components/login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Login from "./Components/login/Login";
// import { Container } from "react-bootstrap";

function App() {
  return (
    <Routes>
      <Route path="/navbar" element={<Header />} />
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

// <Container className="loginContainer">
//   <Login />
// </Container>
export default App;
