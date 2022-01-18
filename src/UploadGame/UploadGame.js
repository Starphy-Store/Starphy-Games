import React, { useEffect, useReducer, useState } from "react";
import Header from "../Components/Nav/Header";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import firebase2 from "../../src/Home/Firebase2";
import { initializeApp } from "firebase/app";
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
import { ref, getStorage, uploadBytes, getDownloadURL } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyB0aytR2kq9oV6_9DdeTLs2nGlQTzOxDAE",
  authDomain: "usuarios-b78e1.firebaseapp.com",
  projectId: "usuarios-b78e1",
  storageBucket: "usuarios-b78e1.appspot.com",
  messagingSenderId: "779291947290",
  appId: "1:779291947290:web:9bed27d795c7d614183ca3",
  measurementId: "${config.measurementId}",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(firebase2);
const storage = getStorage(app);

export default function UploadGame() {
  let urlDescargar;
  const [Des, setDes] = useState("");
  const [img, setimg] = useState("");
  const [img2, setimg2] = useState("");
  const [img3, setimg3] = useState("");
  const [game, setgame] = useState("");
  const [valor, setvalor] = useState("");
  const [esunjuego, setesunjuego] = useState("");
  const [categoria1, setcategoria1] = useState("");
  const [categoria2, setcategoria2] = useState("");
  const [categoria3, setcategoria3] = useState("");
  const [creator, setcreator] = useState("");
  async function CargarArchivo(e) {
    const file = e.target.files[0];
    const archivoRef = ref(storage, `AlmacenamientoDeJuegos/${file}`);
    await uploadBytes(archivoRef, file);

    urlDescargar = await getDownloadURL(archivoRef);
  }

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
      esunjuego: "si",
      categoria1: categoria1,
      categoria2: categoria2,
      categoria3: categoria3,
      creator: creator,
      videojuego: urlDescargar,
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

  const updateesunjuego = function () {
    setesunjuego("si");
  };

  const updatecategoria1 = function (event) {
    setcategoria1(event.target.value);
  };
  const updatecategoria2 = function (event) {
    setcategoria2(event.target.value);
  };

  const updatecategoria3 = function (event) {
    setcategoria3(event.target.value);
  };

  const updatecreator = function (event) {
    setcreator(event.target.value);
  };
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col
            style={{ justifyContent: "left", color: "white", width: "600px" }}
          >
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
                <Form.Label>Escoge 3 categorias</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Open this select menu</option>
                  <option value="1">Accion</option>
                  <option value="2">Arcade</option>
                  <option value="3">Estrategia</option>
                  <option value="3">Cooperativo</option>
                  <option value="3">Onlines</option>
                  <option value="3">Supervivencia</option>
                  <option value="3">Simulacion</option>
                  <option value="3">Battle Royal</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Select aria-label="Default select example">
                  <option>Open this select menu</option>
                  <option value="1">Accion</option>
                  <option value="2">Arcade</option>
                  <option value="3">Estrategia</option>
                  <option value="3">Cooperativo</option>
                  <option value="3">Onlines</option>
                  <option value="3">Supervivencia</option>
                  <option value="3">Simulacion</option>
                  <option value="3">Battle Royal</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Select aria-label="Default select example">
                  <option>Open this select menu</option>
                  <option value="1">Accion</option>
                  <option value="2">Arcade</option>
                  <option value="3">Estrategia</option>
                  <option value="3">Cooperativo</option>
                  <option value="3">Onlines</option>
                  <option value="3">Supervivencia</option>
                  <option value="3">Simulacion</option>
                  <option value="3">Battle Royal</option>
                </Form.Select>
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
                  style={{ paddingBottom: "150px" }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>
                  Carga tu videojuego, o la carpeta de tu videojuego
                </Form.Label>
                <Form.Control
                  type="file"
                  onChange={CargarArchivo}
                  placeholder=""
                />
              </Form.Group>

              <Button variant="success" type="submit">
                Subir juego
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
