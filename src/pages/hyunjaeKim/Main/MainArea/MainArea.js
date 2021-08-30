import React, { Component } from "react";
import Contents from "./Contents/Contents";
import StoryFeed from "./StoryFeed/StoryFeed";

export default class MainArea extends Component {
  render() {
    return (
      <div className="mainArea">
        <StoryFeed />
        <Contents />
      </div>
    );
  }
}
