import React, { Component } from "react";

class WritingComment extends Component {
  render() {
    return (
      <div className="commentDiv">
        <span className="comment-id">0hyun0hyun</span>
        <span className="comment-writing">
          {this.props.comments.map(comment => (comment = { plusComment }))}
        </span>
        <button>
          <i class="far fa-times-circle"></i>
        </button>
        <button>
          <i class="far fa-heart"></i>
        </button>
      </div>
    );
  }
}

export default WritingComment;
