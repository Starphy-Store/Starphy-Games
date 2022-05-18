import React from "react";
import { Container } from "react-bootstrap";
import Header from "../Components/Nav/Header";

export default function AboutUs() {
  return (
    <div>
      <Container>
        <Header />
      </Container>
      <Container style={{ paddingTop: "100px" }}>
        <h1>Sobre nosotros</h1>

        <h4 style={{ color: "white", textAlign: "center" }}></h4>
        <p style={{ color: "white" }}>
          Pues nada, gente, aquí dejo lo que sería Mi mayor creación hasta la
          fecha ¡Con Dios!
        </p>
      </Container>
    </div>
  );
}
