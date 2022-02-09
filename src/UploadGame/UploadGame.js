import React, { useEffect, useReducer, useState } from "react";
import Header from "../Components/Nav/Header";
import { Form, Button, Container, Row, Col, Carousel } from "react-bootstrap";
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
import { Link } from "react-router-dom";

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
  const [moreImages, setMoreImages] = React.useState(0);
  const auth = getAuth(app);
  const navigate = useNavigate();
  const [Des, setDes] = useState("");
  const [game, setgame] = useState("");
  const [valor, setvalor] = useState(0);

  const [id, setId] = useState("");
  const [Juegos, setJuegos] = useState([]);
  const [correopay, setCorreopay] = useState("");

  const [validated, setValidated] = useState(null);

  const [categoria1, setcategoria1] = useState("");
  const [categoria2, setcategoria2] = useState("");
  const [categoria3, setcategoria3] = useState("");

  const [urlDescargar, seturlDescargar] = useState(null);
  const [urlImagenes, seturlImagenes] = useState("");
  const [urlImagenes2, seturlImagenes2] = useState("");
  const [urlImagenes3, seturlImagenes3] = useState("");

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

  const mapNameGames = Juegos.map((x) => x.juego);

  async function CargarArchivo(e) {
    setIsLoading(true);
    const archivolocal = e.target.files[0];

    const archivoRef = ref(storage, `Juegos/${archivolocal.name}`);

    await uploadBytes(archivoRef, archivolocal);

    seturlDescargar(await getDownloadURL(archivoRef));
    setIsLoading(false);
  }

  async function CargarImagenes(e) {
    setIsLoading(true);
    const archivolocal = e.target.files[0];

    const archivoRef = ref(storage, `ImagenesJuegos/${archivolocal.name}`);

    await uploadBytes(archivoRef, archivolocal);

    seturlImagenes(await getDownloadURL(archivoRef));
    setIsLoading(false);
  }

  async function CargarImagenes2(e) {
    setIsLoading(true);
    const archivolocal = e.target.files[0];

    const archivoRef = ref(storage, `ImagenesJuegos/${archivolocal.name}`);

    await uploadBytes(archivoRef, archivolocal);

    seturlImagenes2(await getDownloadURL(archivoRef));
    setIsLoading(false);
  }

  async function CargarImagenes3(e) {
    setIsLoading(true);
    const archivolocal = e.target.files[0];

    const archivoRef = ref(storage, `ImagenesJuegos/${archivolocal.name}`);

    await uploadBytes(archivoRef, archivolocal);

    seturlImagenes3(await getDownloadURL(archivoRef));
    setIsLoading(false);
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
    game,
    Des,
    correopay,
    categoria1,
    categoria2,
    categoria3,
    urlImagenes,
    urlImagenes2,
    urlImagenes3,
  ].some(isInvalid)
    ? true
    : false;

  const QueryDB = () => {
    const ref = query(collection(db, "games"));

    onSnapshot(ref, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setJuegos(items);
    });
  };

  async function CrearJuego(event) {
    event.preventDefault();
    console.log("render");
    if (mapNameGames.includes(game.toLowerCase().trim())) {
      toast.error("El nombre de ese juego esta en uso", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "dark-toast",
      });
    } else {
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
        correopay: correopay,
      });
    }
  }

  const updateDes = function (event) {
    setDes(event.target.value);
  };
  const updateCorreo = function (event) {
    setCorreopay(event.target.value);
  };
  const updategame = function (event) {
    setgame(event.target.value);
  };
  console.log(valor);
  const updatevalor = function (event) {
    if (event.target.value <= 200) {
      setvalor(parseInt(event.target.value).toFixed(2));
    } else {
      return setvalor(200);
    }
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

  useEffect(() => {
    id2();
    QueryDB();
  }, []);

  function addInput() {
    return (
      <Form.Group
        className="mb-2"
        controlId="formBasicPassword"
        style={{ width: "100%" }}
      >
        <Form.Label>Imagenes de tu juego</Form.Label>
        <Form.Control
          accept="image/png,image/jpeg"
          required
          type="file"
          placeholder=""
        />
      </Form.Group>
    );
  }

  //prueba
  function dollarsign(input) {
    if (input == 0) {
      return "Gratis";
    } else {
      return "$" + input;
    }
  }
  function truncate(input) {
    if (input.length > 16) return input.substring(0, 16) + "...";
    else return input;
  }
  return (
    <>
      <Header />
      <Row style={{ width: "100%", color: "white", paddingTop: "100px" }}>
        <Col md={7}>
          <h1>Ingresa tus datos</h1>
          <Form
            noValidate
            validated={validated}
            className="form-container needs-validation pt-3"
            onSubmit={CrearJuego}
            style={{ width: "100%" }}
          >
            <Form.Group
              className="mb-3"
              controlId="formBasicPassword"
              style={{ width: "100%" }}
            >
              <Form.Label>Archivo rar de tu videojuego</Form.Label>
              <Form.Control
                type="file"
                onChange={CargarArchivo}
                placeholder=""
              />
            </Form.Group>
            <Form.Group
              className="mb-4"
              controlId="formBasicPassword"
              style={{ width: "100%" }}
            >
              <Form.Label>Nombre del juego:</Form.Label>
              <Form.Control
                type="text"
                value={game}
                onChange={updategame}
                minLength={1}
                maxLength={30}
                placeholder="Ingresa el nombre de un juego"
                required
              />
              <Form.Control.Feedback type="invalid">
                Escribe un nickname
              </Form.Control.Feedback>
            </Form.Group>{" "}
            <Form.Group
              className="mb-3"
              controlId="formBasicPassword"
              style={{ width: "100%" }}
            >
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
            <Form.Group
              className="mb-3"
              controlId="formBasicPassword"
              style={{ width: "100%" }}
            >
              <Form.Select
                onChange={updatecategoria2}
                required
                aria-label="Default select example"
              >
                <option>Selecciona una categoria</option>
                <option value="Acción">Acción</option>
                <option value="RPG">RPG</option>
                <option value="Carreras">Carreras</option>
                <option value="FPS">FPS</option>
                <option value="Puzle">Puzle</option>
                <option value="Lucha">Lucha</option>
                <option value="MMORPG">MMORPG</option>
                <option value="MOBA">MOBA</option>
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicPassword"
              style={{ width: "100%" }}
            >
              <Form.Select
                onChange={updatecategoria3}
                required
                aria-label="Default select example"
              >
                <option>Selecciona una categoria</option>
                <option value="RPG">RPG</option>
                <option value="Agilidad mental">Agilidad mental</option>
                <option value="Shooter">Shooter</option>
                <option value="Terror">Terror</option>
                <option value="Mundo abierto">Mundo abierto</option>
                <option value="Minijuegos">Minijuegos</option>
                <option value="Sigilo">Sigilo</option>
                <option value="Battle Royale">Battle Royale</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Imagen para la portada</Form.Label>
              <Form.Control
                accept="image/*"
                required
                type="file"
                onChange={CargarImagenes}
                placeholder=""
                style={{ width: "100%" }}
              />
            </Form.Group>
            <hr />
            <Form.Group
              className="mb-2"
              controlId="formBasicPassword"
              style={{ width: "100%" }}
            >
              <Form.Label>Imagenes de tu juego</Form.Label>
              <Form.Control
                accept="image/*"
                required
                type="file"
                onChange={CargarImagenes2}
                placeholder=""
              />
            </Form.Group>
            <Form.Group
              className="mb-2"
              controlId="formBasicPassword"
              style={{ width: "100%" }}
            >
              <Form.Label>Imagenes de tu juego 2</Form.Label>
              <Form.Control
                accept="image/*"
                required
                type="file"
                onChange={CargarImagenes3}
                placeholder=""
              />
            </Form.Group>
            <Form.Label>
              <Button variant="dark" className="add-btn" onClick={addInput}>
                +
              </Button>
            </Form.Label>
            <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                required
                type="number"
                min={0}
                max={200}
                onChange={updatevalor}
                value={valor}
                placeholder="7.99$"
                style={{ width: "100px" }}
              />
              <Form.Control.Feedback type="invalid">
                Maximos 200
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicEmail"
              style={{ width: "100%", float: "right" }}
            >
              <Form.Label>Introduce el correo de tu paypal</Form.Label>
              <Form.Control
                type="email"
                className=""
                value={correopay}
                placeholder="Tu correo de paypal"
                onChange={updateCorreo}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="mt-5 pt-5">Descripcion</Form.Label>
              <textarea
                type="text"
                value={Des}
                required
                onChange={updateDes}
                placeholder="Mi juego..."
                rows="6"
                style={{ width: "100%", borderRadius: "5px" }}
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
            <p style={{ float: "right" }}>
              Asegurate que esta todo correcto...
            </p>
            <p></p>
          </Form>
        </Col>
        {/* ----averiguar esta wea  */}
        <Col>
          <Container>
            <Row>
              <Col md={8}>
                <h1 className="pb-4">Vista previa :</h1>

                <div className="profile-card-2">
                  <img className="img-responsive" src={urlImagenes} />
                  <div className="background "></div>
                  <div className="profile-name">{truncate(game)}</div>
                  <div className="profile-username">{nombre}</div>
                  <div className="profile-icons">
                    <h5>{dollarsign(valor)}</h5>
                  </div>
                </div>
                <Carousel
                  className="pt-4"
                  indicators={false}
                  style={{ borderRadius: "10px" }}
                >
                  {urlImagenes ? (
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={urlImagenes}
                        alt="First slide"
                      />
                      <h6>Primera imagen</h6>
                    </Carousel.Item>
                  ) : (
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="https://firebasestorage.googleapis.com/v0/b/usuarios-b78e1.appspot.com/o/Dise%C3%B1o%20sin%20t%C3%ADtulo%20(11).png?alt=media&token=8b38757c-fb20-408b-8382-8681c5d75c66"
                        alt="Second slide"
                      />
                      <h6>Primera imagen</h6>
                    </Carousel.Item>
                  )}

                  {urlImagenes2 ? (
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={urlImagenes2}
                        alt="Second slide"
                      />
                      <h6>Segunda imagen</h6>
                    </Carousel.Item>
                  ) : (
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="https://firebasestorage.googleapis.com/v0/b/usuarios-b78e1.appspot.com/o/Dise%C3%B1o%20sin%20t%C3%ADtulo%20(11).png?alt=media&token=8b38757c-fb20-408b-8382-8681c5d75c66"
                        alt="Third slide"
                      />
                      <h6>Segunda imagen</h6>
                    </Carousel.Item>
                  )}
                  {urlImagenes3 ? (
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={urlImagenes3}
                        alt="Third slide"
                      />
                      <h6>Tercera imagen</h6>
                    </Carousel.Item>
                  ) : (
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="https://firebasestorage.googleapis.com/v0/b/usuarios-b78e1.appspot.com/o/Dise%C3%B1o%20sin%20t%C3%ADtulo%20(11).png?alt=media&token=8b38757c-fb20-408b-8382-8681c5d75c66"
                        alt="Third slide"
                      />
                      <h6>Tercera imagen</h6>
                    </Carousel.Item>
                  )}
                </Carousel>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </>
  );
}
