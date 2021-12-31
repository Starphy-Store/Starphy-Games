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
} from "react-bootstrap";
import logo from "../../Assets/logo_sin_fondo.png";
import "../Components.css";
import { Link } from "react-router-dom";
import { logout, useAuth } from "../../RegisterPage/AuthState";
import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  emailVerified,
} from "firebase/auth";

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

const Header = () => {
  const [cua, setcua] = useState(false);
  function a() {
    onAuthStateChanged(auth, setcua, (user) => {
      if (user.emailVerified) {
        const uid = user.uid;
      }
    });
  }

  a();

  return (
    <div className="xd">
      <Navbar expand="lg" className="header" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#" className="ayudaa">
            <img
              src={logo}
              class="navImage"
              width="150"
              height="auto"
              className="d-inline-block align-top mx-auto ml-auto"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
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

            <Container style={{justifyContent: "right"}}>
              <Row>
                <Col></Col>
                {cua ? (
                  <Col md={2}>
                    <Button
                      onClick={() => {
                        signOut(auth)
                          .then(() => {
                            // Sign-out successful.
                          })
                          .catch((error) => {
                            // An error happened.
                          });
                      }}
                      variant="outline-light"
                      style={{
                        float: "right",
                        paddingRight: "13px",
                        zIndex: "1",
                      }}
                      className="pr-3"
                    >
                      Salir
                    </Button>
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
