import React, { useState } from "react";
import Payment from "./Payment";
import MinecraftImg from "../Assets/MinecraftImg.jpg";
import { Container, Row, Col } from "react-bootstrap";

export default function PayCheckout() {
  const [checkout, setCheckOut] = useState(false);

  return (
    <Container
      style={{
        backgroundColor: "white",
        height: "92vh",
        borderRadius: "15px",
        marginTop: "4vh",
      }}
    >
      <Row>
        <Col style={{ width: "70vw" }} className="pt-5">
          <h6>Metodos de pago </h6>
          <Col>
            <img
              src={MinecraftImg}
              style={{
                width: "auto",
                height: "150px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
            <h2>Minecraft Launcher</h2>
            <h6>Mojang</h6>
          </Col>
          <Col>
            <hr />
            <h3 className="pt-4">Precio: $15</h3>
          </Col>
          <Payment></Payment>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
