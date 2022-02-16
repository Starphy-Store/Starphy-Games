import React, { useState, useEffect } from "react";
import Header from "../Components/Nav/Header";
import { Form, Button, Container, Col } from "react-bootstrap";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
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
  where,
} from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import "../EditProfile/editprofile.css";
import "react-toastify/dist/ReactToastify.css";

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

const db = getFirestore(firebase2);
export default function EditProfile() {
  const [id, setId] = useState("");
  const auth = getAuth(app);
  const [name, setName] = useState([]);
  const [Nombre, setNombre] = useState("");

  const current = new Date();

  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const filtrado = name.filter((x) => x.uid == id);
  const filtradonombre = filtrado.map((x) => x.name);

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
          className: "dark-toast",
        });
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        toast.warning("NOOO", {
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
  function addDaysToDate(date, days) {
    let res = new Date(date);
    res.setDate(res.getDate() + days);
    return res;
  }

  const tmpDate = new Date();

  const GuardarCambios = async function (e) {
    e.preventDefault();

    if (filtrado.FechaDeModificacion < addDaysToDate(tmpDate, 14)) {
      await updateDoc(doc(db, "users", auth.currentUser.uid), {
        name: Nombre,
        FechaDeModificacion: date,
      });
    } else {
      toast.warning("Ya has ", {
        icon: "⛔",
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

  const updateNombre = function (event) {
    setNombre(event.target.value);
  };

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
        <Col md={5}>
          <Form onSubmit={GuardarCambios}>
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
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Editar nombre</Form.Label>{" "}
              <Form.Text className="text-muted">
                Si cambias tu nombre tendras que esperar 14 dias para cambiarlo
                de nuevo.
              </Form.Text>
              <Form.Control
                maxLength={50}
                type="text"
                placeholder="nombredeusuario"
                value={Nombre}
                onChange={updateNombre}
              />
            </Form.Group>

            <p />
            <Button variant="success" type="submit">
              Guardar cambios
            </Button>
          </Form>
          <Form.Text className="text-muted">
            Nunca compartiremos tus credenciales con nadie.
          </Form.Text>
        </Col>
        <Col md={8}></Col>
      </Container>
    </>
  );
}
