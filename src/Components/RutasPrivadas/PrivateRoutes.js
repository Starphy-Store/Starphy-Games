import { Navigate, Outlet, Route } from "react-router";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Row,
  Col,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import logo from "../../Assets/logo_sin_fondo.png";
import "../Components.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import { logout } from "../../RegisterPage/AuthState";
import React, { createContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import {
  collection,
  doc,
  getFirestore,
  query,
  onSnapshot,
} from "firebase/firestore";
import firebase2 from "../../Home/Firebase2";
import { Redirect } from "wouter";
import { validate } from "uuid";
import { child } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB0aytR2kq9oV6_9DdeTLs2nGlQTzOxDAE",
  authDomain: "usuarios-b78e1.firebaseapp.com",
  projectId: "usuarios-b78e1",
  storageBucket: "usuarios-b78e1.appspot.com",
  messagingSenderId: "779291947290",
  appId: "1:779291947290:web:9bed27d795c7d614183ca3",
  measurementId: "${config.measurementId}",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(firebase2);

export const PrivateRoute = ({ children }) => {
  function prueba() {
    let status = false;
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("logged in user:", user.email);
        status = true;
      } else {
        console.log("user is logged out");
      }
    });
    return status;
  }
  let userStatus = auth.prueba;

  const isAuthenticated = onAuthStateChanged;
  console.log(userStatus);
  if (prueba) {
    return children;
  }
  return <Navigate to="/Home" />;
};

export default PrivateRoute;
