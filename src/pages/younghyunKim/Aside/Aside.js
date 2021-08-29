import React, { Component } from "react";
import RecommendContents from "./RecommendContents";
import StoryContents from "./StoryContents";
import "./Aside.scss";

export default class Aside extends Component {
  render() {
    return (
      <div className="main-right">
        <div className="user">
          <img
            src="images/younghyunKim/177919409_466024897787486_7015720230700328365_n.jpeg"
            alt="사용자 프로필 사진"
          />
          <div className="user-idname">
            <p className="user-id">0hyun0hyun</p>
            <p className="user-name">김영현</p>
          </div>
        </div>
        <div className="story">
          <div className="story-title">
            <span>스토리</span>
            <span>모두 보기</span>
          </div>
          <StoryContents />
        </div>
        <div className="recommend">
          <div className="recommend-title">
            <span>회원님을 위한 추천</span>
            <span>모두 보기</span>
          </div>
          <RecommendContents />
        </div>
        <div className="information">
          <p>
            instagram 정보 ・ 지원 ・ 홍보 센터 ・ API ・ 채용 정보 ・
            개인정보처리방침 ・ 약관 ・ 디렉터리 ・ 프로필 ・ 해시태그 ・ 언어
          </p>
          <p>ⓒ 2021 INSTAGRAM</p>
        </div>
      </div>
    );
  }
}
