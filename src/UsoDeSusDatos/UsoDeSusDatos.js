import React from "react";
import { Col, Container } from "react-bootstrap";
import Header from "../Components/Nav/Header";
import Footer from "../Footer/Footer";

function UsoDeSusDatos() {
  return (
    <div>
      <Header />
      <Container style={{ paddingTop: "100px" }}>
        <h1 style={{ color: "white" }}>Para que usamos su información</h1>

        <h4 style={{ color: "grey", textAlign: "center" }}>
          Protegemos tus datos y tu privacidad
        </h4>
        <p></p>

        <h5 style={{ color: "white" }}>
          La seguridad y privacidad de tus datos es la máxima prioridad de
          Starphy Por eso te informamos de cómo y para qué los usamos.
        </h5>
        <p></p>
        <h2 style={{ textAlign: "center", color: "white" }}>
          ¿Para qué usamos los datos que te pedimos?
        </h2>
        <h5 style={{ color: "white" }}>
          Nuestro principal objetivo es la mejora continua de tu experiencia al
          usar nuestra web y los datos que nos facilitas nos ayudan a
          conseguirlo.Gracias a estos datos, podemos personalizar los contenidos
          y servicios que te ofrecemos para que sean relevantes para ti. Además,
          los datos que nos ofreces, nos permiten realizar las siguientes
          acciones:
        </h5>
        <p></p>
        <li style={{ color: "white" }}>
          En el momento de la compra, para que esta se pueda realizar de manera
          efectiva.
        </li>
        <li style={{ color: "white" }}>
          Para verificar tu mayoría de edad para poder emitir con garantías y
          seguridad.
        </li>
        <p></p>
        <h2 style={{ color: "white", textAlign: "center" }}>
          ¿A quién se comunicarán tus datos?
        </h2>
        <p></p>
        <h5 style={{ color: "white" }}>
          No compartimos tus datos personales con nadie ni facilitamos su acceso
          a ningún tercero.
        </h5>
        <p></p>
        <h5 style={{ color: "white" }}>
          Cada vez que utilices la pasarela de pagos o de cobros en nuestra web,
          el prestador del servicio correspondiente tratará la información
          suministrada a los solos efectos de ejecutar la transacción
          solicitada.{" "}
        </h5>
        <p></p>
        <h5 style={{ color: "white" }}>
          El acuerdo de privacidad entre nosotros y este prestador de servicios
          refleja expresamente que éste no hará uso de esa información ni se la
          facilitará a terceros para finalidades distintas de la ejecución de la
          transacción.
        </h5>
        <p></p>
        <h5 style={{ color: "white" }}>
          También trabajamos con un prestador externo para la atención al
          cliente por lo que cada vez que hagas uso de este servicio tus datos
          también serán tratados por este prestador a los solos efectos de poder
          llevar contigo una comunicación eficaz y poder resolver tus dudas o
          problemas de la mejor manera posible.
        </h5>
        <h2 style={{ textAlign: "center", color: "white" }}>
          ¿Qué derechos tienes sobre tus datos?
        </h2>
        <p></p>
        <h5 style={{ color: "white" }}>
          Tus datos son tuyos y tienes pleno control sobre ellos. Por eso,
          puedes acceder y rectificar tus datos en cualquier momento. Si quieres
          borrar tus datos consulta antes la documentación ampliada, donde se
          explican de forma extendida todos los derechos de los que puedes hacer
          uso.
        </h5>
        <p></p>
        <h2 style={{ textAlign: "center", color: "white" }}>
          ¿Qué información te vamos a enviar si introduces tu email?
        </h2>
        <h5 style={{ color: "white" }}>
          Solo te enviamos por email información totalmente necesaria para ti,
          como son los datos para la recuperación de tu cuenta y otros avisos de
          igual importancia.
        </h5>
        <p></p>
        <h2 style={{ textAlign: "center", color: "white" }}>
          ¿Quién es el responsable del tratamiento de tus datos personales?
        </h2>
        <p></p>
        <h6 style={{ color: "white", textAlign: "center" }}>Starphy</h6>
      </Container>
      <Footer />
    </div>
  );
}

export default UsoDeSusDatos;
