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
import { getAuth } from "firebase/auth";
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
  const auth = getAuth(app);
  const [Des, setDes] = useState("");
  const [game, setgame] = useState("");
  const [valor, setvalor] = useState(0);
  const [validated, setValidated] = useState(false);
  const [categoria1, setcategoria1] = useState("");
  const [categoria2, setcategoria2] = useState("");
  const [categoria3, setcategoria3] = useState("");
  const [urlDescargar, seturlDescargar] = useState(null);
  const [urlImagenes, seturlImagenes] = useState(null);
  const [añadir, setañadir] = useState([
    <Form.Group className="mb-2" controlId="formBasicPassword">
      <Form.Label>Imagenes de tu juego</Form.Label>
      <Form.Control required type="file" placeholder="" />
    </Form.Group>,
  ]);

  async function CargarArchivo(e) {
    const archivolocal = e.target.files[0];

    const archivoRef = ref(storage, `Juegos/${archivolocal.name}`);

    archivoRef.put(archivolocal);

    seturlDescargar(await getDownloadURL(archivoRef));
  }

  async function CargarImagenes(e) {
    const archivolocal = e.target.files[0];

    const archivoRef = ref(storage, `ImagenesJuegos/${archivolocal.name}`);

    await uploadBytes(archivoRef, archivolocal);

    seturlImagenes(await getDownloadURL(archivoRef));
  }

  async function CrearJuego(event) {
    event.preventDefault();
    console.log("render");

    addDoc(collection(db, "games"), {
      descrip: Des,
      juego: game,
      precio: valor,
      esunjuego: "si",
      imagenesjuego: urlImagenes,
      categoria1: categoria1,
      categoria2: categoria2,
      categoria3: categoria3,
      videojuego: urlDescargar,
      idprofile: auth.currentUser.uid,
    });
    setValidated(true);
  }

  const updateDes = function (event) {
    setDes(event.target.value);
  };

  const updategame = function (event) {
    setgame(event.target.value);
  };

  const updatevalor = function (event) {
    setvalor(event.target.value);
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

  const añadirElemento = () => {
    setañadir([
      ...añadir,
      <Form.Group className="mb-2" controlId="formBasicPassword">
        <Form.Label>Imagenes de tu juego</Form.Label>
        <Form.Control required type="file" placeholder="" />
      </Form.Group>,
    ]);
    console.log(añadir);
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
            <Form
              noValidate
              validated={validated}
              className="form-container needs-validation"
              onSubmit={CrearJuego}
              style={{ width: "100%" }}
            >
              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Label>Nombre del juego:</Form.Label>
                <Form.Control
                  type="text"
                  value={game}
                  onChange={updategame}
                  placeholder="Ingresa el nombre de un juego"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Escribe un nickname
                </Form.Control.Feedback>
              </Form.Group>{" "}
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Escoge 3 categorias</Form.Label>
                <Form.Select
                  onChange={updatecategoria1}
                  required
                  aria-label="Default select example"
                >
                  <option>Selecciona una categoria</option>
                  <option value="Acción">Acción</option>
                  <option value="Arcade">Arcade</option>
                  <option value="Estrategia">Estrategia</option>
                  <option value="Cooperativo">Cooperativo</option>
                  <option value="Online">Online</option>
                  <option value="Supervivencia">Supervivencia</option>
                  <option value="Simulacion">Simulacion</option>
                  <option value="Battle Royale">Battle Royale</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Select
                  onChange={updatecategoria2}
                  required
                  aria-label="Default select example"
                >
                  <option>Selecciona una categoria</option>
                  <option value="Acción">Acción</option>
                  <option value="Arcade">Arcade</option>
                  <option value="Estrategia">Estrategia</option>
                  <option value="Cooperativo">Cooperativo</option>
                  <option value="Online">Online</option>
                  <option value="Supervivencia">Supervivencia</option>
                  <option value="Simulacion">Simulacion</option>
                  <option value="Battle Royale">Battle Royale</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Select
                  onChange={updatecategoria3}
                  required
                  aria-label="Default select example"
                >
                  <option>Selecciona una categoria</option>
                  <option value="Acción">Acción</option>
                  <option value="Arcade">Arcade</option>
                  <option value="Estrategia">Estrategia</option>
                  <option value="Cooperativo">Cooperativo</option>
                  <option value="Online">Online</option>
                  <option value="Supervivencia">Supervivencia</option>
                  <option value="Simulacion">Simulacion</option>
                  <option value="Battle Royale">Battle Royale</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Imagen para la portada</Form.Label>
                <Form.Control
                  required
                  type="file"
                  onChange={CargarImagenes}
                  placeholder=""
                />
              </Form.Group>
              <Form.Group className="mb-2" controlId="formBasicPassword">
                <Form.Label>Imagenes de tu juego</Form.Label>
                <Form.Control
                  required
                  type="file"
                  onChange={CargarImagenes}
                  placeholder=""
                />
              </Form.Group>
              <Button
                variant="dark"
                className="add-btn"
                onClick={añadirElemento}
              >+</Button>
              <Form.Group className="mb-3 mt-3" controlId="formBasicPassword">
                <Form.Label>Precio</Form.Label>
                <Form.Control
                  type="text"
                  required
                  type="number"
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
                  required
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
                  required
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
