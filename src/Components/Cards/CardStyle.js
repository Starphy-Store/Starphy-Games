//Documentacion!
//https://react-bootstrap.github.io/components/cards/

import React from "react";
import { Card } from "react-bootstrap";

//importacion de la imagen
import MinecraftImg from "../../Assets/MinecraftImg.jpg";

function CardStyle() {
  return (
    //tamanio de la card
    <Card className="border-0" style={{ width: "100%" }}>
      {/* imagen de la card */}
      <Card.Img variant="top" src={MinecraftImg} />

      <Card.Body>
        <Card.Title>
          $11.99
          <p>
            Minecraft Launcher
            <h6>Mojang</h6>
          </p>
        </Card.Title>
      </Card.Body>
    </Card>
  );
}

export default CardStyle;
