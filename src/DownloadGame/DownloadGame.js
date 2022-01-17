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

  getDownloadURL(ref(storage, "Publica tus juegos gratis (1).png"))
    .then((url) => {
      const xhr = new XMLHttpRequest();
      xhr.responseType = "blob";
      xhr.onload = (event) => {
        const blob = xhr.response;
      };
      xhr.open("GET", url);
      xhr.send();
      var filename = "XXX.zip";
      xhr.href = url;
      xhr.download = filename;
      xhr.click();
      window.URL.revokeObjectURL(url);
      // Or inserted into an <img> element
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
          download();
        }}
      >
        descargar
      </Button>
    </>
  );
}
