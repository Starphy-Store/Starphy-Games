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
import { Carousel } from "react-bootstrap";

const db = getFirestore(firebase2);
export default function CategorySection() {
  const { Cooperativo } = useParams();

  const [game, setGame] = useState([]);

  const filtercoop = game.filter((x) => {
    if (x.categoria1 == Cooperativo) return true;
    if (x.categoria2 == Cooperativo) return true;
    if (x.categoria3 == Cooperativo) return true;
  });

  console.log(game);
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
      <Container className="d-flex pt-3">
        {filtercoop.slice(0, 4).map((item) => (
          <Link to={`/GamesShow/${item.id}`} className="w-25">
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

      <Container>
        <Header />
        <h1 className="pb-3" style={{ Justify: "left" }}>
          Juegos de {Cooperativo}
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
          Juego de {Cooperativo} mas popular:
        </h5>
        <Carousel
          style={{ width: "100%", borderRadius: "20px" }}
          className="carousel-inner"
          indicators={false}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://firebasestorage.googleapis.com/v0/b/usuarios-b78e1.appspot.com/o/Resident_Evil_Village.png?alt=media&token=d1040647-08c1-4b7b-a478-2585b5c73538"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://firebasestorage.googleapis.com/v0/b/usuarios-b78e1.appspot.com/o/the-witcher-3-wild-hunt-video-game-wide-1600x900.jpg?alt=media&token=3e52dde3-892b-4adf-b1dc-dd2d1163ba67"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://firebasestorage.googleapis.com/v0/b/usuarios-b78e1.appspot.com/o/cyberpunk-town-futuristic-1460355-wallhere.com.jpg?alt=media&token=73e9f610-1a7f-4988-9f53-ee9d3b8b7e94"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Container>
      <Container className="d-flex pt-3">
        {filtercoop.slice(4, 8).map((item) => (
          <Link to={`/GamesShow/${item.id}`} className="w-25">
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

      <Footer />
    </>
  );
}
