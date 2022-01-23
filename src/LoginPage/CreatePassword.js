import { Form, Button } from "react-bootstrap";
import React, { useState } from "react";
import "./login.css";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  sendPasswordResetEmail,
  reauthenticateWithCredential,
} from "firebase/auth";
import { useNavigate } from "react-router";

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
  const navigate = useNavigate();

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
            <button /* todo esto el volver */
              onClick={() => {
                navigate("/RecoverPassword");
              }}
              className="Back"
            >
              {/* laio mira si puedes solucionar esto, intento cambiar la posicion y no me funciona */}
              <a
                style={{
                  background: "transparent",
                  fontWeight: "999",
                  color: "white",
                  textDecoration: "underline",
                  position: "absolute",
                  bottom: "800px",
                  right: "1600px",
                }}
              >
                {" "}
                Volver
              </a>
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
