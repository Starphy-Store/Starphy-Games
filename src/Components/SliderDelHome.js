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
            src="https://firebasestorage.googleapis.com/v0/b/usuarios-b78e1.appspot.com/o/62412a3966938%20(1).jpg?alt=media&token=49a932f2-a00b-410f-b739-41d1c871ceda"
            alt="First slide"
            style={{ width: "100%", height: "100%" }}
            /* style={{ width: "3840px", height: "2106px" }} */
            /* style={{ height: "720px", width: "1280px" }} */
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block sliderImg"
            src="https://firebasestorage.googleapis.com/v0/b/usuarios-b78e1.appspot.com/o/62412a3966938%20(2).jpg?alt=media&token=8b855a46-e1db-4751-ba3b-352eb3ab35f1"
            alt="Second slide"
            style={{ width: "100%", height: "100%" }}
            /* style={{ width: "3840px", height: "2106px" }} */
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block sliderImg"
            src="https://firebasestorage.googleapis.com/v0/b/usuarios-b78e1.appspot.com/o/62412a3966938%20(3).jpg?alt=media&token=e226cc22-306a-467f-ae70-d70adcc38291"
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
