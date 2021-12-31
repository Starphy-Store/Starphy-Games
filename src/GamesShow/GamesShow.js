import React from "react";
import Header from "../Components/Nav/Header";
import Slider from "./Components/GamesSlider";
import { Container, Row, Col, roundedCircle } from "react-bootstrap";
import "./GamesShow.css";
import SecundaryImgs from "./Components/SecundaryImgs";

function GamesShow() {
  return (
    <>
      <Header></Header>
      <Container>
          <Slider></Slider>
      </Container>
      <SecundaryImgs />
    </>
  );
}

export default GamesShow;
