import React, { Component } from "react";

export default class CommentForm extends Component {
  state = {
    isActive: false,
  };

  formRef = React.createRef();
  inputRef = React.createRef();

  onSubmit = event => {
    event.preventDefault();
    const comment = this.inputRef.current.value;
    comment && this.props.onSubmit(comment);
    this.formRef.current.reset();
  };

  handleButton = () => {
    const comment = this.inputRef.current.value;
    this.setState({ isActive: comment.length > 0 ? true : false });
  };

  render() {
    return (
      <form
        ref={this.formRef}
        className="commentForm content-box"
        onSubmit={this.onSubmit}
      >
        <button className="icon emoji" type="button"></button>
        <input
          ref={this.inputRef}
          type="text"
          className="commentInput"
          placeholder="Add a comment..."
          onChange={this.handleButton}
        />
        <button
          type="submit"
          className={
            this.state.isActive ? "Btn commentPost" : "Btn commentPost inactive"
          }
        >
          Post
        </button>
      </form>
    );
  }
}
