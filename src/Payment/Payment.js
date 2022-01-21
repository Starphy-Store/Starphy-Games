import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
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
  const paypal = useRef();
  const [game, setGame] = useState([]);

  const filtrado = game.filter((x) => x.esunjuego == "si");

  const filtrado2 = filtrado.filter((x) => x.juego == id);

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
    window.paypal
      .Buttons({
        createOrder: (data, actions, err, filtrado2) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: filtrado2.descrip,
                amount: {
                  currency_code: "USD",
                  value: filtrado2.precionumber,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture;
          console.log(order);
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
    z;
  }, []);
  console.log(filtrado2);
  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
}
