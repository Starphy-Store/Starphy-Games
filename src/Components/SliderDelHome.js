import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Components.css";
import { Carousel, Form, Container } from "react-bootstrap";
import "../Components/Components.css";

//importacion de imagenes

import MinecraftImg from "../Assets/MinecraftImg.jpg";
import payday2 from "../Assets/payday2.jpg";
import thewitcher from "../Assets/thewitcher.jpg";
import { Badge } from "@chakra-ui/layout";

function SliderDelHome() {
  return (
    <div className="sliderdelhome">
      <Carousel variant="light" indicators={false} className="carousel-inner">
        <Carousel.Item>
          {/* <div className="carouselitem1">
            <Container style={{ width: "1000px" }}>
              <h1></h1>
              <p style={{ textAlign: "center" }}></p>
            </Container>
          </div> */}
          <img
            className="d-block sliderImg"
            src={payday2}
            alt="First slide"
            style={{ width: "100%", height: "100%" }}
            /* style={{ width: "3840px", height: "2106px" }} */
            /* style={{ height: "720px", width: "1280px" }} */
          />
        </Carousel.Item>
        <Carousel.Item>
          {/* <div className="carouselitem1">
            <Container style={{ width: "1000px" }}>
              <h1></h1>
              <p style={{ textAlign: "center" }}></p>
            </Container>
          </div> */}
          <img
            className="d-block sliderImg"
            src="https://firebasestorage.googleapis.com/v0/b/usuarios-b78e1.appspot.com/o/Publica%20tus%20juegos%20gratis%20(1).png?alt=media&token=17af5675-45b7-4e7b-858e-70f5fbb6b3d1"
            alt="Second slide"
            style={{ width: "100%", height: "100%" }}
            /* style={{ width: "3840px", height: "2106px" }} */
          />
        </Carousel.Item>
        <Carousel.Item>
          {/* <div className="carouselitem1">
            <Container style={{ width: "1000px" }}>
              <h1></h1>
              <p style={{ textAlign: "center" }}></p>
            </Container>
          </div> */}
          <img
            className="d-block sliderImg"
            src={thewitcher}
            alt="Third slide"
            style={{ width: "100%", height: "100%" }}
            /* style={{ width: "3840px", height: "2106px" }} */
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default SliderDelHome;
