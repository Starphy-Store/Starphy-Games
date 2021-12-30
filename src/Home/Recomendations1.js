//Documentacion
//https://react-bootstrap.github.io/layout/grid/
//https://react-bootstrap.netlify.app/components/carousel/#carousels

import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import CardStyle from "../Components/Cards/CardStyle";
import "./Home.css";

function Recomendations1(props) {
  return (
    <Carousel
      variant="dark"
      indicators={false}
      className="mt-5"
      style={{ border: "1px solid red" }}
    >
      <Carousel.Item>
<<<<<<< HEAD
        <Container>
          <CardStyle />
        </Container>
      </Carousel.Item>
      <Carousel.Item>
        <Container>
          <CardStyle />
        </Container>
      </Carousel.Item>
      <Carousel.Item>
        <Container>
          <CardStyle />
        </Container>
=======
        <Row>
          <Col md={12}>
            <CardStyle />
          </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row>
          <Col md={12}>
            <CardStyle />
          </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row>
          <Col md={12}>
            <CardStyle />
          </Col>
        </Row>
>>>>>>> 0458b79aa7ce8c22160ee9c16f86f1e0c4cc4008
      </Carousel.Item>
    </Carousel>
  );
}

export default Recomendations1;
