import React, { useEffect, useState } from "react";
import {
  Instagram,
  Tiktok,
  Envelope,
  Twitter,
  ArrowClockwise,
} from "react-bootstrap-icons";
import "./Footer.css";
import firebase2 from "../Home/Firebase2";
import {
  collection,
  getFirestore,
  onSnapshot,
  query,
} from "firebase/firestore";

const db = getFirestore(firebase2);
export default function Footer() {
  const [juegos, setJuegos] = useState([]);

  async function getGames() {
    const ref = query(collection(db, "games"));

    onSnapshot(ref, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        const { videojuego, ...rest } = doc.data();
        items.push({ ...rest, id: doc.id });
      });
      const randomGame = [items[Math.floor(Math.random() * items.length)]];
      setJuegos(randomGame);
    });
  }

  useEffect(() => {
    getGames();
  }, []);

  return (
    <>
      {juegos.map((item) => (
        <footer
          className="page-footer font-small blue mt-5"
          style={{ color: "white", backgroundColor: "#212121" }}
        >
          <div className="gradiente"></div>
          <div className="container-fluid text-center text-md-left pt-3">
            <div className="row">
              <div className="col-md-3" style={{ color: "white" }}>
                <div style={{ paddingLeft: "100px" }}>
                  <h5 className="text-uppercase">Información sobre nosotros</h5>
                  <ul className="list-unstyled pt-3">
                    <li>
                      <a href="/aboutus" style={{ color: "white" }}>
                        Quienes somos?
                      </a>
                    </li>
                    <li>
                      <a href="/UsoDeSusDatos" style={{ color: "white" }}>
                        Uso de su información
                      </a>
                    </li>
                    <li>
                      <a
                        href="/terminosycondiciones"
                        style={{ color: "white" }}
                      >
                        Términos y condiciones
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">
                  No puedes escoger un videojuego ?
                </h5>

                <a style={{ color: "white" }} href={`/GamesShow/${item.id}`}>
                  <p>
                    Haz click aqui para ir a un juego aleatorio
                    <ArrowClockwise />
                  </p>
                </a>

                <h6
                  style={{
                    fontSize: "12px",
                    color: "gray",
                    paddingTop: "30px",
                  }}
                >
                  Escribenos tus preguntas, sugerencias o tus opiniones en
                  nuestras redes :)
                </h6>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=starphygames@gmail.com"
                  style={{ color: "white" }}
                >
                  <Envelope
                    style={{
                      width: "40px",
                      height: "40px",
                      paddingRight: "10px",
                    }}
                  />
                </a>
                <a
                  href="https://www.instagram.com/starphygames/"
                  style={{ color: "white" }}
                >
                  <Instagram
                    style={{
                      width: "40px",
                      height: "40px",
                      paddingRight: "10px",
                    }}
                  />
                </a>
                <a
                  href="https://twitter.com/StarphyGames"
                  style={{ color: "white" }}
                >
                  <Twitter
                    style={{
                      width: "40px",
                      height: "40px",
                      paddingRight: "10px",
                    }}
                  />
                </a>
                <a
                  href="https://www.tiktok.com/@starphy.com"
                  style={{ color: "white" }}
                >
                  <Tiktok
                    style={{
                      width: "40px",
                      height: "40px",
                      paddingRight: "10px",
                    }}
                  />
                </a>
              </div>

              <hr className="clearfix w-100 d-md-none pb-0" />

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
      ))}
    </>
  );
}
