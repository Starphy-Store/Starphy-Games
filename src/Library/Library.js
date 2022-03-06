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
import { Filter } from "react-bootstrap-icons";

const auth = getAuth(firebase2);
const db = getFirestore(firebase2);

function Library() {
  const [juegos, setJuegos] = useState({});
  const [juegosbuy, setJuegobuy] = useState([]);
  const [id, setId] = useState(null);

  useEffect(() => {
    getUser();
    getGames();
  }, [id]);

  useEffect(() => {
    getAllGames();
  }, [juegosbuy]);

  function getUser() {
    onAuthStateChanged(auth, (user) => {
      setId(user.uid);
    });
  }

  async function getGames() {
    const Ref = query(collection(db, "juegoscomprados"));

    onSnapshot(Ref, (querySnapshot) => {
      const JuegosComprados = querySnapshot.docs.map((doc) => {
        const { idusuariocompra, juegoscomprado } = doc.data();
        return { idusuariocompra, juegoscomprado };
      });
      console.log(JuegosComprados);
      const FiltradoJuegos = JuegosComprados.filter(
        (juegos) => juegos.idusuariocompra == id
      );
      console.log(FiltradoJuegos);
      setJuegobuy(FiltradoJuegos);
    });
  }
  async function getAllGames() {
    const Refere = query(collection(db, "games"));

    onSnapshot(Refere, (querySnapshot) => {
      const AllGames = querySnapshot.docs.map((doc) => {
        const {
          categoria1,
          categoria2,
          categoria3,
          creator,
          descrip,
          imagenjuego,
          imagenjuego2,
          precio,
          correopay,
          almacenamiento,

          ...rest
        } = doc.data();

        return { ...rest };
      });

      const Mapeado = juegosbuy.map((X) => X.juegoscomprado);
      const FilterGames = AllGames.filter((x) =>
        Mapeado.some((m) => x.juego === m)
      );
      console.log(juegosbuy);
      setJuegos(FilterGames);
    });
  }

  return (
    <>
      <Container>
        <Header />
        <h1 style={{ textAlign: "left" }}> Tu libreria </h1>
        <hr style={{ color: "white" }} />
      </Container>
      {juegosbuy == 0 ? (
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
          <>
            {juegos.map((item) => (
              <a href={item.videojuego}>
                <Container>
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
            ))}
          </>
        </Container>
      )}
    </>
  );
}
export default Library;
