import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./login.css";
import { eyeIcon, facebook, google } from "./assets/index";

function Login() {
  return (
    <div className="main-container">
      <div className="main">
        <h1>Bienvenido a Starphy</h1>
        <Form className="form-container">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="ms-3 mt-5" style={{ color: "#E5E5E5" }}>
              Email
            </Form.Label>
            <Form.Control
              className="p-3"
              type="email"
              placeholder="Ingresa tu Email"
              style={{ backgroundColor: "#C4C4C4" }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <div className="form-label">
              <Form.Label className="ms-3 mb-0" style={{ color: "#E5E5E5" }}>
                Contraseña
              </Form.Label>
              <Link to="/" className="me-2" style={{ color: "#868484" }}>
                ¿Haz olvidado tu contraseña?
              </Link>
            </div>
            <div style={{ position: "relative" }}>
              <img src={eyeIcon} alt="eyeIcon" className="eye-icon" />
              <Form.Control
                className="p-3"
                type="email"
                placeholder="Ingresa tu Email"
                style={{ backgroundColor: "#C4C4C4" }}
              />
            </div>
          </Form.Group>
          <div className="d-grid my-5 ">
            <Button
              style={{ backgroundColor: "#69c0a1" }}
              type="submit"
              size="lg"
            >
              Iniciar sesion
            </Button>
          </div>
        </Form>
        <p className="text-center" style={{ color: "#C4C4C4" }}>
          O inicia sesion con
        </p>
        <div className="buttons-content">
          <Button className="buttons">
            <img className="me-2" src={facebook} alt="facebook-icon" />
            Google
          </Button>
          <Button className="buttons">
            <img className="me-2" src={google} alt="google-icon" />
            Facebook
          </Button>
        </div>
        <p className="text-center mt-5 text-light">
          ¿Todavia no tienes una cuenta?{" "}
          <Link
            style={{
              fontWeight: "999",
              color: "white",
              textDecoration: "none",
            }}
            to="/crearcuenta"
          >
            {" "}
            Crea una ahora
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
