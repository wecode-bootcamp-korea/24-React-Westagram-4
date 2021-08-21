import React, { Component } from "react";
import "./WritingComment.scss";

class WritingComment extends Component {
  // deleteComment = e => {
  //   let comment = e.targert.parentNode;
  //   comment.remove();
  // };
  render() {
    return (
      <div className="feeds-comment">
        <div className="commentDiv">
          <span className="comment-id">0hyun0hyun</span>
          <span className="comment-writing">{this.props.comment}</span>
        </div>
        <button onClick={this.deleteComment}>
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
