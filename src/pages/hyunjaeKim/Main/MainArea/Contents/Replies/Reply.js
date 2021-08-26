import React, { Component } from "react";

export default class Reply extends Component {
  onClick = () => {
    this.props.onDelete(this.props.reply);
  };

  render() {
    const { userName, comment } = this.props;
    return (
      <li className="reply" onClick={this.onClick}>
        <div className="replyDetail">
          <strong>
            <a href="#" className="userID">
              {userName}
            </a>
          </strong>
          <a href="#" className="comment hashtag">
            {comment}
          </a>
        </div>
        <div className="icon heartBtn small_icon">
          <i className="far fa-heart"></i>
        </div>
      </li>
    );
  }
}
