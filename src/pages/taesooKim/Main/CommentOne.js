import React, { Component } from "react";

export class CommentOne extends Component {
  render() {
    const comm = this.props.comm;
    return <div key={comm.toString()}>{comm}</div>;
  }
}

export default CommentOne;
