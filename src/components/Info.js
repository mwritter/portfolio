import React, { Component } from "react";
import Skills from "./Skills";

export default class Info extends Component {
  render() {
    return (
      <div className="info">
        <h1>Hi my name's Matthew Ritter</h1>
        <p>
          I'm a creator. I like to build things with my own two hands and I use
          software development to do just that. These are the technologies I'm
          currently working with and have used in my own projects. I'm always
          finding new tools to solve problems, which means I'm always learning
          new things and I love that about software development.
        </p>

        <div>
          <Skills />
        </div>
      </div>
    );
  }
}
