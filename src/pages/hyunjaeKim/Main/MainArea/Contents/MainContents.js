import React, { Component } from "react";

export default class MainContents extends Component {
  render() {
    return (
      <div className="mainContents">
        <button className="icon tagged" type="button"></button>
        <button className="icon showNext" type="button"></button>
        <img
          src="/images/hyunjaeKim/mainpage.jpg"
          alt="content_image"
          className="contentImg"
        />
      </div>
    );
  }
}
