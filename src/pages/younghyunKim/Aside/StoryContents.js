import React, { Component } from "react";
import Story from "./Story";

class StoryContents extends Component {
  state = {
    storyFeeds: [],
  };

  componentDidMount() {
    fetch("/data/storyDatayounghyun.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          storyFeeds: data,
        });
      });
  }

  render() {
    const { storyFeeds } = this.state;

    return (
      <div>
        {storyFeeds.map(content => (
          <div className="story-down">
            <Story content={content} />
          </div>
        ))}
      </div>
    );
  }
}

export default StoryContents;
