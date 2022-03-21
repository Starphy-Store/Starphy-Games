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
import Payment from "../src/Payment/PayCheckout";
import DataIndex from "../src/DataIndex/DataIndex";
import Library from "./Library/Library";
import EditProfile from "./EditProfile/EditProfile";
import DevProfile from "../src/DevProfile/DevProfile";
import DevRegister from "../src/DevRegister/DevRegister";
import Editdevprofile from "../src/EditDevProfile/EditDevProfile.js";
import DownloadGame from "../src/DownloadGame/DownloadGame";
import SearchPage from "../src/SearchPage/SearchPage";
import UploadGame from "../src/UploadGame/UploadGame.js";
import SendEmail from "./SendEmail/SendEmail";
import AboutUs from "./AboutUs/AboutUs";
import TerminosyCondiciones from "./LegalAdvertisement/TerminosyCondiciones";
import CategorySection from "./CategorySection/CategorySection";
import UsoDeSusDatos from "./UsoDeSusDatos/UsoDeSusDatos";
import HelpMe from "./Components/Nav/HelpMe";

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
  doc,
  getDoc,
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
  const [user, setuser] = useState("");
  const [perfil, setPerfil] = useState({});

  useEffect(() => {
    a();
  }, [user]);

  async function a() {
    onAuthStateChanged(auth, (user) => {
      if (user == null) {
      } else {
        setuser(user.uid);
      }
    });
    const ref = await doc(db, "users", user);

    onSnapshot(ref, (querySnapshot) => {
      getDoc(ref, user).then((data) => {
        const { FechaDeModificacion, email, photoProfile, pass, ...rest } =
          data.data();

        setPerfil({ ...rest });
      });
    });
  }

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
        <Route path="/library" element={<Library />} />
        {user ? (
          <Route path="/Payment/:id" element={<Payment />} />
        ) : (
          <Route path="/LoginUser" element={<Login />} />
        )}
        <Route path="/Home" element={<Home />} />
        <Route path="/UsoDeSusDatos" element={<UsoDeSusDatos />} />
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
        <Route path="/Ayuda" element={<HelpMe />} />
        <Route path="/SendEmail" element={<SendEmail />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route
          path="/Terminosycondiciones"
          element={<TerminosyCondiciones />}
        />
        {/* CATEGORIAS */}
        <Route
          path="/CategorySection/:Cooperativo"
          element={<CategorySection />}
        />
        {perfil.rol == "dev" ? (
          <>
            <Route path="/uploadgame" element={<UploadGame />} />)
          </>
        ) : (
          <Route path="*" element={<Error404 />} />
        )}
      </Routes>
    </>
  );
}
export default App;
