import React from "react";
import { Carousel, Form } from "react-bootstrap";
import MinecraftImg from "../Assets/MinecraftImg.jpg";
import "./Home.css";
function Slider() {
  return (
    <div className="Slider">
      <Carousel variant="dark">
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
            alt="First slide"
            className="sliderImg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-70"
            src={MinecraftImg}
            alt="First slide"
            className="sliderImg"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default Slider;
