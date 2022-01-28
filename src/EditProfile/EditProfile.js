import React, { useState, useEffect } from "react";
import Header from "../Components/Nav/Header";
import { Form, Button, Container, Col } from "react-bootstrap";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  updateEmail,
  emailVerified,
  setPersistence,
  browserSessionPersistence,
  updateProfile,
} from "firebase/auth";
import firebase2 from "../Home/Firebase2";
import {
  collection,
  doc,
  getFirestore,
  query,
  onSnapshot,
  setDoc,
  updateDoc,
  addDoc,
} from "firebase/firestore";

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
const auth = getAuth();
const db = getFirestore(firebase2);
export default function EditProfile() {
  const [id, setId] = useState([]);
  const [name, setName] = useState([]);
  const [lechuga, setlechuga] = useState([]); /* */
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const filtrado = name.filter((x) => x.uid == id);

  console.log(filtrado);

  function EditarPerfil() {
    const ref = query(collection(db, "users"));

    onSnapshot(ref, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });

      setName(items);
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

  console.log(filtrado);
  useEffect(() => {
    EditarPerfil();
  }, []);

  return (
    <>
      <Header />
      <Container className="justify-content-left">
        <h1 className="pb-5">Edita tu perfil</h1>
      </Container>
      <Container className="pt-4" style={{ color: "white" }}>
        <Col>
          <Form onSubmit={EditarPerfil}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label value={lechuga}>Editar nombre</Form.Label>
              <Form.Control type="text" placeholder="nombredeusuario" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Editar correo</Form.Label>
              <Form.Control type="email" placeholder="email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Editar contraseña</Form.Label>
              <Form.Control type="email" placeholder="Contrasenia" />
            </Form.Group>
            <Form.Text className="text-muted">
              Nunca compartiremos tus credenciales con nadie .
            </Form.Text>
            <p />
            <Button variant="outline-ligth" type="submit">
              Guardar
            </Button>
          </Form>
        </Col>
        <Col md={8}></Col>
      </Container>
    </>
  );
}
