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
            src="https://firebasestorage.googleapis.com/v0/b/usuarios-b78e1.appspot.com/o/Elden-Ring-new-screenshots-1.jpg?alt=media&token=ed00eb7a-3dbc-4a97-81aa-760b7b08811d"
            alt="First slide"
            style={{ width: "100%", height: "100%" }}
            /* style={{ width: "3840px", height: "2106px" }} */
            /* style={{ height: "720px", width: "1280px" }} */
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block sliderImg"
            src="https://firebasestorage.googleapis.com/v0/b/usuarios-b78e1.appspot.com/o/Dise%C3%B1o%20sin%20t%C3%ADtulo%20(16).png?alt=media&token=e7333dc0-5395-42c7-a479-f37f20c20efc"
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
