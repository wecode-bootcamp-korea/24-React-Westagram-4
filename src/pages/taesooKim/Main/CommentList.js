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
              comment={comment}
              key={comment.id}
              id={comment.id}
              name={comment.userName}
              content={comment.content}
            />
          );
        })}
      </div>
    );
  }
}

export default CommentList;
