import React, { Component } from "react";

export default class ContentHeader extends Component {
  render() {
    return (
      <header className="contentHeader content-box">
        <div className="writerInfo">
          <div className="profileWrapper medium">
            <img
              src="/images/hyunjaeKim/wecode.png"
              alt="story_image"
              className="profileImg medium"
            />
          </div>
          <strong className="userID">
            <a href="#">yakiiikim_</a>
          </strong>
        </div>
        <button type="button" className="icon details"></button>
      </header>
    );
  }
}
