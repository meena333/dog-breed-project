import React from "react";
import "./App.css";
import DogsListContainer from "./components/DogsListContainer";
import store from "./store";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import DogsImagesContainer from "./components/DogsImagesContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Route exact path="/" component={DogsListContainer} />
        <Route
          exact
          // path="/breeds/image/random/10"
          component={DogsImagesContainer}
        />
      </div>
    </Provider>
  );
}

export default App;
