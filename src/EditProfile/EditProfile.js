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
} from "firebase/firestore";

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
const auth = getAuth();
const db = getFirestore(firebase2);
export default function EditProfile() {
  const [id, setId] = useState([]);
  const [name, setName] = useState([]);
  const [lechuga, setlechuga] = useState([]); /* */
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const filtrado = name.filter((x) => x.id == id);

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
    const aguati = doc(collection(db, "users"));
    updateDoc(aguati, {
      name: "sexoooooo aaaaaaaaaa",
    });
  }

  useEffect(() => {
    EditarPerfil();
  }, []);

  return (
    <>
      <Header />
      <Container className="justify-content-left">
        <h1 className="pb-5">Edita tu perfil</h1>
      </Container>
      <div
        style={{
          backgroundColor: "white",
          height: "63.7vh",
        }}
      >
        <Container className="pt-4">
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
              <Button variant="primary" type="submit">
                Guardar
              </Button>
            </Form>
          </Col>
          <Col md={8}></Col>
        </Container>
      </div>
    </>
  );
}
