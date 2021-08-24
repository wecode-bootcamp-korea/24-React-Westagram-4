import React, { Component } from "react";
import "./CommentForm.scss";

class CommentForm extends Component {
  inputRef = React.createRef();

  pushComment = (e, feed) => {
    e.preventDefault();
    const plusComment = this.inputRef.current.value;
    plusComment && this.props.onSubmit(plusComment, feed);
    this.inputRef.current.value = "";
  };

  render() {
    return (
      <form
        className="comment"
        onSubmit={e => {
          this.pushComment(e, this.props.feed);
        }}
      >
        <input
          ref={this.inputRef}
          type="text"
          className="typing-comment"
          placeholder="댓글 달기..."
        />
        <button className="comment-button">게시</button>
      </form>
    );
  }
}

export default CommentForm;
