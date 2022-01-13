import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//importacion del Home
import Home from "./Home/Home";

//importacion del Login

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

//importacion del bootstrap y del css
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import PrivateRouteEditProfile, {
  AuthContextProvider,
  useAuthState,
} from "./Components/RutasPrivadas/PrivateRoutes";
import { useAuth } from "./RegisterPage/AuthState";
import { Redirect } from "wouter";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Error404 />} />
        <Route path="/GamesShow/:id" element={<GamesShow />} />
        <Route path="/" element={<PrivateRouteEditProfile />}>
          <Route path="/EditProfile" element={<EditProfile />} />
        </Route>

        <Route path="/library" element={<Library />} />

        <Route path="/Home/" element={<Home />} />
        <Route path="/LoginUser" element={<Login />} />
        <Route path="/RecoverPassword" element={<Recuperar />} />
        <Route path="/CreatePassword" element={<CreatePass />} />
        <Route path="/register" element={<Register />} />

        <Route path="/Payment/:id" element={<Payment />} />
        <Route path="/DataIndex" element={<DataIndex />} />
        <Route path="/DevProfile" element={<DevProfile />} />
      </Routes>
    </>
  );
}

// <Container className="loginContainer">
//   <Login />
// </Container>
export default App;
