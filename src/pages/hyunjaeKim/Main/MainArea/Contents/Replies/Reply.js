import React, { Component } from "react";

export default class Reply extends Component {
  render() {
    const { userName, content } = this.props;
    return (
      <li className="reply">
        <div className="replyDetail">
          <strong>
            <a href="#" className="userID">
              {userName}
            </a>
          </strong>
          <a href="#" className="comment hashtag">
            {content}
          </a>
        </div>
        <div className="icon heartBtn small_icon">
          <i className="far fa-heart"></i>
        </div>
      </li>
    );
  }
}
