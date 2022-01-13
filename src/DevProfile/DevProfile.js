import React from "react";
import Header from "../Components/Nav/Header";
import Slider from "../Home/Recomendations1";
import "./DevProfile.css";
import { Container, Row, Col } from "react-bootstrap";

export default function DevProfile() {
  return (
    <>
      <Header />
      <Container>
        <Row className="pb-5">
          <h1 className="pb-5">Epic Games</h1>
        </Row>

        <div className="IconBorder">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/usuarios-b78e1.appspot.com/o/527px-Epic_Games_logo.png?alt=media&token=0ebcca85-281e-421c-9579-842b0a5d393e"
            className="ImgIcon center"
          ></img>
        </div>
      </Container>
      <div style={{ backgroundColor: "white", height: "70vh" }}>
        <h6 className="px-3">3 juegos publicados</h6>
        <h6 className="px-3">+1.000 descargas</h6>
        <Container className="pt-5">
          <Slider />
        </Container>
      </div>
    </>
  );
}
