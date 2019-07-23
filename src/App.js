import React from "react";
import "./App.css";
import DogsListContainer from "./components/DogsListContainer";
import store from "./store";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import DogsImagesContainer from "./components/DogsImagesContainer";
import FrontPage from "./components/FrontPage";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Route exact path="/" component ={FrontPage}/>
        <Route exact path="/list" component={DogsListContainer} />
        <Route
          exact
          path="/breeds/:breed"
          component={DogsImagesContainer}
        />
      </div>
    </Provider>
  );
}

export default App;
