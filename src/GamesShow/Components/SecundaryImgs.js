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
  getDoc,
  doc,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";

const auth = getAuth(firebase2);
const db = getFirestore(firebase2);

const SecundaryImgs = () => {
  const { id } = useParams();
  const [user, setuser] = useState(false);
  const [game, setGame] = useState([]);

  const filtrado = game.filter((x) => x.esunjuego == "si");

  const filtrado2 = filtrado.filter((x) => x.juego == id);

  function getGames() {
    const ref = query(collection(db, "games"));

    onSnapshot(ref, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data(), id);
      });
      setGame(items);
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

  useEffect(() => {
    getGames();
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
                    >
                      Tu ordenador puede jugarlo
                    </h5>
                    <hr></hr>
                    <Col>
                      <h2 style={{ float: "left" }}>5.0</h2>
                      <img src={Star} style={{ float: "right" }}></img>
                      <img src={Star} style={{ float: "right" }}></img>
                      <img src={Star} style={{ float: "right" }}></img>
                      <img src={Star} style={{ float: "right" }}></img>
                      <img src={Star} style={{ float: "right" }}></img>
                    </Col>
                  </div>
                </Row>
              </Col>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default SecundaryImgs;
