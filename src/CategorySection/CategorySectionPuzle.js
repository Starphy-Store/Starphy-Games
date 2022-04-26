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
  const { Puzle } = useParams();
  const [game, setGame] = useState([]);

  const filterPuzle = game.filter((x) => {
    if (x.categoria1 == Puzle) return true;
    if (x.categoria2 == Puzle) return true;
    if (x.categoria3 == Puzle) return true;
  });

  function getGames() {
    const ref = query(collection(db, "games"));

    onSnapshot(ref, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        const { videojuego, esunjuego, imagenjuego, imagenjuego2, ...rest } =
          doc.data();
        items.push({ ...rest, id: doc.id });
      });
      setGame(items);
    });
  }
  useEffect(() => {
    getGames();
  }, []);

  function dollarsign(input) {
    if (input == 0) {
      return "Gratis";
    } else {
      return "$" + input;
    }
  }

  return (
    <>
      {" "}
      <Header />
      <Container>
        <h1 className="pb-3" style={{ Justify: "left" }}>
          Juegos de {Puzle}
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
          Juego de {Puzle} mas popular:
        </h5>
        <Slider />
      </Container>
      <Container className="d-flex pt-3">
        {filterPuzle.map((item) => (
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
      <Footer />
    </>
  );
}
