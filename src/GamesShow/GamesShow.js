import React from "react";
import Header from "../Components/Nav/Header";
import Slider from "./GamesSlider";
import logoMinecraft from "../Assets/1000.png";
import { Container, Row, Col } from "react-bootstrap";
import "./GamesShow.css";

function GamesShow() {
  return (
    <>
      <Header></Header>
      <Container>
        <div>
          <Slider></Slider>
        </div>
      </Container>
      <Container>
        <Row>
          <Col
            md={6}
            className="GamesShow"
            style={{
              position: "absolute",
              paddingLeft: "100px",
              paddingTop: "20vh",
              zIndex: "2",
              color: "white",
              align: "center",
              margin: "auto",
            }}
          >
            <img
              src={logoMinecraft}
              style={{
                width: "500px",
                heigth: "auto",
              }}
            />
            <p>
              descripcion pedorra jijijijaja descripcion pedorradescripcion
              pedorradescripcion pedorradescripcion pedorradescripcion
              pedorradescripcion pedorradescripcion pedorra
            </p>
          </Col>
          <Col md={6}></Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col></Col>

          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default GamesShow;
