import React, { Component } from "react";
import Comment from "./Comment";

export class CommentList extends Component {
  render() {
    const { commentList, newComment } = this.props;
    return (
      <div>
        {commentList.map(comment => {
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
        {newComment.map(comment => {
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
