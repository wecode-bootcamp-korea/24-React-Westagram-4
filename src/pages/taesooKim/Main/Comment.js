import React, { Component } from "react";
import BtnLike from "./BtnLike";

export class Comment extends Component {
  constructor() {
    super();
    this.state = {
      isClicked: false,
    };
  }

  handleClick = () => {
    this.setState({ isClicked: !this.state.isClicked });
  };

  handleDelete = () => {
    this.props.deleteComment(this.props.id);
  };

  render() {
    const { name, content, id } = this.props;
    return (
      <li id={id}>
        <span>{name}</span>
        <p>{content}</p>
        <BtnLike
          isClicked={this.state.isClicked}
          handleClick={this.handleClick}
        />
        <div className="trash-icon">
          <i className="far fa-trash-alt" onClick={this.handleDelete}></i>
        </div>
      </li>
    );
  }
}

export default Comment;
