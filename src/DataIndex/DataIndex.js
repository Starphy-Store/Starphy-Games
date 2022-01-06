import React, { useEffect, useReducer, useState } from "react";
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
  const [img2, setimg2] = useState("");
  const [img3, setimg3] = useState("");
  const [game, setgame] = useState("");
  const [valor, setvalor] = useState("");
  const [esunjuego, setesunjuego] = useState("");
  const [categoria, setcategoria] = useState("");
  const [creator, setcreator] = useState("");

  function CrearJuego(event) {
    event.preventDefault();
    console.log("render");

    addDoc(collection(db, "games"), {
      descrip: Des,
      imagen: img,
      imagen2: img2,
      imagen3: img3,
      juego: game,
      precio: valor,
      esunjuego: esunjuego,
      categoria: categoria,
      creator: creator,
    });
  }

  const updateDes = function (event) {
    setDes(event.target.value);
  };

  const updateimg = function (event) {
    setimg(event.target.value);
  };

  const updateimg2 = function (event) {
    setimg2(event.target.value);
  };

  const updateimg3 = function (event) {
    setimg3(event.target.value);
  };

  const updategame = function (event) {
    setgame(event.target.value);
  };

  const updatevalor = function (event) {
    setvalor(event.target.value);
  };

  const updateesunjuego = function (event) {
    setesunjuego(event.target.value);
  };

  const updatecategoria = function (event) {
    setcategoria(event.target.value);
  };

  const updatecreator = function (event) {
    setcreator(event.target.value);
  };

  return (
    <Container>
      <Row>
        <Col style={{ justifyContent: "left", color: "white", width: "600px" }}>
          <h1>Datos para firebase</h1>
          <Form onSubmit={CrearJuego} style={{ width: "100%" }}>
            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label>Nombre del juego:</Form.Label>
              <Form.Control
                type="text"
                value={game}
                onChange={updategame}
                placeholder="Ingresa el nombre de un juego"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Poner siempre que si:</Form.Label>
              <Form.Control
                type="text"
                value={esunjuego}
                onChange={updateesunjuego}
                placeholder="PON SI 😡🤑 PON SI 😡🤑 PON SI 😡🤑 PON SI 😡🤑 PON SI 😡🤑"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                Las 3 categorias mas relevantes del juego, dejo esto aqui | para
                ponerlo como en el ejemplo
              </Form.Label>
              <Form.Control
                type="text"
                value={categoria}
                onChange={updatecategoria}
                placeholder="Rol | MMORPG | Mundo Abierto"
              />
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
              <Form.Label>Imagen2</Form.Label>
              <Form.Control
                type="text"
                value={img2}
                onChange={updateimg2}
                placeholder="URL de firestorage 2"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Creador o creadores</Form.Label>
              <Form.Control
                type="text"
                value={creator}
                onChange={updatecreator}
                placeholder="Steve Jobs"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Imagen3</Form.Label>
              <Form.Control
                type="text"
                value={img3}
                onChange={updateimg3}
                placeholder="URL de firestorage 3"
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

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Descripcion:</Form.Label>
              <Form.Control
                type="text"
                value={Des}
                onChange={updateDes}
                placeholder="Descripcion"
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
