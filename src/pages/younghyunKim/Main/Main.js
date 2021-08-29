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
    fetch("/data/commentDatayounghyun.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          feeds: data,
        });
      });
  }

  render() {
    return (
      <div className="main">
        <Nav />
        <div className="margin-value">
          <AllFeeds feeds={this.state.feeds} />
          <Aside />
        </div>
      </div>
    );
  }
}

export default MainYoungHyun;
