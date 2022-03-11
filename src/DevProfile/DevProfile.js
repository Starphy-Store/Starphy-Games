import React, { useEffect, useState } from "react";
import Header from "../Components/Nav/Header";
import CardStyle from "../Components/Cards/CardStyle";
import "./DevProfile.css";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import {
  getFirestore,
  query,
  onSnapshot,
  collection,
  getDoc,
  doc,
} from "firebase/firestore";
import firebase2 from "../Home/Firebase2";
import { useParams } from "react-router";

const db = getFirestore(firebase2);

export default function DevProfile() {
  const { idprofile } = useParams();
  const [perfil, setPerfil] = useState([]);
  const [juego, setJuegos] = useState([]);

  const filtrarJuego = juego.filter((x) => x.idprofile == idprofile);
  const contador = filtrarJuego.length;

  console.log(contador);

  function DevPerfil() {
    const refgames = query(collection(db, "games"));
    const ref = doc(db, "users", idprofile);

    onSnapshot(ref, (querySnapshot) => {
      getDoc(ref, idprofile).then((data) => {
        const { pass, email, FechaDeModificacion, ...rest } = data.data();

        setPerfil({ ...rest });
      });
    });

    onSnapshot(refgames, (querySnapshot) => {
      const item = [];
      querySnapshot.forEach((doc) => {
        item.push(doc.data());
      });
      setJuegos(item);
    });
  }

  useEffect(() => {
    DevPerfil();
  }, []);

  function truncate(input) {
    if (input.length > 14) return input.substring(0, 14) + "...";
    else return input;
  }
  function dollarsign(input) {
    if (input == 0) {
      return "Gratis";
    } else {
      return "$" + input;
    }
  }
  function manzana(input) {
    if (input >= 2) {
      return input + " juegos publicados";
    } else {
      return input + " juego publicado";
    }
  }
  return (
    <>
      <Header />
      <Container>
        <Row className="pb-1">
          <h1 className="pb-1">{perfil.name}</h1>
        </Row>
        <div style={{ position: "absolute", color: "gray" }}>
          <h6 className="px-3 pt-3">{manzana(contador)}</h6>
          <h6 className="px-3">+1.000 Descargas</h6>
        </div>
        <div className="IconBorder">
          <img src={perfil.photoProfile} className="ImgIcon center"></img>
        </div>
      </Container>

      <Container className="d-flex pt-5">
        {contador == 0 ? (
          <Container>
            <h1 style={{ textAlign: "left" }}> No tiene juegos publicados</h1>
            <hr style={{ color: "white" }} />
          </Container>
        ) : (
          filtrarJuego.map((card) => (
            <Link to={`/GamesShow/${card.juego}`} className="w-25">
              <Container key={card.id}>
                <Row>
                  <Col md={212}>
                    <div className="profile-card-2 ">
                      <img
                        src={card.imagenportada}
                        className="img-responsive"
                      />
                      <div className="background "></div>
                      <div className="profile-name">{truncate(card.juego)}</div>
                      <div className="profile-username">{card.creator}</div>
                      <div className="profile-icons">
                        <h5>{dollarsign(card.precio)}</h5>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Link>
          ))
        )}
      </Container>
    </>
  );
}
