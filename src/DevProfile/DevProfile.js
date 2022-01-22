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
  const { id } = useParams();
  const [perfil, setPerfil] = useState([]);
  const [juego, setJuegos] = useState([]);

  const filtradoPerfil = perfil.filter((x) => x.rol == "dev");
  const filtradoPerfil2 = filtradoPerfil.filter((x) => x.uid == id);
  console.log(filtradoPerfil);
  const filtrarJuego = juego.filter((x) => x.id == id);

  console.log(filtrarJuego);
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
        item.push(doc.data(), id);
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

  return (
    <>
      <Header />
      {filtradoPerfil2.map((item) => (
        <Container>
          <Row className="pb-5">
            <h1 className="pb-5">{item.name}</h1>
          </Row>

          <div className="IconBorder">
            <img src={item.photoProfile} className="ImgIcon center"></img>
          </div>
        </Container>
      ))}
      <div style={{ backgroundColor: "white", height: "70vh" }}>
        <h6 className="px-3 pt-3">3 juegos publicados</h6>
        <h6 className="px-3">+1.000 descargas</h6>

        {filtrarJuego.map((card) => (
          <Container className="pt-5" style={{ marginTop: "50px" }}>
            <Link to={`/GamesShow/${card.juego}`}>
              <Container key={card.id}>
                <Row>
                  <Col md={3}>
                    <div className="profile-card-2 ">
                      <img src={card.imagen} className="img-responsive" />
                      <div className="background "></div>
                      <div className="profile-name">{truncate(card.juego)}</div>
                      <div className="profile-username">Epic Games</div>
                      <div className="profile-icons">
                        <h5>{card.precio}</h5>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Link>
          </Container>
        ))}
      </div>
    </>
  );
}
