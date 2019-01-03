import React, { Component } from "react";
import { Link } from "react-router-dom";

const menuItems = ["skills", "projects", "github"];

export default class NavBar extends Component {
  constructor() {
    super();

    this.state = {
      active: "skills"
    };
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick(item) {
    this.setState({ active: item });
  }

  renderMenuItems() {
    var index = 0;
    return menuItems.map(item => {
      var cn = "nav-item";
      var link_cn =
        this.state.active === item
          ? "nav-link myLink active"
          : "nav-link myLink";
      return item === "github" ? (
        <li key={index++} className="nav-item">
          <a
            className="nav-link myLink"
            href="https://github.com/mwritter"
            target="blank"
          >
            github
          </a>
        </li>
      ) : (
        <li
          key={index++}
          className={cn}
          onClick={() => this._handleClick(item)}
        >
          <Link className={link_cn} to={"/" + item}>
            {item}
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="myNavBar">
        <h1>Software Developer</h1>

        <ul className="nav">{this.renderMenuItems()}</ul>
      </div>
    );
  }
}
