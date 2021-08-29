import React, { Component } from "react";

class Content extends Component {
  render() {
    const { content } = this.props;
    const { profileImg, userName, comments } = content;
    return (
      <div className="recommend-contents">
        <img src={profileImg} alt="추천 사진" />
        <div>
          <p className="user-id">{userName}</p>
          <p className="user-name">{comments}</p>
        </div>
      </div>
    );
  }
}

export default Content;
