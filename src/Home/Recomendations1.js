//Documentacion
//https://react-bootstrap.github.io/layout/grid/
//https://react-bootstrap.netlify.app/components/carousel/#carousels

import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import CardStyle from "../Components/Cards/CardStyle";
import "./Home.css";

function CarouselContent(props) {
  return (
    <Row>
      <Col sm={1} md={props.numCol}>
        <CardStyle />
      </Col>
      <Col sm={6} md={props.numCol}>
        {/* <CardStyle /> */}
      </Col>
    </Row>
  );
}

function Recomendations1(props) {
  return (
    <Carousel variant="dark" indicators={false} className="mt-5">
      <Carousel.Item>
        <Container>
          <CarouselContent />
        </Container>
      </Carousel.Item>
      <Carousel.Item>
        <Container>
          <CarouselContent />
        </Container>
      </Carousel.Item>
      <Carousel.Item>
        <Container>
          <CarouselContent />
        </Container>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselContent;
