import React, { Component } from "react";
import Story from "./Story";

export default class StoryFeed extends Component {
  state = {
    users: [],
    clicked: false,
  };

  componentDidMount() {
    fetch("/data/storyData.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(users => this.setState(users));
  }
  handleClick = () => {
    this.setState({ ...this.state, clicked: true });
  };

  // handleReset = () => {
  //   const { clicked } = this.state;
  //   const sign = false;
  //   if (clicked === true) {
  //     this.setState(prev => ({ ...prev, clicked: sign }));
  //   }
  //   console.log(this.state);
  // };

  render() {
    const { users, clicked } = this.state;
    return (
      <section className="storyFeed">
        <div className="content-box">
          <ul className={`stories ${clicked ? "move" : ""}`}>
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
