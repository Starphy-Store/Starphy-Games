import React from "react";
import { Carousel } from "react-bootstrap";
import MinecraftImg from "../Assets/MinecraftImg.jpg";
import payday2 from "../Assets/payday2.jpg";
import thewitcher from "../Assets/thewitcher.jpg";

export default function Slider() {
  return (
    <Carousel
      style={{ width: "100%", borderRadius: "20px" }}
      className="carousel-inner"
      indicators={false}
    >
      <Carousel.Item>
        <img className="d-block w-100" src={MinecraftImg} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={MinecraftImg} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={MinecraftImg} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}
