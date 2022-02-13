import React, { useState, useEffect } from "react";
import { Container, Col, Row, Carousel } from "react-bootstrap";
import {
  query,
  collection,
  onSnapshot,
  getFirestore,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";
import { ArrowBarRight } from "react-bootstrap-icons";
import firebase2 from "../Home/Firebase2.js";
import { Link } from "react-router-dom";
//importacion del headee

import Footer from "../Footer/Footer";
import Header from "../Components/Nav/Header";
import CardStyle from "../Components/Cards/CardStyle";
import "./Home.css";

//importacion de las Cards
import SliderDelHome from "../Components/SliderDelHome";

//Slider de recomendaciones
import Recomendations1 from "./Recomendations1";

//Slider juegos compatibles y descargables
const db = getFirestore(firebase2);

const Home = () => {
  const [game, setGame] = useState([]);
  const [category, setCategory] = useState("");

  const filtros = game.filter((x) => x.esunjuego == "si");

  const categorias = filtros.map(
    (x) => x.categoria1 + x.categoria2 + x.categoria3
  );

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
  const filterArcade = filtros.filter((x) => {
    if (x.categoria1 == "Arcade") return true;
    if (x.categoria2 == "Arcade") return true;
    if (x.categoria3 == "Arcade") return true;
  });
  const filterSupervivencia = filtros.filter((x) => {
    if (x.categoria1 == "Supervivencia") return true;
    if (x.categoria2 == "Supervivencia") return true;
    if (x.categoria3 == "Supervivencia") return true;
  });
  const filterSimulacion = filtros.filter((x) => {
    if (x.categoria1 == "Simulacion") return true;
    if (x.categoria2 == "Simulacion") return true;
    if (x.categoria3 == "Simulacion") return true;
  });
  const filterBattleRoyale = filtros.filter((x) => {
    if (x.categoria1 == "Battle Royale") return true;
    if (x.categoria2 == "Battle Royale") return true;
    if (x.categoria3 == "Battle Royale") return true;
  });
  const filterAcción = filtros.filter((x) => {
    if (x.categoria1 == "Acción") return true;
    if (x.categoria2 == "Acción") return true;
    if (x.categoria3 == "Acción") return true;
  });
  const filterRPG = filtros.filter((x) => {
    if (x.categoria1 == "RPG") return true;
    if (x.categoria2 == "RPG") return true;
    if (x.categoria3 == "RPG") return true;
  });
  const filterCarreras = filtros.filter((x) => {
    if (x.categoria1 == "Carreras") return true;
    if (x.categoria2 == "Carreras") return true;
    if (x.categoria3 == "Carreras") return true;
  });
  const filterFPS = filtros.filter((x) => {
    if (x.categoria1 == "FPS") return true;
    if (x.categoria2 == "FPS") return true;
    if (x.categoria3 == "FPS") return true;
  });
  const filterPuzle = filtros.filter((x) => {
    if (x.categoria1 == "Puzle") return true;
    if (x.categoria2 == "Puzle") return true;
    if (x.categoria3 == "Puzle") return true;
  });
  const filterLucha = filtros.filter((x) => {
    if (x.categoria1 == "Lucha") return true;
    if (x.categoria2 == "Lucha") return true;
    if (x.categoria3 == "Lucha") return true;
  });
  const filterMMORPG = filtros.filter((x) => {
    if (x.categoria1 == "MMORPG") return true;
    if (x.categoria2 == "MMORPG") return true;
    if (x.categoria3 == "MMORPG") return true;
  });
  const filterMOBA = filtros.filter((x) => {
    if (x.categoria1 == "MOBA") return true;
    if (x.categoria2 == "MOBA") return true;
    if (x.categoria3 == "MOBA") return true;
  });
  const filterAgilidadMental = filtros.filter((x) => {
    if (x.categoria1 == "Agilidad Mental") return true;
    if (x.categoria2 == "Agilidad Mental") return true;
    if (x.categoria3 == "Agilidad Mental") return true;
  });
  const filterShooter = filtros.filter((x) => {
    if (x.categoria1 == "Shooter") return true;
    if (x.categoria2 == "Shooter") return true;
    if (x.categoria3 == "Shooter") return true;
  });
  const filterTerror = filtros.filter((x) => {
    if (x.categoria1 == "Terror") return true;
    if (x.categoria2 == "Terror") return true;
    if (x.categoria3 == "Terror") return true;
  });
  const filterMundoAbierto = filtros.filter((x) => {
    if (x.categoria1 == "Mundo Abierto") return true;
    if (x.categoria2 == "Mundo Abierto") return true;
    if (x.categoria3 == "Mundo Abierto") return true;
  });
  const filterMinijuegos = filtros.filter((x) => {
    if (x.categoria1 == "Minijuegos") return true;
    if (x.categoria2 == "Minijuegos") return true;
    if (x.categoria3 == "Minijuegos") return true;
  });
  const filterSigilo = filtros.filter((x) => {
    if (x.categoria1 == "Sigilo") return true;
    if (x.categoria2 == "Sigilo") return true;
    if (x.categoria3 == "Sigilo") return true;
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
    if (input == 0) {
      return "Gratis";
    } else {
      return "$" + input;
    }
  }

  return (
    <div>
      <Header />

      <Container style={{ paddingTop: "90px" }}>
        <SliderDelHome />
      </Container>
      <h1 style={{ color: "white" }}>Los mejores juegos para ti 🔥</h1>
      <Recomendations1 />
      <h1>Juegos multijugador 🤼‍♂️</h1>
      <Container
        style={{ color: "white", justifyContent: "center", align: "center" }}
      >
        <a
          href={`/CategorySection/${"Online"}`}
          style={{ paddingLeft: "42.5%", align: "center", color: "white" }}
        >
          Ver mas de esta categoria
          <ArrowBarRight></ArrowBarRight>
        </a>
      </Container>
      <Container className="d-flex">
        {filteronline.map((item, index) => (
          <Link to={`/GamesShow/${item.juego}`} className="w-25">
            <Container key={index}>
              <Row>
                <Col md={212}>
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

      <h1>Juegos Cooperativo 🐱‍🐉</h1>

      <Container
        style={{ color: "white", justifyContent: "center", align: "center" }}
      >
        <a
          href={`/CategorySection/${"Cooperativo"}`}
          style={{ paddingLeft: "42.5%", align: "center", color: "white" }}
        >
          Ver mas de esta categoria
          <ArrowBarRight></ArrowBarRight>
        </a>
      </Container>
      <Container className="d-flex">
        {filtercoop.map((item, index) => (
          <Link to={`/GamesShow/${item.juego}`} className="w-25">
            <Container key={index}>
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

      <h1>Juegos Arcade 🎮</h1>
      <Container
        style={{ color: "white", justifyContent: "center", align: "center" }}
      >
        <a
          href={`/CategorySection/${"Arcade"}`}
          style={{ paddingLeft: "42.5%", align: "center", color: "white" }}
        >
          Ver mas de esta categoria
          <ArrowBarRight></ArrowBarRight>
        </a>
      </Container>
      <Container className="d-flex">
        {filterArcade.map((item, index) => (
          <Link to={`/GamesShow/${item.juego}`} className="w-25">
            <Container key={index}>
              <Row>
                <Col md={212}>
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

      <h1>Juegos Supervivencia 🏃‍♀️</h1>
      <Container
        style={{ color: "white", justifyContent: "center", align: "center" }}
      >
        <a
          href={`/CategorySection/${"Supervivencia"}`}
          style={{ paddingLeft: "42.5%", align: "center", color: "white" }}
        >
          Ver mas de esta categoria
          <ArrowBarRight></ArrowBarRight>
        </a>
      </Container>
      <Container className="d-flex">
        {filterSupervivencia.map((item, index) => (
          <Link to={`/GamesShow/${item.juego}`} className="w-25">
            <Container key={index}>
              <Row>
                <Col md={212}>
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

      <h1>Juegos Simulacion 🛸</h1>
      <Container
        style={{ color: "white", justifyContent: "center", align: "center" }}
      >
        <a
          href={`/CategorySection/${"Simulacion"}`}
          style={{ paddingLeft: "42.5%", align: "center", color: "white" }}
        >
          Ver mas de esta categoria
          <ArrowBarRight></ArrowBarRight>
        </a>
      </Container>
      <Container className="d-flex">
        {filterSimulacion.map((item, index) => (
          <Link to={`/GamesShow/${item.juego}`} className="w-25">
            <Container key={index}>
              <Row>
                <Col md={212}>
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

      <h1>Juegos Battle Royale 🪓</h1>
      <Container
        style={{ color: "white", justifyContent: "center", align: "center" }}
      >
        <a
          href={`/CategorySection/${"Battle Royale"}`}
          style={{ paddingLeft: "42.5%", align: "center", color: "white" }}
        >
          Ver mas de esta categoria
          <ArrowBarRight></ArrowBarRight>
        </a>
      </Container>
      <Container className="d-flex">
        {filterBattleRoyale.map((item, index) => (
          <Link to={`/GamesShow/${item.juego}`} className="w-25">
            <Container key={index}>
              <Row>
                <Col md={212}>
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

      <h1>Juegos Acción 👓</h1>
      <Container
        style={{ color: "white", justifyContent: "center", align: "center" }}
      >
        <a
          href={`/CategorySection/${"Acción"}`}
          style={{ paddingLeft: "42.5%", align: "center", color: "white" }}
        >
          Ver mas de esta categoria
          <ArrowBarRight></ArrowBarRight>
        </a>
      </Container>
      <Container className="d-flex">
        {filterAcción.map((item, index) => (
          <Link to={`/GamesShow/${item.juego}`} className="w-25">
            <Container key={index}>
              <Row>
                <Col md={212}>
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

      <h1>Juegos RPG 🤪</h1>
      <Container
        style={{ color: "white", justifyContent: "center", align: "center" }}
      >
        <a
          href={`/CategorySection/${"RPG"}`}
          style={{ paddingLeft: "42.5%", align: "center", color: "white" }}
        >
          Ver mas de esta categoria
          <ArrowBarRight></ArrowBarRight>
        </a>
      </Container>
      <Container className="d-flex">
        {filterRPG.map((item, index) => (
          <Link to={`/GamesShow/${item.juego}`} className="w-25">
            <Container key={index}>
              <Row>
                <Col md={212}>
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

      <h1>Juegos Carreras 🚦</h1>
      <Container
        style={{ color: "white", justifyContent: "center", align: "center" }}
      >
        <a
          href={`/CategorySection/${"Carreras"}`}
          style={{ paddingLeft: "42.5%", align: "center", color: "white" }}
        >
          Ver mas de esta categoria
          <ArrowBarRight></ArrowBarRight>
        </a>
      </Container>
      <Container className="d-flex">
        {filterCarreras.map((item, index) => (
          <Link to={`/GamesShow/${item.juego}`} className="w-25">
            <Container key={index}>
              <Row>
                <Col md={212}>
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

      <h1>Juegos FPS 🌄</h1>
      <Container
        style={{ color: "white", justifyContent: "center", align: "center" }}
      >
        <a
          href={`/CategorySection/${"FPS"}`}
          style={{ paddingLeft: "42.5%", align: "center", color: "white" }}
        >
          Ver mas de esta categoria
          <ArrowBarRight></ArrowBarRight>
        </a>
      </Container>
      <Container className="d-flex">
        {filterFPS.map((item, index) => (
          <Link to={`/GamesShow/${item.juego}`} className="w-25">
            <Container key={index}>
              <Row>
                <Col md={212}>
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

      <h1>Juegos Puzle 🧩</h1>
      <Container
        style={{ color: "white", justifyContent: "center", align: "center" }}
      >
        <a
          href={`/CategorySection/${"Puzle"}`}
          style={{ paddingLeft: "42.5%", align: "center", color: "white" }}
        >
          Ver mas de esta categoria
          <ArrowBarRight></ArrowBarRight>
        </a>
      </Container>
      <Container className="d-flex">
        {filterPuzle.map((item, index) => (
          <Link to={`/GamesShow/${item.juego}`} className="w-25">
            <Container key={index}>
              <Row>
                <Col md={212}>
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

      <h1>Juegos Lucha 👊</h1>
      <Container
        style={{ color: "white", justifyContent: "center", align: "center" }}
      >
        <a
          href={`/CategorySection/${"Lucha"}`}
          style={{ paddingLeft: "42.5%", align: "center", color: "white" }}
        >
          Ver mas de esta categoria
          <ArrowBarRight></ArrowBarRight>
        </a>
      </Container>
      <Container className="d-flex">
        {filterLucha.map((item, index) => (
          <Link to={`/GamesShow/${item.juego}`} className="w-25">
            <Container key={index}>
              <Row>
                <Col md={212}>
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

      <h1>Juegos MMORPG 👩‍💻</h1>
      <Container
        style={{ color: "white", justifyContent: "center", align: "center" }}
      >
        <a
          href={`/CategorySection/${"MMORPG"}`}
          style={{ paddingLeft: "42.5%", align: "center", color: "white" }}
        >
          Ver mas de esta categoria
          <ArrowBarRight></ArrowBarRight>
        </a>
      </Container>
      <Container className="d-flex">
        {filterMMORPG.map((item, index) => (
          <Link to={`/GamesShow/${item.juego}`} className="w-25">
            <Container key={index}>
              <Row>
                <Col md={212}>
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

      <h1>Juegos MOBA 💻</h1>
      <Container
        style={{ color: "white", justifyContent: "center", align: "center" }}
      >
        <a
          href={`/CategorySection/${"MOBA"}`}
          style={{ paddingLeft: "42.5%", align: "center", color: "white" }}
        >
          Ver mas de esta categoria
          <ArrowBarRight></ArrowBarRight>
        </a>
      </Container>
      <Container className="d-flex">
        {filterMOBA.map((item, index) => (
          <Link to={`/GamesShow/${item.juego}`} className="w-25">
            <Container key={index}>
              <Row>
                <Col md={212}>
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

      <h1>Juegos Agilidad Mental 🧠</h1>
      <Container
        style={{ color: "white", justifyContent: "center", align: "center" }}
      >
        <a
          href={`/CategorySection/${"Agilidad Mental"}`}
          style={{ paddingLeft: "42.5%", align: "center", color: "white" }}
        >
          Ver mas de esta categoria
          <ArrowBarRight></ArrowBarRight>
        </a>
      </Container>
      <Container className="d-flex">
        {filterAgilidadMental.map((item, index) => (
          <Link to={`/GamesShow/${item.juego}`} className="w-25">
            <Container key={index}>
              <Row>
                <Col md={212}>
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

      <h1>Juegos Shooter 🎯</h1>
      <Container
        style={{ color: "white", justifyContent: "center", align: "center" }}
      >
        <a
          href={`/CategorySection/${"Shooter"}`}
          style={{ paddingLeft: "42.5%", align: "center", color: "white" }}
        >
          Ver mas de esta categoria
          <ArrowBarRight></ArrowBarRight>
        </a>
      </Container>
      <Container className="d-flex">
        {filterShooter.map((item, index) => (
          <Link to={`/GamesShow/${item.juego}`} className="w-25">
            <Container key={index}>
              <Row>
                <Col md={212}>
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

      <h1>Juegos Terror 👻</h1>
      <Container
        style={{ color: "white", justifyContent: "center", align: "center" }}
      >
        <a
          href={`/CategorySection/${"Terror"}`}
          style={{ paddingLeft: "42.5%", align: "center", color: "white" }}
        >
          Ver mas de esta categoria
          <ArrowBarRight></ArrowBarRight>
        </a>
      </Container>
      <Container className="d-flex">
        {filterTerror.map((item, index) => (
          <Link to={`/GamesShow/${item.juego}`} className="w-25">
            <Container key={index}>
              <Row>
                <Col md={212}>
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

      <h1>Juegos Mundo Abierto 🌏</h1>
      <Container
        style={{ color: "white", justifyContent: "center", align: "center" }}
      >
        <a
          href={`/CategorySection/${"Mundo Abierto"}`}
          style={{ paddingLeft: "42.5%", align: "center", color: "white" }}
        >
          Ver mas de esta categoria
          <ArrowBarRight></ArrowBarRight>
        </a>
      </Container>
      <Container className="d-flex">
        {filterMundoAbierto.map((item, index) => (
          <Link to={`/GamesShow/${item.juego}`} className="w-25">
            <Container key={index}>
              <Row>
                <Col md={212}>
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

      <h1>Juegos Minijuegos 🎱</h1>
      <Container
        style={{ color: "white", justifyContent: "center", align: "center" }}
      >
        <a
          href={`/CategorySection/${"Minijuegos"}`}
          style={{ paddingLeft: "42.5%", align: "center", color: "white" }}
        >
          Ver mas de esta categoria
          <ArrowBarRight></ArrowBarRight>
        </a>
      </Container>
      <Container className="d-flex">
        {filterMinijuegos.map((item, index) => (
          <Link to={`/GamesShow/${item.juego}`} className="w-25">
            <Container key={index}>
              <Row>
                <Col md={212}>
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

      <h1>Juegos Sigilo 🐱‍👤</h1>
      <Container
        style={{ color: "white", justifyContent: "center", align: "center" }}
      >
        <a
          href={`/CategorySection/${"Sigilo"}`}
          style={{ paddingLeft: "42.5%", align: "center", color: "white" }}
        >
          Ver mas de esta categoria
          <ArrowBarRight></ArrowBarRight>
        </a>
      </Container>
      <Container className="d-flex">
        {filterSigilo.map((item, index) => (
          <Link to={`/GamesShow/${item.juego}`} className="w-25">
            <Container key={index}>
              <Row>
                <Col md={212}>
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

      <Footer></Footer>
    </div>
  );
};

export default Home;
