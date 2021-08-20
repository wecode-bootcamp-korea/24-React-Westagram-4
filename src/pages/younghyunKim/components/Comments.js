import React, { Component } from "react";

class Comments extends Component {
  inputRef = React.createRef();

  pushComment = e => {
    e.preventDefault();
    const plusComment = this.inputRef.current.value;
    plusComment && this.props.onAdd(plusComment);
  };

  render() {
    return (
      <form className="comment" onSubmit={this.pushComment}>
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

export default Comments;
