//Documentacion
//https://react-bootstrap.github.io/layout/grid/
//https://react-bootstrap.netlify.app/components/carousel/#carousels

import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import CardStyle from "../Components/Cards/CardStyle";
import "./Home.css";

function Recomendations1() {
  return (
    <Carousel variant="dark" style={{ marginTop: "70vh" }} indicators={false}>
      <Carousel.Item>
        <Container>
          <Row>
            {/*En pantallas pequenias se ve 2 cards y en grandes 4 */}
            <Col sm={6} md={3}>
              <CardStyle />
            </Col>
            <Col sm={6} md={3}>
              <CardStyle />
            </Col>
            <Col sm={6} md={3}>
              <CardStyle />
            </Col>
            <Col sm={6} md={3}>
              <CardStyle />
            </Col>
          </Row>
        </Container>
      </Carousel.Item>
      <Carousel.Item>
        <Container>
          <Row>
            <Col sm={6} md={3}>
              <CardStyle />
            </Col>
            <Col sm={6} md={3}>
              <CardStyle />
            </Col>
            <Col sm={6} md={3}>
              <CardStyle />
            </Col>
            <Col sm={6} md={3}>
              <CardStyle />
            </Col>
          </Row>
        </Container>
      </Carousel.Item>
      <Carousel.Item>
        <Container>
          <Row>
            <Col sm={6} md={3}>
              <CardStyle />
            </Col>
            <Col sm={6} md={3}>
              <CardStyle />
            </Col>
            <Col sm={6} md={3}>
              <CardStyle />
            </Col>
            <Col sm={6} md={3}>
              <CardStyle />
            </Col>
          </Row>
        </Container>
      </Carousel.Item>
    </Carousel>
  );
}

export default Recomendations1;
