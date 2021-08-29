import React, { Component } from "react";

class Story extends Component {
  render() {
    const { content } = this.props;
    const { profileImg, userID, userName } = content;

    return (
      <div className="story-contents">
        <div className="gradient">
          <img src={profileImg} alt="스토리 프로필 사진" />
        </div>
        <div className="user-gradient">
          <p className="user-id">{userID}</p>
          <p className="user-name">{userName}</p>
        </div>
      </div>
    );
  }
}

export default Story;
