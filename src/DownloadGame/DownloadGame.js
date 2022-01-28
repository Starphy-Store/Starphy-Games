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

import { toast, ToastContainer } from "react-toastify";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ref, getStorage, uploadBytes, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import Loading from "../Home/spinner";

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
const app = initializeApp(firebaseConfig);
const db = getFirestore(firebase2);
const storage = getStorage(app);

export default function UploadGame() {
  const [urlDescargar, seturlDescargar] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  async function CargarArchivo(e) {
    setIsLoading(true);
    const archivolocal = e.target.files[0];

    const archivoRef = ref(storage, `Juegos/${archivolocal.name}`);

    await uploadBytes(archivoRef, archivolocal);

    seturlDescargar(await getDownloadURL(archivoRef));
    setIsLoading(false);
  }

  return (
    <>
      <Header />

      <Container>
        <Row>
          <Col
            style={{ justifyContent: "left", color: "white", width: "600px" }}
          >
            <h1>Prueba para cargar archivos</h1>
            <Form className="form-container" style={{ width: "100%" }}>
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
              {isLoading ? (
                <div>
                  <Loading />
                  <p>Espera a que carge su juego</p>
                </div>
              ) : (
                <Button variant="success" type="submit">
                  Subir juego
                </Button>
              )}
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
