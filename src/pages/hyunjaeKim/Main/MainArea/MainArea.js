import React, { Component } from "react";
import Contents from "./Contents/Contents";
import StoryFeed from "./StoryFeed/StoryFeed";

export default class MainArea extends Component {
  state = {
    feeds: [],
  };

  componentDidMount() {
    fetch("http://localhost:3000/data/commentData.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          feeds: data,
        });
      });
  }

  handleAdd = (comment, content) => {
    const commentList = [
      ...content.comments,
      { id: Date.now(), userName: "hyun__jjae", comment },
    ];
    const newFeed = { ...content, comments: commentList };
    const feeds = this.state.feeds.map(item => {
      if (item.id === content.id) {
        return newFeed;
      }
      return item;
    });
    this.setState({ feeds });
  };

  handleDelete = (reply, feed) => {
    const commentList = feed.comments.filter(item => item.id !== reply.id);
    const newFeed = { ...feed, comments: commentList };
    const feeds = this.state.feeds.map(item => {
      if (item.id === feed.id) {
        return newFeed;
      }
      return item;
    });
    this.setState({ feeds });
  };

  render() {
    return (
      <div className="mainArea">
        <StoryFeed />
        <Contents
          feeds={this.state.feeds}
          onSubmit={this.handleAdd}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}
