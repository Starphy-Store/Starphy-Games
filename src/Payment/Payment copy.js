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

import "react-toastify/dist/ReactToastify.css";
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
import { Button, Container, Modal } from "react-bootstrap";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";

const db = getFirestore(firebase2);
const auth = getAuth(firebase2);

export default function Payment() {
  toast.configure();
  const [modalShow, setModalShow] = React.useState(false);
  const { id } = useParams();

  const [game, setGame] = useState([]);

  const [iduser, setId] = useState("");
  const [historial, setHistorial] = useState([]);

  console.log(game.precio);

  useEffect(() => {
    getGames();
  }, [iduser]);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setId(user.uid);
    }
  });

  //Juego

  //Historial
  const maphistory = historial.filter((x) =>
    x.idusuariocompra.includes(iduser)
  );
  const mapjuegos = maphistory.map((x) => x.juegoscomprado);

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

  async function getGames() {
    const ref = doc(db, "games", id);

    const refere = query(collection(db, "juegoscomprados"));

    onSnapshot(ref, (querySnapshot) => {
      getDoc(ref, id).then((data) => {
        const {
          videojuego,
          imagenjuego2,
          imagenjuego,
          esunjuego,
          descrip,
          categoria1,
          categoria2,
          categoria3,
          ...rest
        } = data.data();

        setGame({ ...rest });
      });
    });

    onSnapshot(refere, (querySnapshot) => {
      const it = [];
      querySnapshot.forEach((doc) => {
        const { preciodeljuego, enviarpago, nombre, ...rest } = doc.data();
        it.push({ ...rest });
      });

      const FilterHistory = it.filter((x) => x.idusuariocompra == iduser);

      setHistorial(FilterHistory);
    });
  }

  const modaltrue = () => {
    if (mapjuegos.includes(game.juego)) {
      toast.error("Juego Ya Comprado 👌", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "dark-toast",
      });
    } else {
      addDoc(collection(db, "juegoscomprados"), {
        juegoscomprado: game.juego,
        idusuariocompra: iduser,
        preciodeljuego: game.precio,
        enviarpago: game.idprofile,
        nombrecreador: game.creator,
      });
    }
  };

  if (mapjuegos.includes(game.juego)) {
    return (
      <Container>
        <p></p>
        <Button variant="success" size="lg" style={{ width: "90%" }}>
          Lo tienes en la biblioteca
        </Button>
      </Container>
    );
  } else if (game.precio == 0) {
    return (
      <Button
        onClick={modaltrue}
        variant="success"
        size="lg"
        style={{ width: "90%" }}
      >
        Agregar a la libreria
      </Button>
    );
  }
  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <PayPalScriptProvider
        options={{ "client-id": process.env.REACT_APP_APIPAYPAL }}
      >
        <PayPalButtons
          style={{
            layout: "vertical",
          }}
          disabled={false}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    currency_code: "USD",
                    value: game.precio,
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then((details) => {
              const name = details.payer.name.given_name;
              setModalShow(true);

              addDoc(collection(db, "juegoscomprados"), {
                juegoscomprado: game.juego,
                idusuariocompra: iduser,
                preciodeljuego: game.precio,
                enviarpago: game.idprofile,
                nombrecreador: game.creator,
              });
            });
          }}
        />
      </PayPalScriptProvider>
    </>
  );
}
