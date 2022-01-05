import React, { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import firebase2 from "../../src/Home/Firebase2";
import {
  query,
  collection,
  onSnapshot,
  getFirestore,
  getDocs,
  getDoc,
  doc,
  setDoc,
  addDoc,
} from "firebase/firestore";
const db = getFirestore(firebase2);

function DataIndex() {
  const [Des, setDes] = useState("");
  const [img, setimg] = useState("");
  const [game, setgame] = useState("");
  const [valor, setvalor] = useState("");

  function DataIndex(event) {
    event.preventDefault();

    console.log("render");

    addDoc(collection(db, "games"), {
      descrip: Des,
      juego: game,
      imagen: img,
      precio: valor,
    });
  }

  const updateDes = function (event) {
    setDes(event.target.value);
  };

  const updateimg = function (event) {
    setimg(event.target.value);
  };

  const updategame = function (event) {
    setgame(event.target.value);
  };

  const updatevalor = function (event) {
    setvalor(event.target.value);
  };

  return (
    <Container>
      <Row>
        <Col style={{ justifyContent: "left", color: "white", width: "600px" }}>
          <h1>Datos para firebase</h1>
          <Form onSubmit={DataIndex} style={{ width: "100%" }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Descripcion:</Form.Label>
              <Form.Control
                type="text"
                value={Des}
                onChange={updateDes}
                placeholder="Descripcion"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Id:</Form.Label>
              <Form.Control type="text" placeholder="Id" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Imagen</Form.Label>
              <Form.Control
                type="text"
                value={img}
                onChange={updateimg}
                placeholder="URL de firestorage"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Nombre del juego:</Form.Label>
              <Form.Control
                type="text"
                value={game}
                onChange={updategame}
                placeholder="Ingresa el nombre de un juego"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="text"
                value={valor}
                onChange={updatevalor}
                placeholder="$$$"
              />
            </Form.Group>
            <Button variant="success" type="submit">
              Enviar a Firebase Database
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
export default DataIndex;
