import React, { Component } from "react";

export default class Reply extends Component {
  state = {
    isRed: false,
  };

  onClick = () => {
    this.props.onDelete(this.props.reply);
  };

  handleBtn = () => {
    this.setState({ isRed: !this.state.isRed });
  };

  render() {
    const { reply } = this.props;
    return (
      <li className="reply">
        <div className="replyDetail" onClick={this.onClick}>
          <strong>
            <a href="#" className="userID">
              {reply.userName}
            </a>
          </strong>
          <a href="#" className="comment hashtag">
            {reply.comment}
          </a>
        </div>
        <div className="icon heartBtn small_icon" onClick={this.handleBtn}>
          <i
            className={this.state.isRed ? "fas fa-heart" : "far fa-heart "}
          ></i>
        </div>
      </li>
    );
  }
}
