import React, { useState, useEffect } from "react";
import Header from "../Components/Nav/Header";
import Footer from "../Footer/Footer";
import Slider from "./Slider";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import {
  query,
  collection,
  onSnapshot,
  getFirestore,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";
import firebase2 from "../Home/Firebase2.js";
const db = getFirestore(firebase2);
export default function CategorySection() {
  const { AgilidadMental } = useParams();
  const [game, setGame] = useState([]);

  const filterAgilidadMental = game.filter((x) => {
    if (x.categoria1 == AgilidadMental) return true;
    if (x.categoria2 == AgilidadMental) return true;
    if (x.categoria3 == AgilidadMental) return true;
  });

  function getGames() {
    const ref = query(collection(db, "games"));

    onSnapshot(ref, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        const { videojuego, esunjuego, imagenjuego, imagenjuego2, ...rest } =
          doc.data();
        items.push({ ...rest, id: doc.id });
      });
      setGame(items);
    });
  }
  useEffect(() => {
    getGames();
  }, []);

  function dollarsign(input) {
    if (input == 0) {
      return "Gratis";
    } else {
      return "$" + input;
    }
  }

  return (
    <>
      <Header />
      <Container>
        <h1 className="pb-3" style={{ Justify: "left" }}>
          Juegos de {AgilidadMental}
        </h1>
        <h5
          style={{
            color: "white",
            position: "absolute",
            zIndex: "999",
            backgroundColor: "#ff595e",
            padding: "15px",
            borderRadius: "20px 0px 20px 0",
          }}
        >
          Juego de {AgilidadMental} mas popular:
        </h5>
        <Carousel
          style={{ width: "100%", borderRadius: "20px" }}
          className="carousel-inner"
          indicators={false}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://firebasestorage.googleapis.com/v0/b/usuarios-b78e1.appspot.com/o/ImagenesJuegos%2F02_caso_cordoba_df_003.jpg?alt=media&token=4520c2d1-0a12-4f8c-bdcf-0cef221cc0e6"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://firebasestorage.googleapis.com/v0/b/usuarios-b78e1.appspot.com/o/ImagenesJuegos%2F1560171797_999980_1560171929_noticia_normal.jpg?alt=media&token=91d26f8f-657e-488f-adc2-674ee7c27b18"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://firebasestorage.googleapis.com/v0/b/usuarios-b78e1.appspot.com/o/ImagenesJuegos%2F16lrtfwgjsf51.jpg?alt=media&token=838a823b-411b-449b-8ad4-acbaf9ea4dfb"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Container>
      <Container className="d-flex pt-3">
        {filterAgilidadMental.map((item) => (
          <Link to={`/GamesShow/${item.juego}`} className="w-25">
            <Container key={item.id}>
              <Row>
                <Col md={12}>
                  <div className="profile-card-2 ">
                    <img src={item.imagenportada} className="img-responsive" />
                    <div className="background "></div>
                    <div className="profile-name">{item.juego}</div>
                    <div className="profile-username">{item.creator}</div>
                    <div className="profile-icons">
                      <h5>{dollarsign(item.precio)}</h5>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </Link>
        ))}
      </Container>
      );
      <Footer />
    </>
  );
}
