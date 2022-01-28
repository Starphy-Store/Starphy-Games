import React, { useEffect, useReducer, useState } from "react";
import Header from "../Components/Nav/Header";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import firebase2 from "../../src/Home/Firebase2";
import { initializeApp } from "firebase/app";
import {
  query,
  collection,
  onSnapshot,
  getFirestore,
  getDocs,
  getDoc,
  doc,
  setDoc,
  addDoc,
} from "firebase/firestore";
import Loading from "../Home/spinner";

import { toast, ToastContainer } from "react-toastify";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ref, getStorage, uploadBytes, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";

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
const storage = getStorage(app);

export default function UploadGame() {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const [Des, setDes] = useState("");
  const [game, setgame] = useState("");
  const [valor, setvalor] = useState(0);
  const [id, setId] = useState("");

  const [validated, setValidated] = useState(null);

  const [categoria1, setcategoria1] = useState("");
  const [categoria2, setcategoria2] = useState("");
  const [categoria3, setcategoria3] = useState("");

  const [urlDescargar, seturlDescargar] = useState(null);
  const [urlImagenes, seturlImagenes] = useState(null);
  const [urlImagenes2, seturlImagenes2] = useState(null);
  const [urlImagenes3, seturlImagenes3] = useState(null);

  const [isLoading, setIsLoading] = useState(null);
  const [añadir, setañadir] = useState([
    <Form.Group className="mb-2" controlId="formBasicPassword">
      <Form.Label>Imagenes de tu juego</Form.Label>
      <Form.Control required type="file" placeholder="" />
    </Form.Group>,
  ]);
  const [nombrecreador, setnombrecreador] = useState([]);

  const filtrado = nombrecreador.filter((x) => x.uid == id);
  const nombre = filtrado.map((item) => item.name);

  async function CargarArchivo(e) {
    setIsLoading(true);
    const archivolocal = e.target.files[0];

    const archivoRef = ref(storage, `Juegos/${archivolocal.name}`);

    await uploadBytes(archivoRef, archivolocal);

    seturlDescargar(await getDownloadURL(archivoRef));
    setIsLoading(false);
  }

  async function CargarImagenes(e) {
    const archivolocal = e.target.files[0];

    const archivoRef = ref(storage, `ImagenesJuegos/${archivolocal.name}`);

    await uploadBytes(archivoRef, archivolocal);

    seturlImagenes(await getDownloadURL(archivoRef));
  }

  async function CargarImagenes2(e) {
    const archivolocal = e.target.files[0];

    const archivoRef = ref(storage, `ImagenesJuegos/${archivolocal.name}`);

    await uploadBytes(archivoRef, archivolocal);

    seturlImagenes2(await getDownloadURL(archivoRef));
  }

  async function CargarImagenes3(e) {
    const archivolocal = e.target.files[0];

    const archivoRef = ref(storage, `ImagenesJuegos/${archivolocal.name}`);

    await uploadBytes(archivoRef, archivolocal);

    seturlImagenes3(await getDownloadURL(archivoRef));
  }
  function id2() {
    const ref = query(collection(db, "users"));

    onSnapshot(ref, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });

      setnombrecreador(items);
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

  const isInvalid = (text) => !Boolean(text.trim());

  const buttonEnable = [
    Des,
    game,
    urlImagenes,
    urlImagenes2,
    urlImagenes3,
  ].some(isInvalid)
    ? true
    : false;

  async function CrearJuego(event) {
    event.preventDefault();
    console.log("render");
    toast.success("Juego creado", {
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

    addDoc(collection(db, "games"), {
      descrip: Des,
      juego: game,
      precio: valor,
      esunjuego: "si",
      imagenportada: urlImagenes,
      imagenjuego: urlImagenes2,
      imagenjuego2: urlImagenes3,
      categoria1: categoria1,
      categoria2: categoria2,
      categoria3: categoria3,
      videojuego: urlDescargar,
      idprofile: auth.currentUser.uid,
      creator: nombre,
    });
  }

  const updateDes = function (event) {
    setDes(event.target.value);
  };
  const updategame = function (event) {
    setgame(event.target.value);
  };
  const updatevalor = function (event) {
    setvalor(event.target.value);
  };
  const updatecategoria1 = function (event) {
    setcategoria1(event.target.value);
  };
  const updatecategoria2 = function (event) {
    setcategoria2(event.target.value);
  };
  const updatecategoria3 = function (event) {
    setcategoria3(event.target.value);
  };

  const añadirElemento = () => {
    setañadir([
      ...añadir,
      <Form.Group className="mb-2" controlId="formBasicPassword">
        <Form.Label>Imagenes de tu juego</Form.Label>
        <Form.Control required type="file" placeholder="" />
      </Form.Group>,
    ]);
    console.log(añadir);
  };

  useEffect(() => {
    id2();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col
            style={{ justifyContent: "left", color: "white", width: "600px" }}
          >
            <h1>Datos para firebase</h1>
            <Form
              noValidate
              validated={validated}
              className="form-container needs-validation"
              onSubmit={CrearJuego}
              style={{ width: "100%" }}
            >
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>
                  Carga tu videojuego o el archivo rar de tu videojuego
                </Form.Label>
                <Form.Control
                  type="file"
                  onChange={CargarArchivo}
                  placeholder=""
                />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Label>Nombre del juego:</Form.Label>
                <Form.Control
                  type="text"
                  value={game}
                  onChange={updategame}
                  placeholder="Ingresa el nombre de un juego"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Escribe un nickname
                </Form.Control.Feedback>
              </Form.Group>{" "}
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Escoge 3 categorias</Form.Label>
                <Form.Select
                  onChange={updatecategoria1}
                  required
                  aria-label="Default select example"
                >
                  <option>Selecciona una categoria</option>
                  <option value="Acción">Acción</option>
                  <option value="Arcade">Arcade</option>
                  <option value="Estrategia">Estrategia</option>
                  <option value="Cooperativo">Cooperativo</option>
                  <option value="Online">Online</option>
                  <option value="Supervivencia">Supervivencia</option>
                  <option value="Simulacion">Simulacion</option>
                  <option value="Battle Royale">Battle Royale</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Select
                  onChange={updatecategoria2}
                  required
                  aria-label="Default select example"
                >
                  <option>Selecciona una categoria</option>
                  <option value="Acción">Acción</option>
                  <option value="Arcade">Arcade</option>
                  <option value="Estrategia">Estrategia</option>
                  <option value="Cooperativo">Cooperativo</option>
                  <option value="Online">Online</option>
                  <option value="Supervivencia">Supervivencia</option>
                  <option value="Simulacion">Simulacion</option>
                  <option value="Battle Royale">Battle Royale</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Select
                  onChange={updatecategoria3}
                  required
                  aria-label="Default select example"
                >
                  <option>Selecciona una categoria</option>
                  <option value="Acción">Acción</option>
                  <option value="Arcade">Arcade</option>
                  <option value="Estrategia">Estrategia</option>
                  <option value="Cooperativo">Cooperativo</option>
                  <option value="Online">Online</option>
                  <option value="Supervivencia">Supervivencia</option>
                  <option value="Simulacion">Simulacion</option>
                  <option value="Battle Royale">Battle Royale</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Imagen para la portada</Form.Label>
                <Form.Control
                  required
                  type="file"
                  onChange={CargarImagenes}
                  placeholder=""
                />
              </Form.Group>
              <Form.Group className="mb-2" controlId="formBasicPassword">
                <Form.Label>Imagenes de tu juego</Form.Label>
                <Form.Control
                  required
                  type="file"
                  onChange={CargarImagenes2}
                  placeholder=""
                />
              </Form.Group>
              <Form.Group className="mb-2" controlId="formBasicPassword">
                <Form.Label>Imagenes de tu juego 2</Form.Label>
                <Form.Control
                  required
                  type="file"
                  onChange={CargarImagenes3}
                  placeholder=""
                />
              </Form.Group>
              <Button
                variant="dark"
                className="add-btn"
                onClick={añadirElemento}
              >
                +
              </Button>
              <Form.Group className="mb-3 mt-3" controlId="formBasicPassword">
                <Form.Label>Precio</Form.Label>
                <Form.Control
                  required
                  type="number"
                  value={valor}
                  max={100}
                  onChange={updatevalor}
                  placeholder="$"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Descripcion:</Form.Label>
                <Form.Control
                  type="text"
                  value={Des}
                  required
                  onChange={updateDes}
                  placeholder="Descripcion"
                  style={{ paddingBottom: "150px" }}
                />
              </Form.Group>
              {isLoading ? (
                <div>
                  <Loading />
                  <p>Espera a que carge su juego</p>
                </div>
              ) : (
                <Button variant="success" type="submit" disabled={buttonEnable}>
                  Subir juego
                </Button>
              )}
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
