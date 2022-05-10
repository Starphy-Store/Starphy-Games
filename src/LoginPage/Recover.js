import { Form, Button } from "react-bootstrap";
import React, { useState } from "react";
//import  { Redirect } from 'react-router-dom'
import "./login.css";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  sendPasswordResetEmail,
  reauthenticateWithCredential,
} from "firebase/auth";
import { useToast } from "@chakra-ui/toast";

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

/* Crear otra pagina para crear una contraseña */

function Login() {
  const auth = getAuth(app);
  const [email, setEmail] = useState("");

  const toast = useToast();

  function recoverPassword(event) {
    event.preventDefault();

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast({
          title: "Revisa tu email para recuperar su cuenta",
          status: "success",
          duration: 4000,
          isClosable: true,
        });

        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        toast({
          title: "Introduce un email valido",
          status: "error",
          duration: "3000",
          isClosable: true,
        });
      });
  }
  const updateEmail = function (event) {
    setEmail(event.target.value);
  };

  return (
    <div className="main-container">
      <div className="main">
        <h1>Recuperar contraseña</h1>
        <Form onSubmit={recoverPassword} className="form-container">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="ms-3 mt-5" style={{ color: "#E5E5E5" }}>
              Introduzca el email para recuperar su contraseña
            </Form.Label>
            <Form.Control
              className="p-3"
              type="email"
              placeholder="Ingresa tu Email"
              style={{ backgroundColor: "#C4C4C4" }}
              value={email}
              onChange={updateEmail}
            />
          </Form.Group>
          <div className="d-grid my-5 ">
            <Button
              style={{ backgroundColor: "#69c0a1" }}
              type="submit"
              size="lg"
              id="ingreso"
            >
              Recuperar contraseña
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
