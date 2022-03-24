import React, { useEffect, useState } from "react";
import Header from "../Components/Nav/Header";
import { Form, Container, Col, Button, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { collection, getDoc, query, updateDoc } from "firebase/firestore";
import { getFirestore, onSnapshot, doc } from "firebase/firestore";
import firebase2 from "../Home/Firebase2";
import ProfilePicture from "../Assets/icon.png";
import { eyeIcon } from "../LoginPage/assets/index";
import { toast, ToastContainer } from "react-toastify";

import {
  onAuthStateChanged,
  getAuth,
  sendPasswordResetEmail,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import Footer from "../Footer/Footer";

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
  toast.configure();
  const [perfil, setPerfil] = useState({});
  const [id, setId] = useState("");

  const [show, setShow] = useState(false);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setId(user.uid);
    }
  });

  const SendEmail = function (e) {
    e.preventDefault();

    sendPasswordResetEmail(auth, auth.currentUser.email)
      .then(() => {
        toast.success("Revisa tu email ", {
          icon: "👾",
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          className: "dark-toast",
        });
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        toast.warning("Ha ocurrido un error", {
          icon: "👾",
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          className: "dark-toast",
        });
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  async function devedit() {
    const ref = doc(db, "users", id);

    onSnapshot(ref, (querySnapshot) => {
      getDoc(ref, id).then((data) => {
        const { ...rest } = data.data();

        setPerfil({ ...rest });
      });
    });
  }

  const EmailOnSubmit = (e) => {
    e.preventDefault();

    if (password == perfil.pass) {
      updateEmail(auth.currentUser.email, email)
        .then(() => {
          updateDoc(doc(db, "users", auth.currentUser.uid), {
            email: email,
          });

          // Email updated!
          toast.success("Correo cambiado", {
            icon: "📨",
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            className: "dark-toast",
          });
          // ...
        })

        .catch((error) => {
          toast.error("Ya existe ese correo", {
            icon: "😮",
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            className: "dark-toast",
          });
          // An error occurred
          // ...
        });
    } else {
      toast.error("La contraseña no coincide", {
        icon: "📨",
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "dark-toast",
      });
    }
  };
  useEffect(() => {
    devedit();
  }, [id]);

  const updateUsername = function (event) {
    setUsername(event.target.value);
  };
  const updateEmail = async function (event) {
    await setEmail(event.target.value);
  };
  const updatePassword = function (event) {
    setPassword(event.target.value);
  };
  return (
    <>
      <Container>
        <Header />
      </Container>
      <Container className="justify-content-left">
        <h1 className="pb-5">Edita tu perfil de desarrollador</h1>
      </Container>

      <Container className="pt-5" style={{ color: "white" }}>
        <Row>
          <Col md={5}>
            <Form onSubmit={EmailOnSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Editar nombre de desarrollador/a</Form.Label>
                <Form.Control
                  onChange={updateUsername}
                  type="text"
                  placeholder={perfil.name}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Editar correo</Form.Label>
                <Form.Control
                  onChange={updateEmail}
                  type="email"
                  placeholder={perfil.email}
                />
                <Form.Control.Feedback type="invalid">
                  Email incorrecto
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña para cambiar correo</Form.Label>
                <Form.Control
                  onChange={updatePassword}
                  type="password"
                  placeholder="********"
                />
                <Form.Control.Feedback type="invalid">
                  Contraseña Incorrecta
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Editar contraseña</Form.Label>
                <Button
                  onClick={SendEmail}
                  variant="outline-light"
                  className="boton"
                  type="submit"
                >
                  Enviar correo para cambiar contraseña
                </Button>
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
          <Col md={1}></Col>
          <Col md={5}>
            <img
              src={perfil.photoProfile}
              style={{
                width: "250px",
                height: "auto",
                maxHeight: "250px",
                borderRadius: "20px",
              }}
            ></img>
            <Form.Group controlId="formFile" className="mb-3 ">
              <Form.Label className="pl-3 pt-3">
                Selecciona la nueva foto de tu desarrolladora
              </Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
