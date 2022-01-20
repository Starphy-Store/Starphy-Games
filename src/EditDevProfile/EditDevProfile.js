import React from "react";
import Header from "../Components/Nav/Header";
import { Form, Container, Col, Button } from "react-bootstrap";

export default function EditDevProfile() {
  return (
    <>
      <Header />
      <Container className="justify-content-left">
        <h1 className="pb-5">Edita tu perfil de desarrollador</h1>
      </Container>
      <div
        style={{
          backgroundColor: "white",
          height: "100%",
        }}
      >
        <Container className="pt-5">
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Editar nombre</Form.Label>
                <Form.Control type="text" placeholder="nombredeusuario" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Editar correo</Form.Label>
                <Form.Control type="email" placeholder="email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Editar contraseña</Form.Label>
                <Form.Control type="email" placeholder="Contrasenia" />
              </Form.Group>
              <Form.Text className="text-muted">
                Nunca compartiremos tus credenciales con nadie .
              </Form.Text>
              <p />
              <Button variant="primary" type="submit" className="mb-5">
                Guardar
              </Button>
            </Form>
          </Col>
          <Col md={8}></Col>
        </Container>
      </div>
    </>
  );
}
