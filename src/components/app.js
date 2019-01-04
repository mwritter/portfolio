import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Info from "./Info";
import Projects from "./Projects";
import Resume from "./Resume";
export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <NavBar />
            <div className="container">
              <Switch>
                <Route path="/projects" component={Projects} />
                <Route path="/resume" component={Resume} />
                <Route path="/info" component={Info} />
                <Route path="/" component={Info} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
