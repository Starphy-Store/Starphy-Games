import { Form, /* Button */ Alert, Toast, Row, Col } from "react-bootstrap";

import { toast, ToastContainer } from "react-toastify";
import React, { useEffect, useState } from "react";

/* import { getDatabase } from "firebase/database";
import { useLocation } from "wouter"; */
import { useNavigate } from "react-router-dom";
import Validate from "./Validate";
import "react-toastify/dist/ReactToastify.css";
//Se va a usar el mismo css para ahorrar codigo
import {
  Button,
  ButtonGroup,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

import "../LoginPage/login.css";
import {
  eyeIcon,
  facebook,
  google,
  eyeOpen,
  eyeClose,
} from "../LoginPage/assets/index";
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
import {
  collection,
  addDoc,
  getFirestore,
  doc,
  setDoc,
  currentUser,
  get,
  query,
  onSnapshot,
} from "firebase/firestore";
import { Database, set, ref } from "firebase/database";
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
function Register() {
  /* const database = getDatabase(app); */
  const auth = getAuth(app);
  toast.configure();
  const navigate = useNavigate();
  const toaste = useToast();

  const provider = new GoogleAuthProvider();
  const provider2 = new FacebookAuthProvider();
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [validarName, setValidarName] = useState([]);
  const [emailReg, setEmailReg] = useState("");
  const [id, setId] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef();

  /**
   * It gets the user's ID, then it queries the database for the user's name, and then it sets the name
   * to the state.
   */

  function getId() {
    onAuthStateChanged(auth, (user) => {
      if (user == null) {
      } else {
        setId(user.uid);
      }
    });

    const ref = query(collection(db, "users"));

    //GET Names DONE

    onSnapshot(ref, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        const { name } = doc.data();

        items.push({ name });
      });
      setValidarName(items);
    });
  }

  /**
   * It checks if the username is already in use, if it is, it shows a toas`12t, if it isn't, it creates a
   * user with the email and password, then it sends an email verification, then it creates a document in
   * the database with the user's information, then it navigates to the login page.
   * @param event - The event that triggered the function.
   */
  async function Register(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    event.preventDefault();

    const MapNames = validarName.map((Nombres) => Nombres.name);

    if (MapNames.includes(usernameReg)) {
      toast.error("El nombre esta en uso", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "dark-toast",
      });
    } else {
      createUserWithEmailAndPassword(auth, emailReg, passwordReg)
        .then((userCredential) => {
          toast.info("Verifique su correo electronico", {
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

          setDoc(doc(db, "users", auth.currentUser.uid), {
            name: usernameReg,
            email: emailReg,
            pass: passwordReg,
            uid: auth.currentUser.uid,
            rol: "user",
            FechaDeModificacion: null,
          });
          // Signed in
          sendEmailVerification(auth.currentUser).then(async () => {
            // Email verification sent!

            setTimeout(() => {
              navigate("/loginUser");
            }, 5000);
          });
          const user = userCredential.emailReg;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..

          toast.error("Ya existe esa cuenta", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,

            className: "dark-toast",
          });
        });
    }
    setValidated(true);
  }

  const gugle = function (event) {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);

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
          }, 5000);
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
          }, 5000);
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
          }, 5000);
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
          }, 5000);
        }
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        navigate("/Home");
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

  useEffect(() => {
    getId();
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
        <div className="buttons-content mt-5">
          <Row>
            <Col>
              <Button
                colorScheme="blue"
                onClick={() => {
                  onOpen();
                  fasebuk();
                }}
                leftIcon={<FaFacebook />}
                width="150px"
              >
                Facebook
                <Modal
                  finalFocusRef={finalRef}
                  isOpen={isOpen}
                  onClose={onClose}
                >
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader style={{ textAlign: "center" }}>
                      AVISO IMPORTANTE
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      Al crear una cuenta con facebook, solo puedes iniciar
                      sesion con la red social que la haya hecho, de lo
                      contrario le dara un error de cuenta no existente
                    </ModalBody>

                    <ModalFooter></ModalFooter>
                  </ModalContent>
                </Modal>
              </Button>
            </Col>
            <Col>
              <Button
                leftIcon={<FaGoogle />}
                onClick={() => {
                  onOpen();
                  gugle();
                }}
                colorScheme="teal"
                variant="solid"
                width="150px"
              >
                Google
                <Modal
                  finalFocusRef={finalRef}
                  isOpen={isOpen}
                  onClose={onClose}
                >
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader style={{ textAlign: "center" }}>
                      AVISO IMPORTANTE
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      Al crear una cuenta con Facebook o Google, solo puedes
                      iniciar sesion con la red social que la haya hecho, de lo
                      contrario le dara un error de cuenta no existente
                    </ModalBody>

                    <ModalFooter></ModalFooter>
                  </ModalContent>
                </Modal>
              </Button>
            </Col>
          </Row>
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
              value={usernameReg}
              onChange={updateUsername}
              maxLength={30}
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
              maxLength={50}
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
                <img className="eye-icon" src={eyeOpen} />
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
          <div className="d-grid my-4 ">
            <Button
              colorScheme="teal"
              type="submit"
              size="lg"
              id="ingreso"
              onClick={Register}
            >
              Registrarse
            </Button>
            <ToastContainer limit={1} />
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
            >
              {" "}
              Inicia sesión
            </a>
          </button>
        </p>
        <p className="text-center " style={{ marginTop: "10px" }}>
          <button
            onClick={() => {
              navigate("/terminosycondiciones");
            }}
          >
            <a to="/terminosycondiciones">
              <u>Términos y Condiciones</u>
            </a>
          </button>
        </p>
      </div>
    </div>
  );
}

export default Register;
