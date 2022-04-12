import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import GamesCarousel from "./GamesCarousel";
import { Link } from "react-router-dom";
import "../GamesShow.css";
import { useParams } from "react-router-dom";
import firebase2 from "../../Home/Firebase2.js";
import Star from "../../Assets/Star.png";

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
import { Tooltip } from "@mui/material";
import { useToast } from "@chakra-ui/toast";
import { Rating } from "react-simple-star-rating";

const auth = getAuth(firebase2);
const db = getFirestore(firebase2);

const SecundaryImgs = () => {
  const { id } = useParams();
  const [user, setuser] = useState(false);
  const [value, setValue] = useState(null);

  const toaste = useToast();

  toast.configure();
  const [game, setGame] = useState({});

  async function getGames() {
    const ref = doc(db, "games", id);

    onSnapshot(ref, (querySnapshot) => {
      getDoc(ref, id).then((data) => {
        const { videojuego, ...rest } = data.data();
        const juego = rest;
        const final = Comapeso(juego);
        setGame({ ...final, id });
      });
    });

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setuser(user.uid);
      }
    });
  }
  console.log(value);

  function Comapeso(juego) {
    let PesoGame;
    let PesoSimbolo;
    if (juego.almacenamiento <= 1000000) {
      PesoGame = juego.almacenamiento / 1000;
      PesoSimbolo = " KB";
    } else if (
      juego.almacenamiento >= 1000000 &&
      juego.almacenamiento <= 1000000000
    ) {
      PesoGame = juego.almacenamiento / 100000;
      PesoSimbolo = " MB";
    } else if (juego.almacenamiento >= 1000000000) {
      PesoGame = juego.almacenamiento / 1000000000;
      PesoSimbolo = " GB";
    }
    const objeto = {
      ...juego,
      PesoGame: juego.almacenamiento
        ? `${PesoGame.toFixed(2)} ${PesoSimbolo}`
        : " Aun esta en desarrollo ",
    };
    return objeto;
  }

  useEffect(() => {
    getGames();
  }, [id]);
  function dollarsign(input) {
    if (input == 0) {
      return "Gratis";
    } else {
      return "$" + input;
    }
  }

  const handleRating = (rate) => {
    setValue(rate);
    sessionStorage.setItem(game.juego, JSON.stringify(rate));
  };

  return (
    <div style={{ backgroundColor: "#1A202C" }}>
      <Container className="GamesInfo">
        <Row>
          <Col md={7}>
            <GamesCarousel />
            <h6 style={{ color: "grey" }} className="pt-4">
              Categorias:
            </h6>
            <h6>
              {game.categoria1} | {game.categoria2} | {game.categoria3}
            </h6>
            <Row className="pt-3">
              <h6 style={{ color: "grey" }} className="pt-4">
                Descripcion:
              </h6>
              <h6>{game.descrip}</h6>
              <h6 style={{ color: "grey" }} className="pt-4">
                Desarrolladora:
              </h6>
              <h6>
                <a
                  href={`/DevProfile/${game.idprofile}`}
                  style={{ color: "white" }}
                >
                  {game.creator}
                </a>
              </h6>
            </Row>
          </Col>
          <Col md={5}>
            <Col style={{ backgroundColor: "#1f1f1f", borderRadius: "20px" }}>
              <Row>
                <img
                  src={game.imagenportada}
                  className="banner"
                  style={{
                    width: "100%",
                    heigth: "300px",
                    objectFit: "cover",
                  }}
                />
                <div className="GamesPayment pt-4">
                  <h4>{dollarsign(game.precio)}</h4>

                  {user ? (
                    <Link to={`/payment/${id}`}>
                      <Button
                        variant="light"
                        size="lg"
                        style={{ width: "100%" }}
                      >
                        Comprar ahora
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      variant="light"
                      size="lg"
                      style={{ width: "100%" }}
                      onClick={() => {
                        toaste({
                          title: "Necesitas una cuenta para comprarlo",
                          status: "warning",
                          isClosable: true,
                          duration: 4000,
                        });
                      }}
                    >
                      Comprar ahora
                    </Button>
                  )}
                  <h5
                    style={{ textAlign: "center", color: "lightgreen" }}
                    className="pt-4"
                  ></h5>
                  <hr></hr>
                  <h6>Peso: {game.PesoGame}</h6>
                  <Col>
                    <h3>Valoraciones </h3>
                  </Col>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Rating
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                      ratingValue={value}
                      onClick={handleRating}
                      size={30}
                      transition
                      allowHalfIcon
                    />
                  </div>
                  <ToastContainer limit={1} />
                </div>
              </Row>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SecundaryImgs;
