import React, { useState } from "react"
import Payment from "./Payment"
import { Container, Row, Col } from "react-bootstrap";

export default function PayCheckout(){
    const [checkout, setCheckOut] = useState(false);

    return(
        <Container style={{backgroundColor: "white", height: "92vh", borderRadius: "15px", marginTop: "4vh"}}>
            <Row>
                <Col style={{ width: "70vw"}} className="pt-5">
                <h6>Metodos de pago</h6>
                    <Payment></Payment>
                </Col>
                <Col >
                    <Container style={{backgroundColor: "#4AB790", height: "90%", borderRadius: "15px", marginTop: "5%"}}>
                        aaaaaaaa
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}