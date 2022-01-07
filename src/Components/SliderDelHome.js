import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Carousel, Form } from "react-bootstrap";
import "./Components.css";

//importacion de imagenes

import MinecraftImg from "../Assets/MinecraftImg.jpg";

function SliderDelHome() {
  return (
    <div className="Slider">
      <Carousel
        variant="dark"
        indicators={false}
        style={{ zIndex: "0", borderRadius: "10px" }}
        className="carousel-inner"
      >
        <Carousel.Item>
          <img
            className="d-block w-100 h-70"
            src={MinecraftImg}
            className="sliderImg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-70"
            src={MinecraftImg}
            alt="Second slide"
            className="sliderImg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-70"
            src={MinecraftImg}
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