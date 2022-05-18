import React from "react";
import Header from "../Components/Nav/Header";
import Footer from "../Footer/Footer";
import { Container } from "react-bootstrap";

export default function TerminosyCondiciones() {
  return (
    <>
      <Header></Header>
      <Container style={{ color: "white", paddingTop: "100px" }}>
        <h1>Términos y Condiciones</h1>
        <ul>
          <li>
            Al acceder al sitio web en Starphy.com, usted acepta estar vinculado
            por estos términos de servicio, todas las leyes y regulaciones
            aplicables, y acepta que usted es responsable del cumplimiento de
            las leyes locales aplicables. Si no está de acuerdo con alguno de
            estos términos, se le prohíbe utilizar o acceder a este sitio. Los
            materiales contenidos en este sitio web están protegidos por las
            leyes de derechos de autor y marcas aplicables.
          </li>
          <br />
          <li>
            Se concede permiso para descargar permanentemente una copia de los
            materiales (información o software) en el sitio web Starphy.com para
            la visualización transitoria personal y no comercial solamente. Esta
            es la concesión de una licencia, no una transferencia de título, y
            bajo esta licencia usted no puede:
          </li>
          <br />
          <li>
            Modificar o copiar los materiales; utilizar los materiales para
            cualquier propósito comercial, o para cualquier exhibición pública
            (comercial o no comercial); intentar descompilar o realizar
            ingeniería inversa de cualquier software contenido en el sitio web
            de Starphy.com; eliminar cualquier Copyright u otras anotaciones
            propietarias de los materiales; o transferir los materiales a otra
            persona o «reflejar» los materiales en cualquier otro servidor.
          </li>
          <br />
          <li>
            Esta licencia se terminará automáticamente si usted viola cualquiera
            de estas restricciones y puede ser terminada por Starphy.com en
            cualquier momento. Al terminar su visualización de estos materiales
            o al finalizar esta licencia, debe destruir cualquier material
            descargado en su posesión ya sea en formato electrónico o impreso.
          </li>
          <br />
          <li>
            En ningún caso Starphy.com o sus proveedores serán responsables de
            ningún daño (incluyendo, sin limitación, daños por pérdida de datos
            o beneficio, o debido a la interrupción del negocio) que surjan del
            uso o la incapacidad de utilizar los materiales en el sitio web de
            Starphy.com, incluso si Starphy.com o un representante autorizado de
            Starphy.com ha sido notificado verbalmente o por escrito de la
            posibilidad de tal daño. Debido a que algunas jurisdicciones no
            permiten limitaciones a las garantías implícitas, o limitaciones de
            responsabilidad por daños consecuentes o incidentales, es posible
            que estas limitaciones no se apliquen a usted.
          </li>
          <br />
          <li>
            Los materiales que aparecen en el sitio web de Starphy.com pueden
            incluir errores técnicos, tipográficos o fotográficos. Starphy.com
            no garantiza que cualquiera de los materiales en su sitio web son
            exactos, completos o actuales. Starphy.com puede realizar cambios en
            los materiales contenidos en su sitio web en cualquier momento sin
            previo aviso. Sin embargo Starphy.com no se compromete a actualizar
            los materiales.
          </li>
          <br />
          <li>
            Starphy.com puede revisar estos términos de servicio para su sitio
            web en cualquier momento sin previo aviso. Al utilizar este sitio
            web, usted acepta estar vinculado por la versión actual de estos
            términos de servicio.
          </li>
          <br />
        </ul>
      </Container>
      <Footer />
    </>
  );
}
