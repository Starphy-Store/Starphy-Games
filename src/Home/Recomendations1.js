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
      </Carousel.Item>
    </Carousel>
  );
}

export default Recomendations1;
