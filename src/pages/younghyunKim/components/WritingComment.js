import React, { Component } from "react";
import "./WritingComment.scss";

class WritingComment extends Component {
  handleDelete = e => {
    this.props.onDelete(this.props.content);
  };

  render() {
    const { username, comment } = this.props;
    return (
      <div className="feeds-comment">
        <div className="commentDiv">
          <span className="comment-id">{username}</span>
          <span className="comment-writing">{comment}</span>
        </div>
        <button onClick={this.handleDelete}>
          <i className="far fa-times-circle"></i>
        </button>
        <button>
          <i className="far fa-heart"></i>
        </button>
      </div>
    );
  }
}

export default WritingComment;
