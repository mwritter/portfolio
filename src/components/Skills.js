import React, { Component } from "react";

export default class Skills extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="badge col-sm text-center">
            <img src={require("../assets/js_badge.png")} alt="js" />
          </div>
          <div className="badge col-sm text-center">
            <img src={require("../assets/html_badge.png")} alt="html" />
          </div>
          <div className="badge col-sm text-center">
            <img src={require("../assets/css_badge.png")} alt="css" />
          </div>
          <div className="badge col-sm text-center">
            <img src={require("../assets/react_badge.png")} alt="react" />
          </div>
          <div className="badge col-sm text-center">
            <img src={require("../assets/redux_badge.png")} alt="redux" />
          </div>
          <div className="badge col-sm text-center">
            <img src={require("../assets/node_badge.png")} alt="node" />
          </div>
        </div>
        <div className="row">
          <div className="badge col-sm text-center">
            <img src={require("../assets/bootstrap_badge.png")} alt="js" />
          </div>
          <div className="badge col-sm text-center">
            <img src={require("../assets/python_badge.png")} alt="html" />
          </div>
          <div className="badge col-sm text-center">
            <img src={require("../assets/java_badge.png")} alt="css" />
          </div>
          <div className="badge col-sm text-center">
            <img src={require("../assets/dart_badge.png")} alt="react" />
          </div>
          <div className="badge col-sm text-center">
            <img src={require("../assets/flutter_badge.png")} alt="redux" />
          </div>
          <div className="badge col-sm text-center">
            <img src={require("../assets/C_badge.png")} alt="node" />
          </div>
        </div>
        <div className="only-sm text-center">
          <hr />
          <p>JavaScript | HTML | CSS | Bootstrap</p>
          <p>React | Redux | Node | Express</p>
          <p>Python | Java | Dart</p>
          <p>Flutter | C# </p>
        </div>
      </div>
    );
  }
}
