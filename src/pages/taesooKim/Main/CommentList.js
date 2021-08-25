import React, { Component } from "react";
import Comment from "./Comment";

export class CommentList extends Component {
  render() {
    const { comment, newComment } = this.props;
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
        {newComment.map(comment => {
          return (
            <Comment
              key={comment.id}
              name={comment.userName}
              comment={comment.content}
              isUser={comment.isUser}
            />
          );
        })}
      </div>
    );
  }
}

export default CommentList;
