//Documentacion!
//https://react-bootstrap.netlify.app/components/navbar/#navbars

import React from "react";
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

function Header() {
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
            <Container>
              <Row>
                <Col></Col>
                <Col md={1}>
                  <Link to="/LoginUser">
                    <Button
                      variant="outline-light"
                      style={{
                        float: "right",
                        paddingRight: "20px",
                      }}
                      className="pr-3"
                    >
                      Login
                    </Button>
                  </Link>
                </Col>
                <Col md={1}>
                  <Link to="/register">
                    <Button
                      variant="outline-light"
                      style={{
                        float: "right",
                      }}
                    >
                      Register
                    </Button>
                  </Link>
                </Col>
              </Row>
            </Container>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
