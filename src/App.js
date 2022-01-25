import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//importacion de todo ajsaj
import Home from "./Home/Home";
import Login from "./LoginPage/Login";
import Recuperar from "./LoginPage/Recover";
import CreatePass from "./LoginPage/CreatePassword.js";
import Register from "./RegisterPage/Register.js";
import Error404 from "./pages/Error404";
import GamesShow from "./GamesShow/GamesShow";
import CardStyle from "../src/Components/Cards/CardStyle";
import Payment from "../src/Payment/PayCheckout";
import DataIndex from "../src/DataIndex/DataIndex";
import Library from "./Library/Library";
import EditProfile from "./EditProfile/EditProfile";
import DevProfile from "../src/DevProfile/DevProfile";
import CardsBacanas from "../src/Components/CardsBacanas/CardsBacanas";
import DevRegister from "../src/DevRegister/DevRegister";
import Editdevprofile from "../src/EditDevProfile/EditDevProfile.js";
import DownloadGame from "../src/DownloadGame/DownloadGame";
import SearchPage from "../src/SearchPage/SearchPage";
import UploadGame from "../src/UploadGame/UploadGame.js";
import SendEmail from "./SendEmail/SendEmail";

//importacion del bootstrap y del css
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import PrivateRoute, {
  AuthContextProvider,
  useAuthState,
} from "./Components/RutasPrivadas/PrivateRoutes";
import { useAuth } from "./RegisterPage/AuthState";
import { Link, Redirect } from "wouter";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import firebase2 from "./Home/Firebase2";
import {
  getFirestore,
  query,
  onSnapshot,
  collection,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID,
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
function App() {
  const [user, setuser] = useState(false);
  const [perfil, setPerfil] = useState([]);

  const filterId = perfil.filter((x) => x.uid == user);
  const Dev = filterId.filter((x) => x.rol == "dev");

  console.log(Dev);
  console.log();

  function prueba() {
    const ref = query(collection(db, "users"));
    onSnapshot(ref, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setPerfil(items);
    });

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const item = [];
        const uids = user.uid;
        item.push(uids);
        setuser(item);
      }
    });
  }

  useEffect(() => {
    prueba();
  }, []);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Link to="/Home">
              <Home />
            </Link>
          }
        />
        <Route path="*" element={<Error404 />} />
        <Route path="/GamesShow/:id" element={<GamesShow />} />
        {user && <Route path="/EditProfile" element={<EditProfile />} />}
        {user && <Route path="/library" element={<Library />} />}
        {user ? (
          <Route path="/Payment/:id" element={<Payment />} />
        ) : (
          <Route path="/LoginUser" element={<Login />} />
        )}
        <Route path="/Home" element={<Home />} />
        <Route path="/LoginUser" element={<Login />} />
        <Route path="/RecoverPassword" element={<Recuperar />} />
        <Route path="/CreatePassword" element={<CreatePass />} />
        <Route path="/register" element={<Register />} />r
        <Route path="/DataIndex" element={<DataIndex />} />
        <Route path="/DevProfile/:idprofile" element={<DevProfile />} />
        <Route path="/DevRegister" element={<DevRegister />} />
        <Route path="/DownloadGame" element={<DownloadGame />} />
        <Route path="/editdevprofile" element={<Editdevprofile />} />
        <Route path="/SearchPage/:search" element={<SearchPage />} />
        <Route path="/SendEmail" element={<SendEmail />} />
        {Dev.map((item) =>
          item.rol == "dev" ? (
            <>
              <Route path="/uploadgame" element={<UploadGame />} />)
            </>
          ) : (
            <Route path="*" element={<Error404 />} />
          )
        )}
      </Routes>
    </>
  );
}
export default App;
