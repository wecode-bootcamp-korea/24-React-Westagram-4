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

  // 삭제할 함수(부모요소에서 받아온 함수를 여기에 넣자, 인자를 프롭스로 받아온 것으로 넣자(li id값))

  render() {
    const { name, content, id, deleteComment } = this.props;
    return (
      <li id={id}>
        <span>{name}</span>
        <p>{content}</p>
        <BtnLike
          isClicked={this.state.isClicked}
          handleClick={this.handleClick}
        />
        <div className="trash-icon">
          <i className="far fa-trash-alt" onClick={deleteComment}></i>
        </div>
      </li>
    );
  }
}

export default Comment;
