import React, { Component } from "react";

export class CommentOne extends Component {
  render() {
    const comm = this.props.comm;
    return <p className={comm.toString()}>{comm}</p>;
  }
}

export default CommentOne;
