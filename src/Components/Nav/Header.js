//Documentacion!
//https://react-bootstrap.netlify.app/components/navbar/#navbars

import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Row,
  Col,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import logo from "../../Assets/logo_sin_fondo.png";
import "../Components.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import { logout, useAuth } from "../../RegisterPage/AuthState";
import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import {
  collection,
  doc,
  getFirestore,
  query,
  onSnapshot,
  getDoc,
} from "firebase/firestore";
import firebase2 from "../../Home/Firebase2";
import { event } from "jquery";
import investigacion from "../../Assets/investigacion.png";
import { Search, PeopleCircle } from "react-bootstrap-icons";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID,
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(firebase2);
const user = auth.currentUser;

const Header = () => {
  const [cua, setcua] = useState("");
  const [users, setusers] = useState({});
  const [juegos, setjuegos] = useState([]);
  const [search, setsearch] = useState("");
  const [result, setresult] = useState("");
  const [sugerencias, setSugerencias] = useState([]);

  const navigate = useNavigate();

  async function a() {
    onAuthStateChanged(auth, (user) => {
      if (user == null) {
      } else {
        setcua(user.uid);
      }
    });
    const ref = await doc(db, "users", cua);

    onSnapshot(ref, (querySnapshot) => {
      getDoc(ref, cua).then((data) => {
        const { FechaDeModificacion, email, photoProfile, pass, ...rest } =
          data.data();

        setusers({ ...rest });
      });
    });
  }

  async function getGames() {
    const ref = query(collection(db, "games"));

    onSnapshot(ref, (querySnapshot) => {
      const AllGames = querySnapshot.docs.map((doc) => {
        const {
          categoria1,
          categoria2,
          categoria3,
          creator,
          descrip,
          imagenjuego,
          imagenjuego2,
          precio,
          correopay,
          almacenamiento,
          esunjuego,
          imagenportada,
          videojuego,
          idprofile,

          ...rest
        } = doc.data();
        return { ...rest, id: doc.id };
      });
      setjuegos(AllGames);
    });
  }

  //barra de busqueda
  const SearchGames = (e) => {
    e.preventDefault();

    setsearch(e.target.value);

    filterData(e.target.value);
  };

  const filterData = (search) => {
    var resultadosBusqueda = juegos.filter((x) => {
      if (x.juego.toString().toLowerCase().includes(search.toLowerCase())) {
        return x.juego.charAt(0).toUpperCase() + x.juego.slice();
      }
    });

    var ResultadoParaUpperCase = juegos.filter((x) => {
      if (x.juego.toString().toLowerCase().includes(search.toLowerCase())) {
        return x;
      }
    });

    const UpperCaseJuegos = ResultadoParaUpperCase.map(
      (Nombre) => Nombre.juego.charAt(0).toUpperCase() + Nombre.juego.slice(1)
    );

    console.log(UpperCaseJuegos);
    if (search === "") {
      setresult([]);
    } else {
      setSugerencias(UpperCaseJuegos);
      setresult(ResultadoParaUpperCase);
    }
  };
  console.log(result);
  useEffect(() => {
    a();
    getGames();
  }, [cua]);

  return (
    <div className="xd" style={{ paddingBottom: "100px" }}>
      <Navbar expand="lg" className="header" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#" className="ayudaa">
            <Link to="/Home">
              <img
                src={logo}
                width="135"
                height="auto"
                className="d-inline-block align-top mx-auto ml-auto"
                alt="React Bootstrap logo"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            {/* Barra de busqueda */}

            {search == "" ? (
              <Nav
                className="me-auto my-2 my-lg-0 md:w-full"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Form
                  onSubmit={SearchGames}
                  className="d-flex"
                  style={{ width: "500px" }}
                >
                  <FormControl
                    type="search"
                    placeholder="Que tienes ganas de jugar hoy?"
                    className="me-2"
                    aria-label="Search"
                    onChange={SearchGames}
                  />
                  <Link to="/Home">
                    <Button type="submit" variant="outline-light">
                      <Search />
                    </Button>
                  </Link>
                </Form>
              </Nav>
            ) : (
              <Nav
                className="me-auto my-2 my-lg-0 md:w-full"
                style={{ maxHeight: "38px" }}
                navbarScroll
              >
                <Form
                  onSubmit={SearchGames}
                  className="d-flex"
                  style={{ width: "756px" }}
                >
                  <FormControl
                    type="search"
                    placeholder="Que tienes ganas de jugar hoy?"
                    className="me-2"
                    aria-label="Search"
                    onChange={SearchGames}
                  />

                  <Link to={`/SearchPage/${search}`}>
                    <Button variant="outline-light" type="submit">
                      <Search />
                    </Button>
                  </Link>
                </Form>
              </Nav>
            )}
            <Container>
              {sugerencias == "" ? (
                <Dropdown className="me-2" variant="outline-light">
                  No hay resultado de : {search}
                </Dropdown>
              ) : (
                sugerencias.map((item, i) => (
                  <Dropdown key={i} className="mpg" variant="outline-light">
                    {item}
                    <Link to={`/GamesShow/${item}`}></Link>
                  </Dropdown>
                ))
              )}
            </Container>
            <Container style={{ justifyContent: "right" }}>
              <Row>
                {cua ? (
                  <>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col>
                      <>
                        <DropdownButton
                          onSubmit={a}
                          align="start"
                          type="button"
                          title={users.name}
                          key={users.uid}
                          id="dropdown-menu-align-start"
                          variant="outline-light"
                          style={{
                            border: "0",
                            color: "white",
                          }}
                        >
                          <>
                            <Dropdown.Item eventKey="1">
                              <Link
                                to={`/DevProfile/${users.uid}`}
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                }}
                              >
                                Tu perfil
                              </Link>
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="3">
                              <Link
                                to="/uploadgame"
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                }}
                              >
                                Sube tu juego
                              </Link>
                            </Dropdown.Item>
                          </>

                          <Dropdown.Item eventKey="3">
                            <Link to="/EditProfile">Tu perfil</Link>
                          </Dropdown.Item>
                          <Dropdown.Item eventKey="2">
                            <Link
                              to="/library"
                              style={{
                                textDecoration: "none",
                                color: "black",
                              }}
                            >
                              Libreria de juegos
                            </Link>
                          </Dropdown.Item>
                          <Dropdown.Divider />
                          <Dropdown.Item
                            eventKey="4"
                            onClick={() => {
                              signOut(auth)
                                .then(() => {
                                  navigate("/Home");
                                  window.location.reload(false);
                                  // Sign-out successful.
                                })
                                .catch((error) => {
                                  // An error happened.
                                });
                            }}
                          >
                            Salir
                          </Dropdown.Item>
                        </DropdownButton>
                      </>
                    </Col>
                  </>
                ) : (
                  <>
                    <Row>
                      <Col sm={1} lg={2}></Col>
                      <Col>
                        <Link to="/devregister" style={{ width: "180px" }}>
                          <Button
                            variant="outline-light"
                            color="light"
                            style={{ border: "0", color: "grey" }}
                          >
                            Publica tu juego
                          </Button>
                        </Link>
                      </Col>
                      <Col sm={1} lg={1}></Col>
                      <Col lg={2}>
                        <Link to="/register">
                          <Button
                            variant="outline-light"
                            style={{
                              border: "0",
                              float: "right",
                            }}
                          >
                            Registarse
                          </Button>
                        </Link>
                      </Col>
                      <Col lg={3}>
                        <Link to="/LoginUser">
                          <Button
                            variant="outline-light"
                            style={{
                              float: "right",
                              width: "100%",
                              textAlign: "center",
                              border: "0",
                            }}
                            className=""
                          >
                            Inicia Sesion
                          </Button>
                        </Link>
                      </Col>
                    </Row>
                  </>
                )}
              </Row>
            </Container>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
