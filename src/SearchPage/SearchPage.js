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

  const filtrado = game.filter((x) => x.esunjuego == "si");

  const filtrado2 = filtrado.filter((x) => {
    if (x.juego.toString().toLowerCase().includes(search.toLowerCase())) {
      return x;
    }
  });

  console.log(game);

  function getGames() {
    const ref = query(collection(db, "games"));

    onSnapshot(ref, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setGame(items);
    });
  }

  useEffect(() => {
    getGames();
  }, []);
  return (
    <>
      <Header></Header>
      <Container>
        {filtrado2.map((item) => (
          <Container key={item.id} className="carousel5">
            <Row>
              <Col>
                <Card className="border-0" style={{ width: "100%" }}>
                  <Link to={`/GamesShow/${item.juego}`}>
                    <Card.Img
                      variant="top"
                      src={item.imagen}
                      className="img-fluid img-card"
                    />
                  </Link>
                  <Card.Body>
                    <Card.Title>
                      <h4>{item.juego}</h4>
                      <h6>Mojang</h6>
                      <h6>{item.precio}</h6>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        ))}
      </Container>
    </>
  );
}
