import React from "react";
import { Button } from "react-bootstrap";
import firebase2 from "../Home/Firebase2.js";
import {
  query,
  collection,
  onSnapshot,
  getFirestore,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

function download() {
  const storage = getStorage();
  getDownloadURL(ref(storage, "UCH..v1.8.22.rar"))
    .then((url) => {
      const xhr = new XMLHttpRequest();
      xhr.responseType = "blob";
      xhr.onload = (event) => {
        const blob = xhr.response;
      };
      xhr.open("GET", url);
      xhr.send();
      // Or inserted into an <img> element
      const img = document.getElementById("myimg");
      img.setAttribute("src", url);
    })
    .catch((error) => {
      // Handle any errors
    });
}

export default function DownloadGame() {
  const verify = true;
  return (
    <>
      <h1>Descargar weas</h1>
      <Button
        onClick={(e) => {
          e.preventDefault();
          download(); /*ni idea ya no me sirve la cabeza jasja dale a mirmir taluego */
        }}
      >
        descargar
      </Button>
    </>
  );
}
