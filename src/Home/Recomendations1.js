//Documentacion
//https://react-bootstrap.github.io/layout/grid/
//https://react-bootstrap.netlify.app/components/carousel/#carousels

import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import CardStyle from "../Components/Cards/CardStyle";
import "./Home.css";

function CarouselContent(props) {
  return <CardStyle />;
}

function Recomendations1(props) {
  return (
    <Carousel variant="dark" indicators={false} className="mt-5">
      <Carousel.Item>
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
      </Carousel.Item>
    </Carousel>
  );
}

export default Recomendations1;
