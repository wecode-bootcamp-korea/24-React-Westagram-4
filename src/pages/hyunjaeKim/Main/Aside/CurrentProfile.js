import React, { Component } from "react";

export default class CurrentProfile extends Component {
  render() {
    return (
      <div className="profileChange">
        <div className="currnetProfile">
          <img
            src="/images/hyunjaeKim/myprofile.jpeg"
            alt="story_image"
            className="profileImg large"
          />
          <strong className="userID">hyun____jjae</strong>
        </div>
        <button className="Btn" type="button">
          Switch
        </button>
      </div>
    );
  }
}
