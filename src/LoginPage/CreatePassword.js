import { Form, Button } from "react-bootstrap";
import React, { useState } from "react";
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

  return (
    <div className="main-container">
      <div className="main">
        <h1>Crea una contraseña nueva</h1>
        <Form /* onSubmit={CreatePassword} */ className="form-container">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label
              className="ms-3 mt-5"
              style={{ color: "#E5E5E5" }}
            ></Form.Label>
            <Form.Control
              className="p-3 formCreate"
              type="password"
              placeholder="Ingresa tu nueva contraseña"
              style={{ backgroundColor: "#C4C4C4" }}
            />
            <Form.Label
              className="ms-3 mt-2"
              style={{ color: "#E5E5E5" }}
            ></Form.Label>
            <Form.Control
              className="p-3"
              type="password"
              placeholder="Repite la contraseña"
              style={{ backgroundColor: "#C4C4C4" }}
            />
          </Form.Group>
          <div className="d-grid my-5 ">
            <Button
              style={{ backgroundColor: "#69c0a1" }}
              type="submit"
              size="lg"
            >
              Cambiar tu contraseña
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
