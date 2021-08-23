import React, { Component } from "react";
import BtnLike from "./BtnLike";

export class Reaction extends Component {
  constructor() {
    super();
    this.state = {
      isClicked: false,
    };
  }

  handleClick = () => {
    this.setState({ isClicked: !this.state.isClicked });
  };

  render() {
    return (
      <div>
        <div className="reaction">
          <BtnLike
            isClicked={this.state.isClicked}
            handleClick={this.handleClick}
          />
          <div className="plane-icon">
            <i class="far fa-comment"></i>
          </div>
          <div className="plane-icon">
            <i className="far fa-paper-plane"></i>
          </div>
          <div className="bookmark-icon">
            <i className="far fa-bookmark"></i>
          </div>
        </div>
        <div className="like">
          <img src="/images/taesooKim/orosy.jpg" alt="orosy" />
          <p className="many-likes">
            <span>orosy.ts</span>님 <span>외 328명</span>이 좋아합니다
          </p>
        </div>
        <div className="feed-description">
          <span className="username">ttsone_ss</span>이 쿠키들의 정체는
          무엇일까요?...
          <span className="more">더 보기</span>
        </div>
      </div>
    );
  }
}

export default Reaction;
