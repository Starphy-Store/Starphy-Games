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

  const filtradoPerfil = perfil.filter((x) => x.rol == "dev");

  function DevPerfil() {
    const ref = query(collection(db, "users"));

    onSnapshot(ref, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
        console.log(items);
      });
      setPerfil(items);
    });
  }

  useEffect(() => {
    DevPerfil();
  }, []);

  return (
    <>
      <Header />
      {filtradoPerfil.map((item) => (
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
          <CardStyle></CardStyle>
        </Container>
      </div>
    </>
  );
}
