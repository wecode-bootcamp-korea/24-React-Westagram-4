import React, { Component } from "react";
import Nav from "../../../components/Nav/Nav";
import AllFeeds from "../components/AllFeeds";
import Aside from "../Aside/Aside";
import "./Main.scss";

class MainYoungHyun extends Component {
  state = {
    feeds: [],
  };

  componentDidMount() {
    fetch("http://localhost:3000/data/commentDatayounghyun.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          feeds: data,
        });
      });
  }

  handleAdd = (plusComment, feed) => {
    let comments = [
      ...feed.comments,
      { id: Date.now(), userName: "0hyun0hyun", comment: plusComment },
    ];
    let newFeed = { ...feed, comments };
    let feeds = this.state.feeds.map(item => {
      if (feed.id === item.id) {
        return newFeed;
      } else {
        return item;
      }
    });
    this.setState({ feeds });
  };

  handleDelete = (content, feed) => {
    let comments = feed.comments.filter(item => item.id !== content.id);
    let newFeed = { ...feed, comments };
    let feeds = this.state.feeds.map(item => {
      if (feed.id === item.id) {
        return newFeed;
      } else {
        return item;
      }
    });
    this.setState({ feeds });
  };

  render() {
    return (
      <div className="main">
        <Nav />
        <div className="margin-value">
          <AllFeeds
            feeds={this.state.feeds}
            onDelete={this.handleDelete}
            onAdd={this.handleAdd}
          />
          <Aside />
        </div>
      </div>
    );
  }
}

export default MainYoungHyun;
