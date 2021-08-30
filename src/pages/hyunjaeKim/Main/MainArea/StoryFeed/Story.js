import React, { Component } from "react";

export default class Story extends Component {
  render() {
    const { user } = this.props;
    const { userID } = user;
    return (
      <li className="story">
        <div className="storyWrapper">
          <div className="profileWrapper large">
            <img
              src="/images/hyunjaeKim/wecode.png"
              alt="story_image"
              className="profileImg large"
            />
          </div>
          <strong className="userID storyID">{userID}</strong>
        </div>
      </li>
    );
  }
}
