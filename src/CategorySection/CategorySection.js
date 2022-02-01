import React from "react";
import Header from "../Components/Nav/Header";
import Footer from "../Footer/Footer";
import Slider from "./Slider";
import { Container } from "react-bootstrap";

export default function CategorySection() {
  return (
    <>
      <Container>
        <Header />
        <h1 className="pb-3" style={{ Justify: "left" }}>
          Juegos de Accion
        </h1>
        <h5 style={{ color: "gray", justifyContent: "center" }}>
          Juego de accion mas popular:
        </h5>
        <Slider />
      </Container>

      <Footer />
    </>
  );
}
