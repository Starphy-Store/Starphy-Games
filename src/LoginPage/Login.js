/* DOCUMENTACION */
/* https://firebase.google.com/docs/auth/web/facebook-login 
   https://firebase.google.com/docs/auth/web/google-signin*/

import { Form, Alert, Row, Col } from "react-bootstrap";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { eyeIcon, facebook, google } from "./assets/index";
import { toast, ToastContainer } from "react-toastify";
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
} from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  setDoc,
} from "firebase/firestore";
import pepo from "../Assets/pepo.gif";
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
const db = getFirestore(app);
function Login() {
  // Initialize Firebase

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const provider2 = new FacebookAuthProvider();
  const [email, setEmail] = useState("");
  const toaste = useToast();
  toast.configure();
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");

  const navigate = useNavigate();

  function ids() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setId(user.uid);
      }
    });
  }
  function probar(event) {
    event.preventDefault();

    setPersistence(auth, browserSessionPersistence).then(() => {
      return (
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in a

            onAuthStateChanged(auth, (user) => {
              if (user.emailVerified) {
                toaste({
                  title: "Inicio de sesion correctamente",
                  description: "Disfruta de nuestra web",
                  status: "success",
                  duration: 4000,
                  isClosable: true,
                });
                setTimeout(() => {
                  navigate("/Home");
                }, 1000);
              } else {
                toast.warn("Verifica el email", {
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
            });

            const user = userCredential.user;
            // ...
          })
          /* alerta de error*/
          .catch((error) => {
            toast.error("No existe", {
              icon: "😅",
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
          })
      );
    });
  }

  const gugle = function () {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        if (user.uid == id) {
          toast.success("Adelante", {
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
          setTimeout(() => {
            navigate("/Home");
          }, 2000);
        } else {
          toast.success("Bienvenido/a!!", {
            icon: "✨",
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            className: "dark-toast",
          });
          setTimeout(() => {
            navigate("/Home");
          }, 2000);
          setDoc(doc(db, "users", auth.currentUser.uid), {
            name: user.displayName,
            email: user.email,
            uid: auth.currentUser.uid,
            rol: "user",
            FechaDeModificacion: null,
          });
        }
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
        if (user.uid == id) {
          toast.success("Adelante", {
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
          setTimeout(() => {
            navigate("/Home");
          }, 2000);
        } else {
          toast.success("Bienvenido/a!!", {
            icon: "✨",
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            className: "dark-toast",
          });
          setDoc(doc(db, "users", auth.currentUser.uid), {
            name: user.displayName,
            email: user.email,
            uid: auth.currentUser.uid,
            rol: "user",
            FechaDeModificacion: null,
          });
          setTimeout(() => {
            navigate("/Home");
          }, 2000);
        }

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

  const updateEmail = function (event) {
    setEmail(event.target.value);
  };
  const updatePassword = function (event) {
    setPassword(event.target.value);
  };

  useEffect(() => {
    ids();
  }, []);

  return (
    <div className="main-container">
      <div className="main" style={{ marginBottom: "50px" }}>
        <h1 style={{ fontSize: "40px", paddingTop: "80px" }}>
          Bienvenido a Starphy
        </h1>
        <hr
          style={{
            color: "white",
            width: "50%",
            margin: "auto",
            marginTop: "15px",
          }}
        ></hr>
        {/* onSubmit={(e)=>e.preventDefault()} */}
        <Form onSubmit={probar} className="form-container">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="ms-3 mt-5" style={{ color: "#E5E5E5" }}>
              Email
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
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <div className="form-label">
              <Form.Label className="ms-3 mb-0" style={{ color: "#E5E5E5" }}>
                Contraseña
              </Form.Label>
              <button
                type="button"
                onClick={() => {
                  navigate("/RecoverPassword");
                }}
                className="recoverPassword"
              >
                <a src="/Home" className="me-2" style={{ color: "#868484" }}>
                  ¿Haz olvidado tu contraseña?
                </a>
              </button>
            </div>
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
                className="p-3"
                type={show ? "text" : "password"}
                placeholder="Ingresa tu contraseña"
                style={{ backgroundColor: "#C4C4C4" }}
                value={password}
                onChange={updatePassword}
              />
            </div>
          </Form.Group>
          <div className="d-grid my-5 ">
            <Button colorScheme="teal" type="submit" size="lg" id="ingreso">
              Iniciar sesion
            </Button>
          </div>
        </Form>
        <p className="text-center" style={{ color: "#C4C4C4" }}>
          O inicia sesion con
        </p>
        <div className="buttons-content pb-2">
          <Row className="mt-2">
            <Col>
              <Button
                colorScheme="blue"
                onClick={fasebuk}
                leftIcon={<FaFacebook />}
                width="150px"
              >
                Facebook
              </Button>
            </Col>
            <Col>
              <Button
                leftIcon={<FaGoogle />}
                onClick={gugle}
                colorScheme="teal"
                variant="solid"
                width="150px"
              >
                Google
              </Button>
            </Col>
          </Row>
        </div>
        <p className="text-center mt-5 text-light">
          ¿Todavia no tienes una cuenta?{" "}
          <button
            onClick={() => {
              navigate("/register");
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
              Crea una ahora
            </a>
          </button>
        </p>
      </div>
    </div>
  );
}

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export default Login;
