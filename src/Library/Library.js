import React, { useEffect, useState } from "react";
import Header from "../Components/Nav/Header";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getFirestore,
  onSnapshot,
  query,
} from "firebase/firestore";
import firebase2 from "../Home/Firebase2";
import { Link } from "react-router-dom";

const auth = getAuth(firebase2);
const db = getFirestore(firebase2);

function Library() {
  const [perfil, setPerfil] = useState({});
  const [id, setId] = useState("");
  const [juegos, setJuegos] = useState({});
  const [juegosbuy, setJuegobuy] = useState({});

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const item = [];
      const uids = user.uid;
      item.push(uids);
      setId(item.toString());
    }
  });

  function getUser() {}

  async function getGames() {
    const refe = await doc(db, "users", id);
    const ref = query(collection(db, "games"));
    const refere = query(collection(db, "juegoscomprados"));

    onSnapshot(refe, (querySnapshot) => {
      getDoc(refe, id).then((data) => {
        const usuario = data.data();

        setPerfil({ ...usuario, id });
      });
    });

    onSnapshot(refere, (querySnapshot) => {
      const juegoscomprados = querySnapshot.docs.map((doc) => {
        const { idusuariocompra, juegoscomprado } = doc.data();
        return { idusuariocompra, juegoscomprado };
      });
      const filtradojuegos = juegoscomprados.filter(
        (juego) => juego.idusuariocompra == perfil.uid
      );

      setJuegobuy(filtradojuegos);
    });

    onSnapshot(ref, (querySnapshot) => {
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

      const Mapeado = juegosbuy.map((x) => x.juegoscomprado);
      const FiltradoJuego = AllGames.filter((x) =>
        Mapeado.some((m) => x.juego === m)
      );

      setJuegos(FiltradoJuego);
    });
  }
  console.log(juegos);
  console.log(perfil);
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
            <a href={juegos.videojuego}>
              <Container>
                <Row>
                  <Col md={12}>
                    <div className="profile-card-2 ">
                      <img
                        src={juegos.imagenportada}
                        className="img-responsive"
                      />
                      <div className="background "></div>
                      <div className="profile-name">{juegos.juego}</div>
                      <div className="profile-icons">
                        <h6>Da click para empezar la descarga</h6>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </a>
          </>
        </Container>
      )}
    </>
  );
}
export default Library;
