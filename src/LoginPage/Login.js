
/* DOCUMENTACION */
/* https://firebase.google.com/docs/auth/web/facebook-login 
   https://firebase.google.com/docs/auth/web/google-signin*/

import { Form, Button } from "react-bootstrap";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import "./login.css";
import { eyeIcon, facebook, google } from "./assets/index";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  updateEmail,
  emailVerified,
} from "firebase/auth";

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
function Login() {
  // Initialize Firebase
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const provider2 = new FacebookAuthProvider();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  function probar(event) {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in a
        console.log("funciona");
        onAuthStateChanged(auth, (user) => {
          if (user.emailVerified) {
            setTimeout(() => {
              navigate("/");
            }, 1000);

            const uid = user.uid;
          }
        });

        const user = userCredential.user;
        // ...
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + errorMessage);
      });
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      //return <Redirect to='/Home'/>

      const uid = user.uid;
    } else {
      console.log("no");
    }
  });
<<<<<<< HEAD
=======
  /*    document.getElementById("register").addEventListener('click', function(){

import { Form, Button} from "react-bootstrap";

import React from 'react';
import "./login.css";
import { eyeIcon, facebook, google } from "./assets/index";
import { initializeApp } from "firebase/app";
import { getAuth,
   createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
     onAuthStateChanged ,
     signOut,
     sendEmailVerification,
     signInWithPopup,
     GoogleAuthProvider     
    } from "firebase/auth";

function Login() {


  const firebaseConfig = {
    apiKey: "AIzaSyB0aytR2kq9oV6_9DdeTLs2nGlQTzOxDAE",
    authDomain: "usuarios-b78e1.firebaseapp.com",
    projectId: "usuarios-b78e1",
    storageBucket: "usuarios-b78e1.appspot.com",
    messagingSenderId: "779291947290",
    appId: "1:779291947290:web:9bed27d795c7d614183ca3",
    measurementId: "${config.measurementId}"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

/*    document.getElementById("register").addEventListener('click', function(){
        const email= document.getElementById("email").value
        const password= document.getElementById("password").value
  createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
            // Signed in 
            verificar()
       const user = userCredential.user;
            // ...
            console.log("created")
         })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
           // ..
           console.log(errorCode + errorMessage)
});

  }); */
>>>>>>> d1dc79597485cf8475bbdc194189cd72a4bbb64a


  const gugle = function () {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        navigate("/");
        console.log("Inicio correctamente");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const fasebuk = function () {
    signInWithPopup(auth, provider2)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        navigate("/");
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);

        // ...
      });
  };

  const updateEmail = function (event) {
    setEmail(event.target.value);
  };
  const updatePassword = function (event) {
    setPassword(event.target.value);
  };

  setTimeout(function(){
  document.getElementById("ingreso").addEventListener('click', function(){
    const email2=document.getElementById("email2").value
    const password2=document.getElementById("password2").value
    console.log("si que sale")
    signInWithEmailAndPassword(auth, email2, password2)
    .then((userCredential) => {
   // Signed in 
    const user = userCredential.user;
   // ...
  
   })
   .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode + errorMessage)
    
});
});
    },3000)


    onAuthStateChanged(auth, (user) => {
      
      if (user) {
      if (user.emailVerified){
      console.log("activo")
    }
      
     const uid = user.uid;
     console.log(user.emailVerified)
  } else {

    console.log("no")
    }

        });
        setTimeout(function(){
          document.getElementById("google").addEventListener('click',function(){
          signInWithPopup(auth, provider)
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
            console.log("Inicio correctamente")
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
        
        });
      
      },100)

      
     

  return (
    <div className="main-container">
      <div className="main">
        <h1>Bienvenido a Starphy</h1>

        {/* onSubmit={(e)=>e.preventDefault()} */}
        <Form onSubmit={probar} className="form-container">
        <Form  className="form-container">

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="ms-3 mt-5" style={{ color: "#E5E5E5" }}>
              Email
            </Form.Label>
            <Form.Control
              className="p-3"
              type="email"
              placeholder="Ingresa tu Email"
              style={{ backgroundColor: "#C4C4C4" }}
              value={email}
              onChange={updateEmail}            
            <Form.Control
              className="p-3"
              id="email2"
              type="email"
              placeholder="Ingresa tu Email"
              style={{ backgroundColor: "#C4C4C4" }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <div className="form-label">
              <Form.Label className="ms-3 mb-0" style={{ color: "#E5E5E5" }}>
                Contraseña
              </Form.Label>
              <button
                type="button"
                onClick={() => {
                  navigate("/RecoverPassword");
                }}
                className="recoverPassword"
              >
                <a src="/" className="me-2" style={{ color: "#868484" }}>
                  ¿Haz olvidado tu contraseña?
                </a>
              </button>
            </div>
            <div style={{ position: "relative" }}>
              <button
                id="show-hide-passwd"
                type="button"
                className="btn-icon"
                onClick={() => {
                  setShow(!show);
                }}
              >
                <img className="eye-icon" src={eyeIcon} />
              </button>
              <Form.Control
                className="p-3"
                type={show ? "text" : "password"}
                placeholder="Ingresa tu contraseña"
                style={{ backgroundColor: "#C4C4C4" }}
                value={password}
                onChange={updatePassword}
              <a src="/" className="me-2" style={{ color: "#868484" }}>
                ¿Haz olvidado tu contraseña?
              </a>
            </div>
            <div style={{ position: "relative" }}>
              <img src={eyeIcon} alt="eyeIcon" className="eye-icon" />
              <Form.Control
                className="p-3"
                id="password2"
                type="password"
                placeholder="Ingresa tu contraseña"
                style={{ backgroundColor: "#C4C4C4" }}
              />
            </div>
          </Form.Group>
          <div className="d-grid my-5 ">
            <Button
              style={{ backgroundColor: "#69c0a1" }}
              type="submit"
              size="lg"
              id="ingreso"
              id= "ingreso"
            >
              Iniciar sesion
            </Button>
          </div>
        </Form>
        <p className="text-center" style={{ color: "#C4C4C4" }}>
          O inicia sesion con
        </p>
        <div className="buttons-content">
          <Button onClick={fasebuk} className="buttons">
            <img className="me-2" src={facebook} alt="facebook-icon" />
            Facebook
          </Button>
          <Button onClick={gugle} className="buttons">
          <Button className="buttons">
            <img className="me-2" src={facebook} alt="facebook-icon" />
            Facebook
          </Button>
          <Button id="google"className="buttons">
            <img className="me-2" src={google} alt="google-icon" />
            Google
          </Button>
        </div>
        <p className="text-center mt-5 text-light">
          ¿Todavia no tienes una cuenta?{" "}
          <button
            onClick={() => {
              navigate("/register");
            }}
            className="createAccount"
          >
            <a
              style={{
                background: "transparent",
                fontWeight: "999",
                color: "white",
                textDecoration: "none",
              }}
              to="/crearcuenta"
            >
              {" "}
              Crea una ahora
            </a>
          </button>
          <a
            style={{
              fontWeight: "999",
              color: "white",
              textDecoration: "none",
            }}
            to="/crearcuenta"
          >
            {" "}
            Crea una ahora
          </a>
        </p>
      </div>
    </div>
  );
}

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

   // Import the functions you need from the SDKs you need

   // TODO: Add SDKs for Firebase products that you want to use
   // https://firebase.google.com/docs/web/setup#available-libraries
 
   // Your web app's Firebase configuration
   // For Firebase JS SDK v7.20.0 and later, measurementId is optional


export default Login;
