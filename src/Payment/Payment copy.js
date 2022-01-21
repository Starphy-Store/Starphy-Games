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
  const hostedFields = usePayPalHostedFields();
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
  const submitHandler = () => {
    if (!typeof hostedFields.submit !== "function") return; // validate that `submit()` exists before using it
    hostedFields
      .submit({
        // The full name as shown in the card and billing address
        cardholderName: "John Wick",
      })
      .then((order) => {
        fetch("/your-server-side-integration-endpoint/capture-payment-info")
          .then((response) => response.json())
          .then((data) => {
            // Inside the data you can find all the information related to the payment
          })
          .catch((err) => {
            // Handle any error
          });
      });
  };
  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "EIxtNk3M5az16C3g0PW4I6gcd221s9R6E3EwMi0X6KAg2HC5EQ1qDx1RoWOjMqbkG21Ty5vlA53TatAe",
        "data-client-token":
          "AVJkvSNRo_sxUpTQ52LHUdGnjrD0Bq-5-6z1j9IayvktGEwQKDD2P2rPqLKOgRAqPs1A-lHLhlpkx7Qh",
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
      <PayPalHostedFieldsProvider
        createOrder={() => {
          // Here define the call to create and order
          return fetch("/your-server-side-integration-endpoint/orders")
            .then((response) => response.json())
            .then((order) => order.id)
            .catch((err) => {
              // Handle any error
            });
        }}
      >
        <PayPalHostedField
          id="card-number"
          hostedFieldType="number"
          options={{ selector: "#card-number" }}
        />
        <PayPalHostedField
          id="cvv"
          hostedFieldType="cvv"
          options={{ selector: "#cvv" }}
        />
        <PayPalHostedField
          id="expiration-date"
          hostedFieldType="expirationDate"
          options={{
            selector: "#expiration-date",
            placeholder: "MM/YY",
          }}
        />
      </PayPalHostedFieldsProvider>
    </PayPalScriptProvider>
  );
}
