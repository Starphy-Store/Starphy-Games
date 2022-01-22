import {
  PayPalScriptProvider,
  PayPalButtons,
  PayPalHostedField,
  usePayPalHostedFields,
  PayPalHostedFieldsProvider,
  BraintreePayPalButtons,
} from "@paypal/react-paypal-js";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
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
} from "firebase/firestore";
const db = getFirestore(firebase2);
export default function Payment() {
  const { id } = useParams();

  const [game, setGame] = useState([]);

  const filtrado = game.filter((x) => x.esunjuego == "si");
  const filtrado2 = filtrado.filter((x) => x.juego == id);
  console.log(filtrado2);
  function getGames() {
    const ref = query(collection(db, "games"));

    onSnapshot(ref, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data(), id);
      });
      setGame(items);
    });
  }

  useEffect(() => {
    getGames();
  }, []);

  return (
    <PayPalScriptProvider
      options={{
        "client-id": "test",
      }}
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
                    value: item.precionumber,
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then((details) => {
              const name = details.payer.name.given_name;
              alert(`Transaction completed by ${name}` + "/Home");
            });
          }}
        />
      ))}
    </PayPalScriptProvider>
  );
}
