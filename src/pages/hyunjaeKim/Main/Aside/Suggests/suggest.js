import React, { Component } from "react";

export default class Suggest extends Component {
  render() {
    const { userID } = this.props.user;
    return (
      <div className="suggestedProfile">
        <div className="otherProfile">
          <div className="profileWrapper medium">
            <img
              src="/images/hyunjaeKim/wecode.png"
              alt="story_image"
              className="profileImg medium"
            />
          </div>
          <div className="suggestProfileDetails">
            <strong className="userID">{userID}</strong>
            <span className="profileDesc">Follows you</span>
          </div>
        </div>
        <button className="Btn" type="button">
          Follow
        </button>
      </div>
    );
  }
}
