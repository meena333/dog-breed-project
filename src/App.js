import React from "react";
import "./App.css";
import store from "./store";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import DogsListContainer from "./components/DogsListContainer";
import DogsImagesContainer from "./components/DogsImagesContainer";
import FrontPage from "./components/FrontPage";
import GameChoice from "./components/GameChoice"
import Game1Container from "./components/game/Game1Container";
import Game2Container from "./components/game/Game2Container";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Route exact path="/" component={ FrontPage } />
        <Route exact path="/list" component={ DogsListContainer } />
        <Route exact path="/breeds/:breed" component={ DogsImagesContainer } />
        <Route exact path="/game" component={ GameChoice } />
        <Route exact path="/game/game1" component={ Game1Container } />
        <Route exact path="/game/game2" component={ Game2Container } />
      </div>
    </Provider>
  );
}

export default App;
