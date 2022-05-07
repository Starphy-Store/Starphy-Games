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
          <img
            className="d-block sliderImg"
            src="https://firebasestorage.googleapis.com/v0/b/usuarios-b78e1.appspot.com/o/cyberpunk-town-futuristic-1460355-wallhere.com.jpg?alt=media&token=73e9f610-1a7f-4988-9f53-ee9d3b8b7e94"
            alt="First slide"
            style={{ width: "100%", height: "100%" }}
            /* style={{ width: "3840px", height: "2106px" }} */
            /* style={{ height: "720px", width: "1280px" }} */
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block sliderImg"
            src="https://firebasestorage.googleapis.com/v0/b/usuarios-b78e1.appspot.com/o/Darek-Zabrocki-Robin-Hood-artwork-concept-art-Templar-knight-1505645-wallhere.com.jpg?alt=media&token=053041f5-a86c-43de-b62c-5fc312e813c0"
            alt="Second slide"
            style={{ width: "100%", height: "100%" }}
            /* style={{ width: "3840px", height: "2106px" }} */
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block sliderImg"
            src="https://firebasestorage.googleapis.com/v0/b/usuarios-b78e1.appspot.com/o/62412a3966938.jpg?alt=media&token=dac92c94-6ac7-4049-aaee-8637a1263d8d"
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
