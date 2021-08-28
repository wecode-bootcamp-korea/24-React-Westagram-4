import React, { Component } from "react";

export default class SearchResult extends Component {
  render() {
    const { user } = this.props;
    return (
      <div className="searchResultBox">
        <div className="profileWrapper medium">
          <img
            src={user.picture}
            alt="스토리 프로필 사진"
            className="profileImg medium"
          />
        </div>
        <div className="searchDetail">
          <strong className="userID">{user.id}</strong>
          <p className="profileDesc">{user.desc}</p>
        </div>
      </div>
    );
  }
}
