import React, { useEffect, useState } from "react";
import Header from "../Components/Nav/Header";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  collection,
  getFirestore,
  onSnapshot,
  query,
} from "firebase/firestore";
import firebase2 from "../Home/Firebase2";
import { Link } from "react-router-dom";

const auth = getAuth(firebase2);
const db = getFirestore(firebase2);

function Library() {
  const [perfil, setPerfil] = useState([]);
  const [id, setId] = useState([]);
  const [juegos, setJuegos] = useState([]);
  const [juegosbuy, setJuegobuy] = useState([]);

  const filtradoperfil = perfil.filter((x) => x.uid == id);
  const idperfil = filtradoperfil.map((x) => x.uid);

  const filterbuy = juegosbuy.filter((x) => x.idusuariocompra == idperfil);
  const filtradojueguito = filterbuy.map((x) => x.juegoscomprado);

  const filtradojuego = juegos.filter((x) =>
    filtradojueguito.includes(x.juego)
  );

  function getGames() {
    const ref = query(collection(db, "games"));
    const refe = query(collection(db, "users"));
    const refere = query(collection(db, "juegoscomprados"));

    onSnapshot(ref, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setJuegos(items);
    });
    onSnapshot(refe, (querySnapshot) => {
      const ite = [];
      querySnapshot.forEach((doc) => {
        ite.push(doc.data());
      });
      setPerfil(ite);
    });

    onSnapshot(refere, (querySnapshot) => {
      const cagaste = [];
      querySnapshot.forEach((doc) => {
        cagaste.push(doc.data());
      });
      setJuegobuy(cagaste);
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

  useEffect(() => {
    getGames();
  }, []);

  return (
    <>
      <Container>
        <Header />
        <h1 style={{ textAlign: "left" }}> Tu libreria </h1>
        <hr style={{ color: "white" }} />
      </Container>
      {filterbuy.length == 0 ? (
        <>
          <Container>
            <h2 style={{ color: "white" }} className="pt-3">
              No hay juegos por aqui...
            </h2>
          </Container>
          <Container>
            <p style={{ color: "white" }}>Anda mira uno que te guste :)</p>
          </Container>
        </>
      ) : (
        <Container className="d-flex">
          {filtradojuego.map((item) => (
            <>
              <a href={item.videojuego}>
                <Container key={item.id}>
                  <Row>
                    <Col md={12}>
                      <div className="profile-card-2 ">
                        <img
                          src={item.imagenportada}
                          className="img-responsive"
                        />
                        <div className="background "></div>
                        <div className="profile-name">{item.juego}</div>
                        <div className="profile-icons">
                          <h6>Da click para empezar la descarga</h6>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </a>
            </>
          ))}
        </Container>
      )}
      )
    </>
  );
}
export default Library;
