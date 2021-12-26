import { Form, Button } from "react-bootstrap";
import React, { useState } from "react";
/* import { getDatabase } from "firebase/database";
import { useLocation } from "wouter"; */
import { useNavigate } from "react-router-dom";
import Validate from "./Validate";
//Se va a usar el mismo css para ahorrar codigo

import "../LoginPage/login.css";
import { eyeIcon, facebook, google } from "../LoginPage/assets/index";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  onAuthStateChanged,
} from "firebase/auth";
import { Formik } from "formik";

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

function Register() {
  /* const database = getDatabase(app); */
  const auth = getAuth(app);

  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const provider2 = new FacebookAuthProvider();
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [emailReg, setEmailReg] = useState("");

  function Register(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    event.preventDefault();
    console.log("funciona?");

    createUserWithEmailAndPassword(auth, emailReg, passwordReg)
      .then((userCredential) => {
        // Signed in
        sendEmailVerification(auth.currentUser).then(() => {
          // Email verification sent!
          onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              navigate("/loginUser");
              // ...
            } else {
              // User is signed out
              // ...
            }
          });
        });
        const user = userCredential.emailReg;

        // ...
        console.log("si claro");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log("no sory");
      });
    setValidated(true);
  }

  const gugle = function () {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        navigate("/");
        console.log("Inicio correctamente");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const fasebuk = function () {
    signInWithPopup(auth, provider2)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        navigate("/");
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);

        // ...
      });
  };
  const updateUsername = function (event) {
    setUsernameReg(event.target.value);
  };
  const updateEmail = function (event) {
    setEmailReg(event.target.value);
  };
  const updatePassword = function (event) {
    setPasswordReg(event.target.value);
  };

  return (
    <div className="main-container">
      <div className="main">
        <h1>Bienvenido a Starphy</h1>
        <hr
          style={{
            color: "white",
            width: "50%",
            margin: "auto",
            marginTop: "15px",
          }}
        ></hr>{" "}
        <div className="buttons-content mt-5">
          <Button onClick={fasebuk} className="buttons">
            <img className="me-2" src={facebook} alt="facebook-icon" />
            Facebook
          </Button>
          <Button onClick={gugle} className="buttons">
            <img className="me-2" src={google} alt="google-icon" />
            Google
          </Button>
        </div>
        <p className="text-center mt-3" style={{ color: "#C4C4C4" }}>
          O registrate con
        </p>
        <Form
          noValidate
          validated={validated}
          onSubmit={Register}
          className="form-container needs-validation"
        >
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label className="ms-3 mt-3" style={{ color: "#E5E5E5" }}>
              Nombre
            </Form.Label>{" "}
            <Form.Control
              className="p-3"
              required
              type="name"
              placeholder="Ingresa tu apodo"
              style={{ backgroundColor: "#C4C4C4" }}
              value={usernameReg}
              onChange={updateUsername}
              onBlur={Register}
            />
            <Form.Control.Feedback type="invalid">
              Escribe un nickname
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="ms-3 mt-3" style={{ color: "#E5E5E5" }}>
              Email
            </Form.Label>{" "}
            <Form.Control
              className="p-3"
              type="email"
              placeholder="Ingresa tu email"
              style={{ backgroundColor: "#C4C4C4" }}
              value={emailReg}
              onChange={updateEmail}
              required
            />
            <Form.Control.Feedback type="invalid">
              Email incorrecto
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <div className="form-label">
              <Form.Label className="ms-3 mb-0" style={{ color: "#E5E5E5" }}>
                Contraseña
              </Form.Label>
            </div>
            <div style={{ position: "relative" }}>
              <button
                id="show-hide-passwd"
                type="button"
                className="btn-icon"
                style={{ width: "57px" }}
                onClick={() => {
                  setShow(!show);
                }}
              >
                <img className="eye-icon" src={eyeIcon} />
              </button>
              <Form.Control
                className="p-3"
                type={show ? "text" : "password"}
                placeholder="Ingresa tu contraseña"
                style={{ backgroundColor: "#C4C4C4" }}
                value={passwordReg}
                onChange={updatePassword}
                minLength={6}
                maxLength={30}
                required
              />
              <Form.Control.Feedback type="invalid">
                Minimo 6 caracteres
              </Form.Control.Feedback>
            </div>
          </Form.Group>
          <div className="d-grid my-5 ">
            <Button
              style={{ backgroundColor: "#69c0a1" }}
              type="submit"
              size="lg"
              id="ingreso"
            >
              Registrarse
            </Button>
          </div>
        </Form>
        <p className="text-center text-light">
          ¿Ya tienes una cuenta?{" "}
          <button
            onClick={() => {
              navigate("/loginUser");
            }}
            className="createAccount"
          >
            <a
              style={{
                background: "transparent",
                fontWeight: "999",
                color: "white",
                textDecoration: "none",
              }}
              to="/crearcuenta"
            >
              {" "}
              Inicia sesión
            </a>
          </button>
        </p>
      </div>
    </div>
  );
}

export default Register;
