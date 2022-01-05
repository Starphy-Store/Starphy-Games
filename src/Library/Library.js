import React from "react";
import Header from "../Components/Nav/Header";
import { Container } from "react-bootstrap";

function Library() {
  return (
    <>
      <Header />
      <h1 style={{ textAlign: "left", paddingLeft: "40px" }}> Tu libreria</h1>
      <div
        style={{ backgroundColor: "#7C77B9", height: "70vh", color: "white" }}
      >
        <img
          src="https://firebasestorage.googleapis.com/v0/b/usuarios-b78e1.appspot.com/o/barri.png?alt=media&token=356f03fb-0e69-4002-992c-58839d8c8373"
          style={{ width: "100%", height: "65px" }}
        />
        <Container className="pt-5">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/usuarios-b78e1.appspot.com/o/Dise%C3%B1o_sin_t%C3%ADtulo__7_-removebg-preview.png?alt=media&token=125448d6-ddd0-4f8c-9856-ff7ff77fae1e"
            alt="deadicon"
            style={{ width: "200px" }}
          />
        </Container>
        <Container>
          <h2>No hay juegos por aqui...</h2>
        </Container>
        <Container>
          <p>Anda mira uno que te guste :)</p>
        </Container>
      </div>
    </>
  );
}
export default Library;
