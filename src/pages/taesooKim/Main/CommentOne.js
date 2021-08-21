import React, { Component } from "react";

export class CommentOne extends Component {
  render() {
    const comment = this.props.comment;
    return <div key={comment.toString()}>{comment}</div>;
  }
}

export default CommentOne;
