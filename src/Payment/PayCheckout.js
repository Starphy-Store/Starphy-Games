import React, { useState, useEffect } from "react";
import Payment from "./Payment copy";
import MinecraftImg from "../Assets/MinecraftImg.jpg";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router";
import firebase2 from "../Home/Firebase2";
import {
  query,
  collection,
  onSnapshot,
  getFirestore,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";

const db = getFirestore(firebase2);
export default function PayCheckout() {
  const [checkout, setCheckOut] = useState(false);

  const { id } = useParams();
  const [juegos, setJuegos] = useState([]);

  const filtrado = juegos.filter((x) => x.esunjuego == "si");

  const filtrado2 = filtrado.filter((x) => x.juego == id);

  function dameJuegos() {
    const ref = query(collection(db, "games"));

    onSnapshot(ref, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data(), id);
      });
      setJuegos(items);
    });
  }

  function changebuttons(value) {
    if (value == "Gratis") {
      return (
        <Button variant="success" size="lg" style={{ width: "90%" }}>
          Descargar ahora
        </Button>
      );
    } else {
      return <Payment />;
    }
  }

  useEffect(() => {
    dameJuegos();
  }, []);
  return (
    <div>
      {filtrado2.map((item) => (
        <Container
          style={{
            backgroundColor: "white",
            height: "92vh",
            borderRadius: "15px",
            marginTop: "4vh",
          }}
        >
          <Row>
            <Col style={{ width: "70vw" }} className="pt-5">
              <h6>Metodos de pago </h6>
              <Col>
                <img
                  src={item.imagen}
                  style={{
                    width: "auto",
                    height: "300px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />

                <h2 className="pt-3">{item.juego}</h2>

                <h6>{item.creator}</h6>
              </Col>
              <Col>
                <hr />
                <h3 className="pt-2" style={{ alignText: "rigth" }}>
                  Precio: {item.precio}
                </h3>
              </Col>
              <div>{changebuttons(item.precio)}</div>
            </Col>
            <Col>
              <h6>Regresar</h6>
            </Col>
          </Row>
        </Container>
      ))}
    </div>
  );
}
