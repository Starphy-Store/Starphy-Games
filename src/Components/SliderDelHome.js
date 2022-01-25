import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Carousel, Form } from "react-bootstrap";
import "./Components.css";

//importacion de imagenes

import MinecraftImg from "../Assets/MinecraftImg.jpg";
import payday2 from "../Assets/payday2.jpg";
import thewitcher from "../Assets/thewitcher.jpg";

function SliderDelHome() {
  return (
    <div className="sliderdelhome">
      <Carousel
        variant="dark"
        indicators={false}
        style={{ zIndex: "0", borderRadius: "10px" }}
        className="carousel-inner"
      >
        <Carousel.Item>
          <img
            className="d-block"
            src={payday2}
            className="sliderImg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="https://firebasestorage.googleapis.com/v0/b/usuarios-b78e1.appspot.com/o/Publica%20tus%20juegos%20gratis%20(1).png?alt=media&token=17af5675-45b7-4e7b-858e-70f5fbb6b3d1"
            alt="Second slide"
            className="sliderImg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src={thewitcher}
            alt="Third slide"
            className="sliderImg"
          />
        </Carousel.Item>
        4{" "}
      </Carousel>
    </div>
  );
}
export default SliderDelHome;
