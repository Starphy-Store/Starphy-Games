import React, { useEffect, useState } from "react";
import Header from "../Components/Nav/Header";
import CardStyle from "../Components/Cards/CardStyle";
import "./DevProfile.css";
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
  const [cua, setcua] = useState(null);
  const [juego, setJuegos] = useState([]);

  const filtradoPerfil = perfil.filter((x) => x.rol == "dev");
  const filtradoPerfil2 = filtradoPerfil.filter((x) => x.id == id);

  const filtrarJuego = juego.filter((x) => x.id == id);

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
      });
      setJuegos(item);
      setcua(item ? true : false);
    });
  }

  useEffect(() => {
    DevPerfil();
  }, []);

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

        <Container className="pt-5" style={{ marginTop: "50px" }}>
          {cua ? <CardStyle /> : <p>No tiene juegos</p>}
        </Container>
      </div>
    </>
  );
}
