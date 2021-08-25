import React, { Component } from "react";

export default class SurviceDetails extends Component {
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
            {this.state.services.map(item => (
              <li>
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
