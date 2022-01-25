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
} from "firebase/firestore";
import firebase2 from "../Home/Firebase2";
import { useParams } from "react-router";

const db = getFirestore(firebase2);

export default function DevProfile() {
  const { idprofile } = useParams();
  const [perfil, setPerfil] = useState([]);
  const [juego, setJuegos] = useState([]);

  const filtradoPerfil = perfil.filter((x) => x.rol == "dev");
  const filtradoPerfil2 = filtradoPerfil.filter((x) => x.uid == idprofile);
  const filtradoperfilid = filtradoPerfil2.map((item) => item.uid);
  const filtrarJuego = juego.filter((x) => x.idprofile == filtradoperfilid);
  const contador = filtrarJuego.length;
  console.log();
  function DevPerfil() {
    const ref = query(collection(db, "users"));
    const refgames = query(collection(db, "games"));

    onSnapshot(ref, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setPerfil(items);
    });

    onSnapshot(refgames, (querySnapshot) => {
      const item = [];
      querySnapshot.forEach((doc) => {
        item.push(doc.data());
        console.log(item);
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
    if (input == "Gratis") {
      return input;
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
      {filtradoPerfil2.map((item) => (
        <Container>
          <Row className="pb-1">
            <h1 className="pb-1">{item.name}</h1>
          </Row>
          <div style={{ position: "absolute", color: "gray" }}>
            <h6 className="px-3 pt-3">{manzana(contador)}</h6>
            <h6 className="px-3">+1.000 Descargas</h6>
          </div>
          <div className="IconBorder">
            <img src={item.photoProfile} className="ImgIcon center"></img>
          </div>
        </Container>
      ))}

      <Container className="d-flex pt-5">
        {filtrarJuego.map((card) => (
          <Link to={`/GamesShow/${card.juego}`} className="w-25">
            <Container key={card.id}>
              <Row>
                <Col md={212}>
                  <div className="profile-card-2 ">
                    <img src={card.imagenportada} className="img-responsive" />
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
        ))}
      </Container>
    </>
  );
}
