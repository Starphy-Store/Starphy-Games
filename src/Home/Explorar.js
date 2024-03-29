import { Heading } from "@chakra-ui/react";
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

function Explorar() {
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

  const shuffledArray = games.sort(() => Math.random() - 0.5);

  console.log(shuffledArray);
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
    <>
      <Heading fontSize="4xl" textAlign="center" marginTop="100px">
        Explorar 🤿
      </Heading>
      <Container
        variant="ligth"
        indicators={false}
        className="mt-3"
        style={{ zIndex: "2" }}
      >
        <Container className="d-flex" style={{ zIndex: "2" }} fluid>
          {shuffledArray.slice(0, 4).map(({ data, id }) => (
            <Link to={`/GamesShow/${id}`} className="w-25">
              <Container key={id} style={{ zIndex: "2" }}>
                <Row>
                  <Col md={212}>
                    <div className="profile-card-2 ">
                      <img
                        src={data.imagenportada}
                        className="img-responsive"
                      />
                      <div className="background">
                        {" "}
                        <Badge
                          colorScheme="green"
                          variant="solid"
                          fontSize="lg"
                          style={{ margin: "15px" }}
                        >
                          New
                        </Badge>
                      </div>
                      <div className="profile-name">{truncate(data.juego)}</div>
                      <div className="profile-username">{data.creator}</div>
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

        <Container className="d-flex" fluid>
          {shuffledArray.slice(4, 8).map(({ data, id }) => (
            <Link to={`/GamesShow/${id}`} className="w-25">
              <Container key={id}>
                <Row>
                  <Col md={212}>
                    <div className="profile-card-2 ">
                      <img
                        src={data.imagenportada}
                        className="img-responsive"
                      />
                      <div className="background ">
                        {" "}
                        <Badge
                          colorScheme="green"
                          variant="solid"
                          fontSize="lg"
                          style={{ margin: "15px" }}
                        >
                          New
                        </Badge>
                      </div>
                      <div className="profile-name">{truncate(data.juego)}</div>
                      <div className="profile-username">{data.creator}</div>
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
        <Container className="d-flex" fluid>
          {shuffledArray.slice(8, 12).map(({ data, id }) => (
            <Link to={`/GamesShow/${id}`} className="w-25">
              <Container key={id}>
                <Row>
                  <Col md={212}>
                    <div className="profile-card-2 ">
                      <img
                        src={data.imagenportada}
                        className="img-responsive"
                      />
                      <div className="background">
                        {" "}
                        <Badge
                          colorScheme="green"
                          variant="solid"
                          fontSize="lg"
                          style={{ margin: "15px" }}
                        >
                          New
                        </Badge>
                      </div>
                      <div className="profile-name">{truncate(data.juego)}</div>
                      <div className="profile-username">{data.creator}</div>
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
        <Container className="d-flex" fluid>
          {shuffledArray.slice(12, 16).map(({ data, id }) => (
            <Link to={`/GamesShow/${id}`} className="w-25">
              <Container key={id}>
                <Row>
                  <Col md={212}>
                    <div className="profile-card-2 ">
                      <img
                        src={data.imagenportada}
                        className="img-responsive"
                      />
                      <div className="background">
                        {" "}
                        <Badge
                          colorScheme="green"
                          variant="solid"
                          fontSize="lg"
                          style={{ margin: "15px" }}
                        >
                          New
                        </Badge>
                      </div>
                      <div className="profile-name">{truncate(data.juego)}</div>
                      <div className="profile-username">{data.creator}</div>
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
        <Container className="d-flex" fluid>
          {shuffledArray.slice(16, 20).map(({ data, id }) => (
            <Link to={`/GamesShow/${id}`} className="w-25">
              <Container key={id} style={{ zIndex: "2" }}>
                <Row>
                  <Col md={212}>
                    <div className="profile-card-2 ">
                      <img
                        src={data.imagenportada}
                        className="img-responsive"
                      />
                      <div className="background">
                        {" "}
                        <Badge
                          colorScheme="green"
                          variant="solid"
                          fontSize="lg"
                          style={{ margin: "15px" }}
                        >
                          New
                        </Badge>
                      </div>
                      <div className="profile-name">{truncate(data.juego)}</div>
                      <div className="profile-username">{data.creator}</div>
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
      </Container>
    </>
  );
}

export default Explorar;
