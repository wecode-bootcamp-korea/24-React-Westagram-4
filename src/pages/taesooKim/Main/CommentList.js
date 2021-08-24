import React, { Component } from "react";
import Comment from "./Comment";

export class CommentList extends Component {
  render() {
    const { comment } = this.props;
    return (
      <div>
        {comment.map(comment => {
          return (
            <Comment
              key={comment.id}
              name={comment.userName}
              comment={comment.content}
            />
          );
        })}
      </div>
    );
  }
}

export default CommentList;
