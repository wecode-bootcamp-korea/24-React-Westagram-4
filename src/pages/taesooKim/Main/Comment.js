import React, { Component } from "react";

export class Comment extends Component {
  render() {
    const { name, comment } = this.props;
    return (
      <li>
        <span>{name}</span>
        <p>{comment}</p>;
        <div className="heart-icon">
          <i className="far fa-heart"></i>
        </div>
        <div className="trash-icon">
          <i className="far fa-trash-alt"></i>
        </div>
      </li>
    );
  }
}

export default Comment;
