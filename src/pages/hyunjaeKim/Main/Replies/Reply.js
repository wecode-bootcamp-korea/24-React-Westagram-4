import React, { Component } from "react";

export default class Reply extends Component {
  render() {
    return (
      <li className="reply">
        <div className="replyDetail">
          <strong>
            <a href="#" className="userID">
              {this.props.userName}
            </a>
          </strong>
          <a href="#" className="comment hashtag">
            {this.props.content}
          </a>
        </div>
        <div className="icon heartBtn small_icon">
          <i className="far fa-heart"></i>
        </div>
      </li>
    );
  }
}
