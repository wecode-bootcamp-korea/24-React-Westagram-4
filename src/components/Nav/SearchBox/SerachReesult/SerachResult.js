import React, { Component } from "react";

export default class SerachResult extends Component {
  render() {
    return (
      <div className="searchResultContainer disappear">
        <div className="searchWrapper">
          <div className="searchComponent">
            <div className="searchResultBox">
              <div className="profileWrapper medium">
                <img
                  src="./assets/images/wecode.png"
                  alt="스토리 프로필 사진"
                  className="profileImg medium"
                />
              </div>
              <div className="searchDetail">
                <strong className="userID">jenny0305</strong>
                <p class="profileDesc">hi im jenny💙</p>
              </div>
            </div>
          </div>
        </div>
        <div className="searchResultBoxShadow"></div>
        <div className="search-squre"></div>
      </div>
    );
  }
}
