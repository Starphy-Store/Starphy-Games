import React from "react";
import { Carousel, Form } from "react-bootstrap";
import "./Home.css";

//importacion de imagenes
import MinecraftImg from "../Assets/MinecraftImg.jpg";
import MinecraftImg2 from "../Assets/MinecraftImg2.png";
import MinecraftImg3 from "../Assets/MinecraftImg3.jpg";

function Slider() {
  return (
    <div className="Slider">
      <Carousel variant="dark" indicators={false}>
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
            src={MinecraftImg2}
            alt="First slide"
            className="sliderImg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-70"
            src={MinecraftImg3}
            alt="First slide"
            className="sliderImg"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default Slider;
