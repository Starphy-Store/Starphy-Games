//Documentacion
//https://react-bootstrap.github.io/layout/grid/
//https://react-bootstrap.netlify.app/components/carousel/#carousels

import React, { useEffect, useState } from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import CardStyle from "../Components/Cards/CardStyle";
import "./Home.css";
import { Link } from "react-router-dom";
import {
  collection,
  getFirestore,
  onSnapshot,
  query,
} from "firebase/firestore";
import firebase2 from "./Firebase2";

const db = getFirestore(firebase2);
function Recomendations1(props) {
  const [game, setGame] = useState([]);

  const filtros = game.filter((x) => x.esunjuego == "si");
  const slice1 = filtros.slice(0, 4);
  const slice2 = filtros.slice(4, 8);

  const filteronline = filtros.filter((x) => {
    if (x.categoria1 == "Online") return true;
    if (x.categoria2 == "Online") return true;
    if (x.categoria3 == "Online") return true;
  });
  const filtercoop = filtros.filter((x) => {
    if (x.categoria1 == "Cooperativo") return true;
    if (x.categoria2 == "Cooperativo") return true;
    if (x.categoria3 == "Cooperativo") return true;
  });

  function getGames() {
    const ref = query(collection(db, "games"));

    onSnapshot(ref, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data(), doc.id);
      });

      setGame(items);
    });
  }
  useEffect(() => {
    getGames();
  }, []);

  function dollarsign(input) {
    if (input == "Gratis") {
      return input;
    } else {
      return "$" + input;
    }
  }

  function truncate(input) {
    if (input.length > 14) return input.substring(0, 14) + "...";
    else return input;
  }
  return (
    <Carousel variant="ligth" indicators={false} className="mt-3">
      <Carousel.Item>
        <Container className="d-flex">
          {slice1.map((item) => (
            <Link to={`/GamesShow/${item.juego}`} className="w-25">
              <Container key={item.id}>
                <Row>
                  <Col md={212}>
                    <div className="profile-card-2 ">
                      <img
                        src={item.imagenportada}
                        className="img-responsive"
                      />
                      <div className="background "></div>
                      <div className="profile-name">{truncate(item.juego)}</div>
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
      </Carousel.Item>
      <Carousel.Item>
        <Container className="d-flex">
          {slice2.map((item) => (
            <Link to={`/GamesShow/${item.juego}`} className="w-25">
              <Container key={item.id}>
                <Row>
                  <Col md={212}>
                    <div className="profile-card-2 ">
                      <img
                        src={item.imagenportada}
                        className="img-responsive"
                      />
                      <div className="background "></div>
                      <div className="profile-name">{truncate(item.juego)}</div>
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
      </Carousel.Item>
    </Carousel>
  );
}

export default Recomendations1;
