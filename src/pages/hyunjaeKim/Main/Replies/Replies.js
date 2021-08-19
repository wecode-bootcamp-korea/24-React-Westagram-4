import React, { Component } from "react";
import Reply from "./Reply";

export default class Replies extends Component {
  state = {
    replies: [
      { id: 1, userName: "chillin1980", content: "@jis20da" },
      { id: 2, userName: "gumbong2", content: "@funky1o.ve" },
    ],
  };

  render() {
    return (
      <ul>
        {this.state.replies.map(reply => (
          <Reply
            reply={reply}
            userName={reply.userName}
            content={reply.content}
          />
        ))}
      </ul>
    );
  }
}
