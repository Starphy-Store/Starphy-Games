import React from "react";
import { Instagram, Tiktok, Envelope, Twitter } from "react-bootstrap-icons";

const Footer = () => (
  <footer
    className="page-footer font-small blue mt-5"
    style={{ color: "white", backgroundColor: "#272727" }}
  >
    <div className="container-fluid text-center text-md-left pt-3">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <h5 className="text-uppercase">Footer Content</h5>
          <p>
            Here you can use rows and columns to organize your footer content.
          </p>
          <h6 style={{ fontSize: "12px", color: "gray" }}>
            Escribenos tus preguntas, sugerencias o tus opiniones en nuestras
            redes :)
          </h6>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=starphygames@gmail.com"
            style={{ color: "white" }}
          >
            <Envelope
              style={{ width: "40px", height: "40px", paddingRight: "10px" }}
            />
          </a>
          <a
            href="https://www.instagram.com/starphygames/"
            style={{ color: "white" }}
          >
            <Instagram
              style={{ width: "40px", height: "40px", paddingRight: "10px" }}
            />
          </a>
          <a href="https://twitter.com/StarphyGames" style={{ color: "white" }}>
            <Twitter
              style={{ width: "40px", height: "40px", paddingRight: "10px" }}
            />
          </a>
          <a
            href="https://www.tiktok.com/@starphy.com"
            style={{ color: "white" }}
          >
            <Tiktok
              style={{ width: "40px", height: "40px", paddingRight: "10px" }}
            />
          </a>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Contacto</h5>
          <ul className="list-unstyled">
            <li>
              Email : <a href="#!">starphygames@gmail.com</a>
            </li>
            <li>
              Twitter : <a href="#!">@StarphyGames</a>
            </li>
            <li>
              Instagram : <a href="#!">@starphygames</a>
            </li>
            <li>
              Tik Tok : <a href="#!">Starphy.com </a>
            </li>
          </ul>
        </div>

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Soporte</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#!"></a>
            </li>
            <li>
              <a href="#!">Link 2</a>
            </li>
            <li>
              <a href="#!">Link 3</a>
            </li>
            <li>
              <a href="#!">Link 4</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="footer-copyright text-center py-3">
      © 2022 Copyright
      <a /* href="https://mdbootstrap.com/" */> Starphy</a>
    </div>
  </footer>
);

export default Footer;
