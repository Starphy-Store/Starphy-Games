//DOCUMENTACION!
//https://react-bootstrap.github.io/getting-started/introduction

import Header from  "./Components/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Slide from "./Components/Slide";

function App() {
  return (
    <div className="bg">
    <Header></Header>
    <Slide></Slide>
    </div>
  );
}

export default App;
