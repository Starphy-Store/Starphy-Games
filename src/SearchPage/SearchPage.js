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
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <h4 className="text-center">
                  <strong>STYLE 1</strong>
                </h4>
                <hr />
                <div className="profile-card-2">
                  <img src={item.imagen} className="img img-responsive" />
                  <div className="uno">
                    <div className="profile-name">{item.juego}</div>
                    <div className="profile-username">{item.creator}</div>
                    <div className="profile-icons">
                      <h5>{item.precio}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </>
  );
}
