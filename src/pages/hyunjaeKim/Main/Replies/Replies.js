import React, { Component } from "react";
import Reply from "./Reply";

export default class Replies extends Component {
  render() {
    return (
      <ul>
        {this.props.replies.map(reply => (
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
