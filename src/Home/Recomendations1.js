//Documentacion
//https://react-bootstrap.github.io/layout/grid/
//https://react-bootstrap.netlify.app/components/carousel/#carousels

import {
  ChakraProvider,
  Skeleton,
  theme,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Badge, Stack } from "@chakra-ui/layout";
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
function Recomendations1() {
  const [games, setGames] = useState([]);

  function getGames() {
    const ref = query(collection(db, "games"));

    onSnapshot(ref, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        const { videojuego, ...rest } = doc.data();
        items.push({ data: rest, id: doc.id });
      });
      setGames(items);
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

  function truncate(input) {
    if (input.length > 14) return input.substring(0, 14) + "...";
    else return input;
  }
  return (
    <Carousel variant="ligth" indicators={false} className="mt-3">
      <Carousel.Item>
        <Container className="d-flex">
          {games.slice(0, 4).map(({ data, id }) => (
            <Link to={`/GamesShow/${id}`} className="w-25">
              <Container key={id}>
                <Row>
                  <Col md={212}>
                    <div className="profile-card-2 ">
                      <img
                        src={data.imagenportada}
                        className="img-responsive"
                      />
                      <div className="background "></div>
                      <div className="profile-name">{truncate(data.juego)}</div>
                      <div className="profile-username">
                        <Badge
                          colorScheme="green"
                          variant="solid"
                          fontSize="md"
                          style={{ marginRight: "20px" }}
                        >
                          New
                        </Badge>

                        {data.creator}
                      </div>
                      <div className="profile-icons">
                        <h5>{dollarsign(data.precio)}</h5>
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
          {games.slice(4, 8).map(({ data, id }) => (
            <Link to={`/GamesShow/${id}`} className="w-25">
              <Container key={id}>
                <Row>
                  <Col md={212}>
                    <div className="profile-card-2 ">
                      <img
                        src={data.imagenportada}
                        className="img-responsive"
                      />
                      <div className="background "></div>
                      <div className="profile-name">{truncate(data.juego)}</div>

                      <div className="profile-username">
                        <Badge
                          colorScheme="green"
                          variant="solid"
                          fontSize="md"
                          style={{ marginRight: "20px" }}
                        >
                          New
                        </Badge>

                        {data.creator}
                      </div>
                      <div className="profile-icons">
                        <h5>{dollarsign(data.precio)}</h5>
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
