import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Info from "./Info";
import Projects from "./Projects";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <div className="container">
            <Switch>
              <Route path="/projects" component={Projects} />
              <Route path="/info" component={Info} />
              <Route path="/" component={Info} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
