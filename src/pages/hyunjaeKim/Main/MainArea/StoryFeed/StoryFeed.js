import React, { Component } from "react";
import Story from "./Story";

export default class StoryFeed extends Component {
  state = {
    users: [],
    scrollState: 0,
  };

  componentDidMount() {
    fetch("/data/storyData.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(users => this.setState(users));
  }
  handleClick = () => {
    this.setState({
      ...this.state,
      scrollState: this.state.scrollState - 200,
    });
  };

  render() {
    const { users } = this.state;
    return (
      <section className="storyFeed">
        <div className="content-box">
          <ul
            className="stories"
            style={{ marginLeft: `${this.state.scrollState}px` }}
          >
            {users.map((user, idx) => (
              <Story user={user} key={idx} />
            ))}
          </ul>
        </div>
        <button className="showNext icon" onClick={this.handleClick}></button>
      </section>
    );
  }
}
