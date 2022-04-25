import React, { useState, useEffect } from "react";
import Payment from "./Payment copy";
/* import BillPayment from "./BillPayment"; */
import MinecraftImg from "../Assets/MinecraftImg.jpg";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
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

  /*   const filtrado = juegos.filter((x) => x.esunjuego == "si"); */

  /*   const filtrado2 = filtrado.filter((x) => x.juego == id); */

  function dameJuegos() {
    const ref = doc(db, "games", id);

    onSnapshot(ref, (querySnapshot) => {
      getDoc(ref, id).then((data) => {
        const {
          videojuego,
          imagenjuego2,
          imagenjuego,
          esunjuego,
          descrip,
          categoria1,
          categoria2,
          categoria3,
          ...rest
        } = data.data();

        setJuegos({ ...rest });
      });
    });
  }

  function changebuttons(value) {
    if (value == "lavidaentera") {
      return (
        <Button variant="success" size="lg" style={{ width: "90%" }}>
          Descargar ahora
        </Button>
      );
    } else {
      return <Payment />;
    }
  }
  function dollarsign(input) {
    if (input == 0) {
      return "Gratis";
    } else {
      return "$" + input;
    }
  }

  useEffect(() => {
    dameJuegos();
  }, []);
  return (
    <div>
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
            <h6>Metodos de pago 💰</h6>
            <Col>
              <img
                src={juegos.imagenportada}
                style={{
                  width: "auto",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />

              <h2 className="pt-3">{juegos.juego}</h2>

              <h6>{juegos.creator}</h6>
            </Col>
            <Col>
              <hr />
              <h3 className="pt-2" style={{ alignText: "rigth" }}>
                Precio: {dollarsign(juegos.precio)}
              </h3>
            </Col>
          </Col>
          <Col>
            <Link to="/home">
              <h6>Regresar</h6>
            </Link>
            {/* <BillPayment /> */}
            <div>{changebuttons(juegos.precio)}</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
