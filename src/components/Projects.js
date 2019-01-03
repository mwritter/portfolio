import React, { Component } from "react";

export default class Projects extends Component {
  constructor() {
    super();
    this.state = {
      active: ""
    };
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick(item) {
    let index = 0;
    switch (item) {
      case "connecty_preview.png":
        index = 0;
        break;
      case "weather-preview.png":
        index = 1;
        break;
      case "event-maker.png":
        index = 2;
        break;
      case "java-preview.png":
        index = 3;
        break;
      case "python-1.png":
      case "python-2.png":
        index = 4;
        break;
      case "meal-plan-login.jpg":
      case "meal-plan-home.jpg":
      case "meal-plan-discover.jpg":
      case "meal-plan-details.jpg":
        index = 5;
        break;
      default:
        return 0;
    }
    const details = [
      "React, Express, Node, Bootstrap, Rest API, CSS",
      "React, Redux, Node, Bootstrap, API, CSS",
      ".NET, C#, CSS",
      "Java/JavaFX, JUnit,",
      "Python, Matplotib",
      "Flutter, Dart"
    ];
    const githubs = [
      "https://github.com/mwritter/Connecty",
      "https://github.com/mwritter/Weather-Plus",
      "https://github.com/mwritter/Ticket_Event_Web_App",
      "https://github.com/mwritter/Java-Member-Application",
      "https://github.com/mwritter/networkingClass",
      "https://github.com/mwritter/Flutter_Meal_Plan_App"
    ];

    this.setState({
      active: item,
      detail: details[index],
      gitHub: githubs[index]
    });
  }

  renderWebThumbnails() {
    let index = 0;
    const thumbnails = [
      "connecty_preview.png",
      "weather-preview.png",
      "event-maker.png"
    ];

    return thumbnails.map(thumbnail => {
      var cn_thumbnail =
        this.state.active === thumbnail ? "active_thumbnail" : "";
      var cn_detail =
        this.state.active === thumbnail ? "project_details" : "hide";
      return (
        <div key={"t" + index++}>
          <div className="thumbnail col-sm">
            <img
              className={cn_thumbnail}
              onClick={() => this._handleClick(thumbnail)}
              src={require(`../assets/${thumbnail}`)}
              alt="css"
            />
          </div>
          <div className={cn_detail}>
            <p>
              <a className="green" href={this.state.gitHub} target="blank">
                gitHub
              </a>
              , {this.state.detail}
            </p>
          </div>
        </div>
      );
    });
  }

  renderAppThumbnails() {
    let index = 0;
    const thumbnails = ["java-preview.png", "python-1.png", "python-2.png"];
    return thumbnails.map(thumbnail => {
      var cn_thumbnail =
        this.state.active === thumbnail ? "active_thumbnail" : "";
      var cn_detail = "hide";
      if (this.state.active === thumbnail) {
        cn_detail = "project_details";

        if (thumbnail.substring(0, 6) === "python") {
          cn_detail = "project_details_small";
        }
      }

      return (
        <div className="thumbnail col-sm" key={"t" + index++}>
          <img
            className={cn_thumbnail}
            onClick={() => this._handleClick(thumbnail)}
            src={require(`../assets/${thumbnail}`)}
            alt="css"
          />
          <div className={cn_detail}>
            <p>
              <a className="green" href={this.state.gitHub} target="blank">
                gitHub
              </a>
              , {this.state.detail}
            </p>
          </div>
        </div>
      );
    });
  }

  renderBottomThumbnails() {
    let index = 0;
    const thumbnails = [
      "meal-plan-login.jpg",
      "meal-plan-home.jpg",
      "meal-plan-discover.jpg",
      "meal-plan-details.jpg"
    ];

    return thumbnails.map(thumbnail => {
      var cn_thumbnail = "";

      if (this.state.active.substring(0, 9) === "meal-plan") {
        cn_thumbnail = "active_thumbnail";
      }

      return (
        <div className="mobile-thumbnail" key={"b" + index++}>
          <img
            className={cn_thumbnail}
            onClick={() => this._handleClick(thumbnail)}
            src={require(`../assets/${thumbnail}`)}
            alt="css"
          />
        </div>
      );
    });
  }

  render() {
    var cn =
      this.state.active.substring(0, 9) === "meal-plan"
        ? "project_details"
        : "hide";

    return (
      <div>
        <h2>Web Projects</h2>
        <div className="row">{this.renderWebThumbnails()}</div>
        <hr />
        <h2>Desktop App Projects</h2>
        <div className="row">{this.renderAppThumbnails()}</div>
        <hr />
        <h2>Mobile Project</h2>
        <div className="row">{this.renderBottomThumbnails()}</div>
        <div className={cn}>
          <p>
            <a className="green" href={this.state.gitHub} target="blank">
              gitHub
            </a>
            , {this.state.detail}
          </p>
        </div>
      </div>
    );
  }
}
