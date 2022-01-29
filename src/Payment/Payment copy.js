import {
  PayPalScriptProvider,
  PayPalButtons,
  PayPalHostedField,
  usePayPalHostedFields,
  PayPalHostedFieldsProvider,
  BraintreePayPalButtons,
} from "@paypal/react-paypal-js";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ReactDOM } from "react-dom";
import firebase2 from "../Home/Firebase2";

import {
  query,
  collection,
  onSnapshot,
  getFirestore,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  addDoc,
} from "firebase/firestore";
import { Button, Modal } from "react-bootstrap";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const db = getFirestore(firebase2);
const auth = getAuth(firebase2);

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton variant="dark">
        <Modal.Title id="contained-modal-title-vcenter">
          Compra realizada con exito🎉🎉
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Muchas gracias por colaborar en sacarme de latam😳👌</p>
      </Modal.Body>
      <Modal.Footer>
        <Button href="/library">Ir a tu biblioteca</Button>
        <Button
          onClick={props.onHide}
          variant="success"
          style={{ backgroundColor: "" }}
        >
          Descargar ahora
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function Payment() {
  const [modalShow, setModalShow] = React.useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const [game, setGame] = useState([]);
  const [perfil, setPerfil] = useState([]);
  const [iduser, setId] = useState();

  const filtrado = game.filter((x) => x.esunjuego == "si");
  const filtrado2 = filtrado.filter((x) => x.juego == id);
  const filteruser = perfil.filter((x) => x.uid == iduser);

  console.log(filteruser);
  function getGames() {
    const ref = query(collection(db, "games"));
    const refe = query(collection(db, "users"));

    onSnapshot(ref, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data(), id);
      });
      setGame(items);
    });
    onSnapshot(refe, (querySnapshot) => {
      const ite = [];
      querySnapshot.forEach((doc) => {
        ite.push(doc.data());
      });
      setPerfil(ite);
    });

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const item = [];
        const uids = user.uid;
        item.push(uids);
        setId(item);
      }
    });
  }

  useEffect(() => {
    getGames();
  }, []);

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      {filteruser.map((items) => (
        <PayPalScriptProvider
          options={{ "client-id": process.env.REACT_APP_APIPAYPAL }}
        >
          {filtrado2.map((item) => (
            <PayPalButtons
              style={{
                layout: "horizontal",
                size: "small",
                color: "black",
                tagline: "true",
                shape: "pill",
                fundingicons: "true",
                funding: "allowed",
              }}
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: item.precio,
                      },
                    },
                  ],
                });
              }}
              onApprove={(data, actions) => {
                return actions.order.capture().then((details) => {
                  const name = details.payer.name.given_name;
                  setModalShow(true);
                  navigate("/home");
                  addDoc(collection(db, "juegoscomprados"), {
                    juegoscomprado: item.juego,
                    idusuariocompra: items.uid,
                    preciodeljuego: item.precio,
                    enviarpago: item.idprofile,
                    nombrecreador: item.creator,
                  });
                });
              }}
            />
          ))}
        </PayPalScriptProvider>
      ))}
    </>
  );
}
