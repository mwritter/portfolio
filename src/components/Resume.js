import React, { Component } from "react";

export default class Resume extends Component {
  render() {
    return (
      <div>
        <div className="text-center">
          <br />
          <h1>Matthew Ritter</h1>
          <br />
          <p>
            <b>Phone: </b> 229-977-5525
          </p>
          <p>
            <b>Address: </b> 1639 E Park AVE APT E2, Valdosta Ga
          </p>
          <p>
            <b>Email: </b>matthewwilliamritter@gmail.com
          </p>
          <p>
            <b>GitHub: </b>
            <a className="green" href="github.com/mwritter">
              github.com/mwritter
            </a>
          </p>
        </div>
        <section>
          <h4>Profile</h4>
          <h5>Software Developer</h5>
          <br />
          <p>
            <em>
              As a recent graduate with a BS in Computer Information Systems my
              focus is to better myself as a person and as a software developer.
              I am eager to learn and see all obstacles as an opportunity for
              growth.
            </em>
          </p>
        </section>
        <br />
        <section>
          <h4>Skills</h4>
          <p>
            <b>Web:</b> React, Redux, Express, .NET, C#, MongoDB, Firebase,
            Heroku, MLab, CSS, Bootstrap, HTML, JavaScript
          </p>
          <p>
            <b>Mobile Development:</b> Java, Dart, Flutter, Cloud-Firestore
          </p>
          <p>
            <b>Data Science:</b> Python, Shell Script
          </p>
        </section>
        <br />
        <section>
          <h4>Projects</h4>
          <h5>
            <a
              className="green"
              href="https://github.com/mwritter/Flutter_Meal_Plan_App"
            >
              Flutter Meal Plan App
            </a>
          </h5>
          <p>
            Cross-Platform application for create meal plans and a shopping list
            based on each meal plan. Contributed to and Managed code base using
            new framework – Flutter. Created a Cloud Database backend with
            Firebase and Firestore. Implemented Firebase Authentication to sign
            up and login users. Designed material-based UI and UX.
          </p>
          <h5>
            <a className="green" href="https://github.com/mwritter/Connecty">
              Connecty Web Application
            </a>
          </h5>
          <p>
            Web Application built with React and Redux as a social media site
            for developers to connect. As of now, users can sign up and login,
            and are directed to a default profile page. Created UI with React
            components. Created backend endpoints to interact with MLab
            database. Implemented JWT token based authentication for logging in
            registered users. Deployed on Heroku.
          </p>
          <h5>
            <a
              className="green"
              href="https://github.com/mwritter/Weather-Plus"
            >
              Weather Web Application
            </a>
          </h5>
          <p>
            Web Application built with React and Redux to get the temperature,
            pressure, and humidity from https://openweathermap.org/api, also
            uses Google Maps API to show searched location. Created UI with
            React components. Implemented API’s into React project. Managed web
            application state with Redux.
          </p>
          <h5>
            <a
              className="green"
              href="https://github.com/mwritter/Java-Member-Application"
            >
              Java Member Application
            </a>
          </h5>
          <p>
            Application for creating and maintaining groups with members. Worked
            with a team in an Agile environment to complete project. Managed
            issues, backlog, and assigning tasks to team members. Contributed to
            user friendly Graphical User Interface for project.
          </p>
          <h5>
            <a
              className="green"
              href="https://github.com/mwritter/Ticket_Event_Web_App"
            >
              Ticket Event Web Application
            </a>
          </h5>
          <p>
            Web application for creating events and assigning tickets. Created
            web application in .NET and C#. Implemented fully responsive design
            for desktop and mobile.
          </p>
        </section>
        <br />
        <section>
          <h4>Education</h4>
          <p>
            Valdosta State University, Valdosta, Ga – BS in Computer Information
            Systems GPA: 3.5
          </p>
        </section>
      </div>
    );
  }
}
