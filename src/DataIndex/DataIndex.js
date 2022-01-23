import React, { useEffect, useReducer, useState } from "react";
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
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID,
};
const db = getFirestore();
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
function DataIndex() {
  const auth = getAuth(app);
  const [Des, setDes] = useState("");
  const [img, setimg] = useState("");
  const [img2, setimg2] = useState("");
  const [img3, setimg3] = useState("");
  const [game, setgame] = useState("");
  const [valor, setvalor] = useState("");
  const [categoria, setcategoria] = useState("");
  const [urlDescargar, seturlDescargar] = useState(null);

  async function fileHandler(e) {
    const archivolocal = e.target.files[0];

    const archivoRef = ref(storage, `Juegos/${archivolocal.name}`);

    await uploadBytes(archivoRef, archivolocal);

    seturlDescargar(await getDownloadURL(archivoRef));
    console.log(urlDescargar);
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
      categoria: categoria,
      idprofile: auth.currentUser.uid,
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

  const updatecategoria = function (event) {
    setcategoria(event.target.value);
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
