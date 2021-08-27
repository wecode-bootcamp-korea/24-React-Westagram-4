import React, { Component } from "react";
import Story from "./Story";

export default class StoryFeed extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    fetch("/data/storyData.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(users => this.setState(users));
  }

  render() {
    const { users } = this.state;
    return (
      <section className="storyFeed">
        <ul className="stories content-box">
          {users.map((user, idx) => (
            <Story user={user} key={idx} />
          ))}
        </ul>
        <button className="showNext icon"></button>
      </section>
    );
  }
}
