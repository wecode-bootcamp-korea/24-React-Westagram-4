import React, { Component } from "react";
import Story from "./Story";

export default class StoryFeed extends Component {
  state = {
    users: [
      { id: 1, userID: "koung_bear" },
      { id: 2, userID: "romanyeye..." },
      { id: 3, userID: "wannabeki..." },
      { id: 4, userID: "kimcheodol" },
      { id: 5, userID: "sbc_yuzawa" },
      { id: 6, userID: "chewhee_l..." },
      { id: 7, userID: "0oo0o0y" },
      { id: 8, userID: "euddeme_" },
    ],
  };

  render() {
    const { users } = this.state;
    return (
      <section className="storyFeed">
        <ul className="stories content-box">
          {users.map(user => (
            <Story user={user} />
          ))}
        </ul>
        <button className="showNext icon"></button>
      </section>
    );
  }
}
