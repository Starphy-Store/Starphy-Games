import React, { useState, useEffect } from "react";
import Header from "../Components/Nav/Header";
import Footer from "../Footer/Footer";
import Slider from "./Slider";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import {
  query,
  collection,
  onSnapshot,
  getFirestore,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";
import firebase2 from "../Home/Firebase2.js";
const db = getFirestore(firebase2);
export default function CategorySection() {
  const { Cooperativo } = useParams();
  const { categoria2 } = useParams();
  const { categoria3 } = useParams();
  const [game, setGame] = useState([]);

  const filtros = game.filter((x) => x.esunjuego == "si");

  const filteronline = filtros.filter((x) => {
    if (x.categoria1 == "Online") return true;
    if (x.categoria2 == "Online") return true;
    if (x.categoria3 == "Online") return true;
  });
  const filtercoop = filtros.filter((x) => {
    if (x.categoria1 == Cooperativo) return true;
    if (x.categoria2 == Cooperativo) return true;
    if (x.categoria3 == Cooperativo) return true;
  });

  function getGames() {
    const ref = query(collection(db, "games"));

    onSnapshot(ref, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data(), doc.id);
      });

      setGame(items);
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
    <>
      <Container className="d-flex pt-3">
        {filtercoop.map((item) => (
          <Link to={`/GamesShow/${item.juego}`} className="w-25">
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
      );
      <Container>
        <Header />
        <h1 className="pb-3" style={{ Justify: "left" }}>
          Juegos de {Cooperativo}
        </h1>
        <h5
          style={{
            color: "white",
            position: "absolute",
            zIndex: "999",
            backgroundColor: "#ff595e",
            padding: "15px",
            borderRadius: "20px 0px 20px 0",
          }}
        >
          Juego de {Cooperativo} mas popular:
        </h5>
        <Slider />
      </Container>
      <Footer />
    </>
  );
}
