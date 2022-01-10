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
} from "firebase/firestore";
import firebase2 from "../../Home/Firebase2";

const firebaseConfig = {
  apiKey: "AIzaSyB0aytR2kq9oV6_9DdeTLs2nGlQTzOxDAE",
  authDomain: "usuarios-b78e1.firebaseapp.com",
  projectId: "usuarios-b78e1",
  storageBucket: "usuarios-b78e1.appspot.com",
  messagingSenderId: "779291947290",
  appId: "1:779291947290:web:9bed27d795c7d614183ca3",
  measurementId: "${config.measurementId}",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(firebase2);
const user = auth.currentUser;

console.log(user);
const Header = () => {
  const [cua, setcua] = useState(false);
  const [users, setusers] = useState([]);
  const navigate = useNavigate();

  function a() {
    const ref = query(collection(db, "users"));

    onSnapshot(ref, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });

      setusers(items);
    });

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const item = [];
        const uids = user.uid;
        item.push(uids);
        setcua(item);
      } /* hola buenas ya revivi */
    });
  }
  console.log(cua);

  const filtrado = users.filter((x) => x.id == cua);

  useEffect(() => {
    a();
  }, []);
  /* Hacer cuando estes iniciado sesion se ponga tu nombre de perfil en el home */
  return (
    <div className="xd">
      <Navbar expand="lg" className="header" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#" className="ayudaa">
            <Link to="/Home">
              <img
                src={logo}
                className="navImage"
                width="150"
                height="auto"
                className="d-inline-block align-top mx-auto ml-auto"
                alt="React Bootstrap logo"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 md:w-full"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/library">Biblioteca</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Container style={{ justifyContent: "right" }}>
              <Row>
                <Col></Col>
                {cua ? (
                  <Col md={12} style={{ width: "200px" }}>
                    {filtrado.map((item) => (
                      <DropdownButton
                        onSubmit={a}
                        align="start"
                        type="button"
                        title={item.name}
                        key={item.id}
                        id="dropdown-menu-align-start"
                        variant="outline-light"
                      >
                        <Dropdown.Item eventKey="1">
                          <Link to="/Library">Tu biblioteca</Link>
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="2">aaa</Dropdown.Item>
                        <Dropdown.Item eventKey="3">
                          Actualizaciones
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item
                          eventKey="4"
                          onClick={() => {
                            signOut(auth)
                              .then(() => {
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
                    ))}
                  </Col>
                ) : (
                  <>
                    <Col sm={6} md={1}>
                      <Link to="/register">
                        <Button
                          variant="outline-light"
                          style={{
                            float: "right",
                          }}
                        >
                          Registarse
                        </Button>
                      </Link>
                    </Col>
                    <Col sm={6} md={7}>
                      <Link to="/LoginUser">
                        <Button
                          variant="outline-light"
                          style={{
                            float: "right",
                            paddingRight: "11px",
                            width: "100%",
                            textAlign: "center",
                          }}
                          className="pr-3"
                        >
                          Inicia Sesion
                        </Button>
                      </Link>
                    </Col>
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
