import React from "react";
import { Instagram, Tiktok, Envelope, Twitter } from "react-bootstrap-icons";
import "./Footer.css";

const Footer = () => (
  <>
    <footer
      className="page-footer font-small blue mt-5"
      style={{ color: "white", backgroundColor: "#212121" }}
    >
      <div className="gradiente"></div>
      <div className="container-fluid text-center text-md-left pt-3">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5 className="text-uppercase">No puedes escoger un videojuego?</h5>
            <a>Haz click aqui para ir a un juego aleatorio</a>
            <h6 style={{ fontSize: "12px", color: "gray", paddingTop: "30px" }}>
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
            <a
              href="https://twitter.com/StarphyGames"
              style={{ color: "white" }}
            >
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

          <div className="col-md-3 mb-md-0 mb-3" style={{ color: "white" }}>
            <h5>Informacion</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Sobre nosotros</a>
              </li>
              <li>
                <a href="#!">@StarphyGames</a>
              </li>
              <li>
                <a href="#!">@starphygames</a>
              </li>
              <li>
                <a href="#!">Terminos y condiciones</a>
              </li>
            </ul>
          </div>
          <div className="col mt-md-0 mt-3">
            <img
              src="https://www.minecraft.net/content/dam/games/minecraft/game-characters/bees-mediablock-treebees.png"
              style={{ height: "200px" }}
            />
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center py-3">
        © 2022 Copyright
        <a /* href="https://mdbootstrap.com/" */> Starphy</a>
      </div>
    </footer>
  </>
);

export default Footer;
