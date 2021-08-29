import React, { Component } from "react";
import Content from "./Content";

class RecommendContents extends Component {
  state = {
    storyFeeds: [],
  };

  componentDidMount() {
    fetch("/data/suggestDatayounghyun.json", {
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
      <div className="recommend-down">
        {storyFeeds.map(content => (
          <Content content={content} />
        ))}
      </div>
    );
  }
}

export default RecommendContents;
