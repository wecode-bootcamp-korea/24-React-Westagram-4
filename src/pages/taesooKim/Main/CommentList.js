import React, { Component } from "react";
import Comment from "./Comment";

export class CommentList extends Component {
  render() {
    const { comment, deleteComment } = this.props;
    return (
      <div>
        {comment.map(comment => {
          return (
            <Comment
              key={comment.id}
              id={comment.id}
              name={comment.userName}
              content={comment.content}
              deleteComment={deleteComment}
            />
          );
        })}
      </div>
    );
  }
}

export default CommentList;
