import React from "react"
import {Carousel, Row, Col} from "react-bootstrap"
import MinecraftImg from "../Assets/MinecraftImg.jpg"

function GamesCarousel() {
    return(
        <Carousel indicators={false} className="pb-4">
  <Carousel.Item>
    <Row>
    <Col md={4}>
        <img src={MinecraftImg} className="GamesCarouselImg"></img>
        </Col>
        <Col md={4}>
        <img src={MinecraftImg} className="GamesCarouselImg"></img>
        </Col>
        <Col md={4}>
        <img src={MinecraftImg} className="GamesCarouselImg"></img></Col>
    </Row>
  </Carousel.Item>
  <Carousel.Item>
  <Row>
    <Col md={4}>
        <img src={MinecraftImg} className="GamesCarouselImg"></img>
        </Col>
        <Col md={4}>
        <img src={MinecraftImg} className="GamesCarouselImg"></img>
        </Col>
        <Col md={4}>
        <img src={MinecraftImg} className="GamesCarouselImg"></img></Col>
    </Row>
  </Carousel.Item>
  <Carousel.Item>
<Row>
    <Col md={4}>
        <img src={MinecraftImg} className="GamesCarouselImg"></img>
        </Col>
        <Col md={4}>
        <img src={MinecraftImg} className="GamesCarouselImg"></img>
        </Col>
        <Col md={4}>
        <img src={MinecraftImg} className="GamesCarouselImg"></img></Col>
    </Row>
  </Carousel.Item>
</Carousel>
    )
}
export default GamesCarousel