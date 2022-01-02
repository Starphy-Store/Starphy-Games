import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import GamesCarousel from "./GamesCarousel";
import Mojang from "../../Assets/Mojang.png";
import logoMinecraft from "../../Assets/1000.png";
import "../GamesShow.css";

const SecundaryImgs = () => {
  return (
    <div>
      <Container className="GamesInfo">
        <Row>
          <Col md={7}>
            <GamesCarousel />
            <h6>Aventura | Construccion | Mundo abierto </h6>
            <Row className="pt-3">
              <img
                src={Mojang}
                style={{ width: "90px", borderRadius: "15%", align: "left" }}
              ></img>
              <h3>Fornite</h3>
            </Row>
          </Col>
          <Col md={5}>
            <Col style={{ backgroundColor: "#1f1f1f", borderRadius: "10px" }}>
              <Row>
                <img
                  src={logoMinecraft}
                  style={{ width: "100%", heigth: "auto" }}
                />
              </Row>
              <Row>
                <p>
                  <h1>Fornite</h1>
                </p>
              </Row>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SecundaryImgs;
