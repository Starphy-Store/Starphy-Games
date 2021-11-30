import { useState } from "react";
import Header from "./Components/Nav/Header";
import CardList from "./Components/Home/CardList";
import getGames from "./utils/getGames";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "react-multi-carousel/lib/styles.css";

function App() {
  const [games, setGames] = useState(getGames);
  return (
    <div>
      <Header />
      <CardList games={games} setGames={setGames} />
    </div>
  );
}

export default App;
