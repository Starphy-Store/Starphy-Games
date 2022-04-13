import React from "react";
import Header from "../Components/Nav/Header";
import Slider from "./Components/Slider";
import { Container, Row, Col, roundedCircle } from "react-bootstrap";
import "./GamesShow.css";
import SecundaryImgs from "./Components/SecundaryImgs";
import Footer from "../Footer/Footer";

function GamesShow() {
  return (
    <>
      <Container>
        <Col>
          <Header></Header>
        </Col>
      </Container>
      <Container style={{ paddingTop: "90px" }}>
        <Slider />
      </Container>
      <div className="pt-5"></div>
      <SecundaryImgs />
      <Footer></Footer>
    </>
  );
}

export default GamesShow;
