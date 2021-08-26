import React, { Component } from "react";
import Reply from "./Reply";

export default class Replies extends Component {
  handleDelete = reply => {
    this.props.onDelete(reply);
  };

  render() {
    return (
      <ul>
        {this.props.content.map(reply => (
          <Reply
            reply={reply}
            onDelete={this.handleDelete}
            userName={reply.userName}
            comment={reply.comment}
          />
        ))}
      </ul>
    );
  }
}
