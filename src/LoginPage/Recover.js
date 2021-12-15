import { Form, Button } from "react-bootstrap";
import React, { useState } from "react";
//import  { Redirect } from 'react-router-dom'
import "./login.css";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  sendPasswordResetEmail,
  reauthenticateWithCredential,
} from "firebase/auth";

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

/* Crear otra pagina para crear una contraseña */

function Login() {
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const user = auth.currentUser;

  const recoverPassword = function () {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  const updateEmail = function (event) {
    setEmail(event.target.value);
  };

  const promptForCredentials = function () {
    const credential = promptForCredentials();
    reauthenticateWithCredential(user, credential)
      .then(() => {
        // User re-authenticated.
      })
      .catch((error) => {
        // An error ocurred
        // ...
      });
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
