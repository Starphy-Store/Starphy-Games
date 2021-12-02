import React from "react"
//importacion del header
import Header from "../Components/Nav/Header"

//importacion de las Cards
import Slider from "./Slider"

//Slider de recomendaciones
import Recomendations1 from "./Recomendations1";

function Home(){
    return(
    <div>
      <Header />
      <Slider />
      <Recomendations1 />
    </div>
    )
}
 export default Home;