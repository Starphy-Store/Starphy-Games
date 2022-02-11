import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import GamesCarousel from "./GamesCarousel";
import { Link } from "react-router-dom";
import "../GamesShow.css";
import { useParams } from "react-router-dom";
import firebase2 from "../../Home/Firebase2.js";
import Star from "../../Assets/Star.png";
import { Rating } from "@mui/material";

import {
  query,
  collection,
  onSnapshot,
  getFirestore,
  getDocs,
  updateDoc,
  getDoc,
  doc,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { ArrowBarRight, ArrowBarUp } from "react-bootstrap-icons";
import { toast, ToastContainer } from "react-toastify";

const auth = getAuth(firebase2);
const db = getFirestore(firebase2);

const SecundaryImgs = () => {
  const { id } = useParams();
  const [user, setuser] = useState(false);
  const [perfiluser, setPerfiluser] = useState([]);
  toast.configure();
  const [game, setGame] = useState([]);
  const [estrellas, setEstrellas] = useState(0);
  const [disk, setDisk] = useState("");
  const [coma, setComa] = useState("");

  console.log(disk);

  const filtrado = game.filter((x) => x.esunjuego == "si");

  const filtrado2 = filtrado.filter((x) => x.juego == id);

  const mapeadocate = filtrado2.map((x) => x.categoria1);

  const categoria = game.filter((x) => x.categoria1 == mapeadocate);

  const filtradouser = perfiluser.filter((x) => x.uid == user);

  const prueba = filtradouser.filter((x) => x);

  function getGames() {
    const ref = query(collection(db, "games"));
    const refe = query(collection(db, "users"));

    onSnapshot(ref, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data(), id);
      });
      setGame(items);
    });

    onSnapshot(refe, (querySnapshot) => {
      const item = [];
      querySnapshot.forEach((doc) => {
        item.push(doc.data());
      });
      setPerfiluser(item);
    });

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const item = [];
        const uids = user.uid;
        item.push(uids);
        setuser(item);
      }
    });
  }

  const SendRatingDB = () => {
    if (auth.currentUser == null) {
      toast.error("Crea una cuenta para valorarlo", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "dark-toast",
        limit: 2,
      });
    } else {
      {
        filtrado2.map((item) =>
          updateDoc(doc(db, "users", auth.currentUser.uid), {
            valoraciones: estrellas,
          })
        );
      }
    }
  };
  function pesoJuego() {
    const mapePeso = filtrado2.map((x) => x.almacenamiento);
    let PesoGame;
    if (mapePeso <= 1000000) {
      PesoGame = " KB";
    } else if (mapePeso >= 1000000 && mapePeso <= 1000000000) {
      PesoGame = " MB";
    } else if (mapePeso >= 1000000000) {
      PesoGame = " GB";
    }
    setDisk(PesoGame);
  }

  function Comapeso() {
    const mapePeso = filtrado2.map((x) => x.almacenamiento);
    let PesoGame;
    if (mapePeso <= 1000000) {
      PesoGame = mapePeso / 1000;
    } else if (mapePeso >= 1000000 && mapePeso <= 1000000000) {
      PesoGame = mapePeso / 100000;
    } else if (mapePeso >= 1000000000) {
      PesoGame = mapePeso / 1000000000;
    }
    setComa(PesoGame.toFixed(2));
  }
  console.log(coma);
  useEffect(() => {
    getGames();
    pesoJuego();
    Comapeso();
  }, []);
  function dollarsign(input) {
    if (input == "Gratis") {
      return input;
    } else {
      return "$" + input;
    }
  }

  return (
    <div>
      <Container className="GamesInfo">
        {filtrado2.map((item) => (
          <Row>
            <Col md={7}>
              <GamesCarousel />
              <h6 style={{ color: "grey" }} className="pt-4">
                Categorias:
              </h6>
              <h6>
                {item.categoria1} | {item.categoria2} | {item.categoria3}
              </h6>
              <Row className="pt-3">
                <h6 style={{ color: "grey" }} className="pt-4">
                  Descripcion:
                </h6>
                <h6>{item.descrip}</h6>
                <h6 style={{ color: "grey" }} className="pt-4">
                  Desarrolladora:
                </h6>
                <h6>
                  <a
                    href={`/DevProfile/${item.idprofile}`}
                    style={{ color: "white" }}
                  >
                    {item.creator}
                  </a>
                </h6>
              </Row>
            </Col>
            <Col md={5}>
              <Col style={{ backgroundColor: "#1f1f1f", borderRadius: "20px" }}>
                <Row>
                  <img
                    src={item.imagenportada}
                    className="banner"
                    style={{
                      width: "100%",
                      heigth: "300px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="GamesPayment pt-4">
                    <h4>{dollarsign(item.precio)}</h4>

                    {user ? (
                      <Link to={`/payment/${item.juego}`}>
                        <Button
                          variant="light"
                          size="lg"
                          style={{ width: "100%" }}
                        >
                          Comprar ahora
                        </Button>
                      </Link>
                    ) : (
                      <Link to={"/Loginuser"}>
                        <Button
                          variant="light"
                          size="lg"
                          style={{ width: "100%" }}
                        >
                          Comprar ahora
                        </Button>
                      </Link>
                    )}
                    <h5
                      style={{ textAlign: "center", color: "lightgreen" }}
                      className="pt-4"
                    ></h5>
                    <hr></hr>
                    <h6>
                      Peso: {coma}
                      {disk}
                    </h6>
                    <Col>
                      <h3>Valoraciones </h3>
                      <Rating
                        onChange={(event, newValue) => {
                          setEstrellas(newValue);
                          SendRatingDB(event);
                        }}
                        name="size-large"
                        defaultValue={2}
                        size="large"
                      />
                    </Col>
                    <ToastContainer limit={1} />
                  </div>
                </Row>
              </Col>
            </Col>
          </Row>
        ))}
      </Container>

      <Container style={{ color: "white" }} className="pt-5">
        <h2>Algunos juegos parecidos</h2>
      </Container>
      <Container className="d-flex">
        {categoria.map((item) => (
          <Link
            to={`/GamesShow/${item.juego}`}
            href="GamesInfo"
            className="w-25"
          >
            <Container key={item.id}>
              <Row>
                <Col md={12}>
                  <div className="profile-card-2 ">
                    <img src={item.imagenportada} className="img-responsive" />
                    <div className="background "></div>
                    <div className="profile-name">{item.juego}</div>
                    <div className="profile-username">{item.creator}</div>
                    <div className="profile-icons">
                      <h5>{dollarsign(item.precio)}</h5>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </Link>
        ))}
      </Container>
    </div>
  );
};

export default SecundaryImgs;
