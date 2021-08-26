import React, { Component } from "react";

export default class ServiceDetails extends Component {
  state = {
    services: [
      "About",
      "Help",
      "Press",
      "API",
      "Jobs",
      "Privacy",
      "Terms",
      "Locations",
      "Top Accounts",
      "Hashtags",
      "Language",
    ],
  };

  render() {
    return (
      <div className="serviceDetails">
        <div className="serviceLinks">
          <ul className="serviceLink">
            {this.state.services.map((item, idx) => (
              <li key={idx}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="serviceLinks copyright">
          © 2021 INSTAGRAM FROM FACEBOOK
        </div>
      </div>
    );
  }
}
