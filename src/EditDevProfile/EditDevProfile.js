import React, { useEffect, useState } from "react";
import Header from "../Components/Nav/Header";
import { Form, Container, Col, Button } from "react-bootstrap";
import { useParams } from "react-router";
import { collection, query } from "firebase/firestore";
import { getFirestore, onSnapshot } from "firebase/firestore";
import firebase2 from "../Home/Firebase2";
import ProfilePicture from "../Assets/icon.png";
import { eyeIcon } from "../LoginPage/assets/index";

import { onAuthStateChanged, getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

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
const auth = getAuth(app);
const db = getFirestore(firebase2);

export default function Editdevprofile() {
  const [perfil, setPerfil] = useState([]);
  const [id, setId] = useState([]);
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState("");

  const filtradoPerfil = perfil.filter((x) => x.rol == "dev");
  const filterid = filtradoPerfil.filter((x) => x.uid == id);

  console.log(filterid);
  function devedit() {
    const ref = query(collection(db, "users"));

    onSnapshot(ref, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setPerfil(items);
    });
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const item = [];
        const uids = user.uid;
        item.push(uids);
        setId(item);
      }
    });
  }

  useEffect(() => {
    devedit();
  }, []);

  const updatePassword = function (event) {
    setPassword(event.target.value);
  };
  return (
    <>
      <Header />
      <Container className="justify-content-left">
        <h1 className="pb-5">Edita tu perfil de desarrollador</h1>
      </Container>
      <div
        style={{
          backgroundColor: "white",
          height: "100%",
        }}
      >
        {filterid.map((item) => (
          <Container className="pt-5">
            <Col>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Editar nombre de desarrollador/a</Form.Label>
                  <Form.Control type="text" placeholder={item.name} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Editar correo</Form.Label>
                  <Form.Control type="email" placeholder={item.email} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  Editar contraseña
                  <div style={{ position: "relative" }}>
                    <button
                      id="show-hide-passwd"
                      type="button"
                      className="btn-icon"
                      onClick={() => {
                        setShow(!show);
                      }}
                    >
                      <img className="eye-icon" src={eyeIcon} />
                    </button>
                    <Form.Control
                      className="mb-3"
                      type={show ? "text" : "password"}
                      placeholder="Cambiar contraseña"
                      style={{ backgroundColor: "#C4C4C4" }}
                      value={password}
                      minLength={6}
                      maxLength={30}
                      onChange={updatePassword}
                    />
                  </div>
                </Form.Group>
                <Form.Text className="text-muted">
                  Nunca compartiremos tus credenciales con nadie .
                </Form.Text>
                <p />
                <Button variant="primary" type="submit" className="mb-5">
                  Guardar
                </Button>
              </Form>
            </Col>
            <Col md={8}>
              <img src={ProfilePicture}></img>
            </Col>
          </Container>
        ))}
      </div>
    </>
  );
}
