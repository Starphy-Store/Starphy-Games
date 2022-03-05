import React, { useState, useEffect } from "react";
import Header from "../Components/Nav/Header";
import { Container, Col, Card, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
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
export default function SearchPage() {
  const { search } = useParams();
  const [game, setGame] = useState([]);

  const filtrado2 = game.filter((x) => {
    if (x.juego.toString().toLowerCase().includes(search.toLowerCase())) {
      return x;
    }
  });

  function getGames() {
    const ref = query(collection(db, "games"));

    onSnapshot(ref, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        const { videojuego, ...rest } = doc.data();
        items.push({ ...rest });
      });
      setGame(items);
    });
  }

  useEffect(() => {
    getGames();
  }, []);
  function truncate(input) {
    if (input.length > 20) return input.substring(0, 20) + "...";
    else return input;
  }

  function dollarsign(input) {
    if (input == 0) {
      return "Gratis";
    } else {
      return "$" + input;
    }
  }
  return (
    <>
      <Header></Header>
      <Container style={{ justifyContent: "center" }}>
        <h6 style={{ color: "white", paddingLeft: "12px" }} className="pt-3">
          Resultados de: {search}
        </h6>
      </Container>
      <Container className="d-flex">
        {filtrado2.map((item) => (
          <Link to={`/GamesShow/${item.juego}`} className="w-25">
            <Container key={item.id} fluid>
              <Row>
                <Col>
                  <div className="profile-card-2 ">
                    <img src={item.imagenportada} className="img-responsive" />
                    <div className="background "></div>
                    <div className="profile-name">{truncate(item.juego)}</div>
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
    </>
  );
}
