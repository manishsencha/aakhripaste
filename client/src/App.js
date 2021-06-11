import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Base from "./Base";
import "./App.css";
import Output from "./Output";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Base />
          </Route>
          <Route exact path="/:id" component={Output} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
