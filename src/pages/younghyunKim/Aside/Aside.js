import React, { Component } from "react";
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
          <div>
            <p className="user-id">0hyun0hyun</p>
            <p className="user-name">김영현</p>
          </div>
        </div>
        <div className="story">
          <div className="story-title">
            <span>스토리</span>
            <span>모두 보기</span>
          </div>
          <div className="story-down">
            <div className="story-contents">
              <div className="gradient">
                <img
                  src="images/younghyunKim/jenny.jpeg"
                  alt="스토리 프로필 사진"
                />
              </div>
              <div>
                <p className="user-id">jenny0305</p>
                <p className="user-name">hi im jenny💙</p>
              </div>
            </div>
            <div className="story-contents">
              <div className="gradient">
                <img
                  src="images/younghyunKim/woziin.jpeg"
                  alt="스토리 프로필 사진"
                />
              </div>
              <div>
                <p className="user-id">wooziin</p>
                <p className="user-name">안경박사 우진👓</p>
              </div>
            </div>
            <div className="story-contents">
              <div className="gradient">
                <img
                  src="images/younghyunKim/go.jpeg"
                  alt="스토리 프로필 사진"
                />
              </div>
              <div>
                <p className="user-id">gomikyo</p>
                <p className="user-name">miko</p>
              </div>
            </div>
            <div className="story-contents">
              <div className="gradient">
                <img
                  src="images/younghyunKim/local.jpeg"
                  alt="스토리 프로필 사진"
                />
              </div>
              <div>
                <p className="user-id">lockalkim</p>
                <p className="user-name">현지인</p>
              </div>
            </div>
            <div className="story-contents">
              <div className="gradient">
                <img
                  src="images/younghyunKim/177919409_466024897787486_7015720230700328365_n.jpeg"
                  alt="스토리 프로필 사진"
                />
              </div>
              <div>
                <p className="user-id">psg</p>
                <p className="user-name">paris🇫🇷</p>
              </div>
            </div>
            <div className="story-contents">
              <div className="gradient">
                <img
                  src="images/younghyunKim/177919409_466024897787486_7015720230700328365_n.jpeg"
                  alt="스토리 프로필 사진"
                />
              </div>
              <div>
                <p className="user-id">0hyun0hyun</p>
                <p className="user-name">김영현</p>
              </div>
            </div>
          </div>
        </div>
        <div className="recommend">
          <div className="recommend-title">
            <span>회원님을 위한 추천</span>
            <span>모두 보기</span>
          </div>
          <div className="recommend-down">
            <div className="recommend-contents">
              <img src="images/younghyunKim/paris.jpeg" alt="추천 사진" />
              <div>
                <p className="user-id">psg</p>
                <p className="user-name">0hyun0hyun님 외 2명이...</p>
              </div>
            </div>
            <div className="recommend-contents">
              <img src="images/younghyunKim/mach.jpeg" alt="추천 사진" />
              <div>
                <p className="user-id">manchesterunited</p>
                <p className="user-name">0hyun0hyun님 외 2명이...</p>
              </div>
            </div>
            <div className="recommend-contents">
              <img
                src="images/younghyunKim/177919409_466024897787486_7015720230700328365_n.jpeg"
                alt="추천 사진"
              />
              <div>
                <p className="user-id">jeenny</p>
                <p className="user-name">0hyun0hyun님 외 2명이...</p>
              </div>
            </div>
            <div className="recommend-contents">
              <img
                src="images/younghyunKim/177919409_466024897787486_7015720230700328365_n.jpeg"
                alt="추천 사진"
              />
              <div>
                <p className="user-id">0hyun0hyun</p>
                <p className="user-name">0hyun0hyun님 외 2명이...</p>
              </div>
            </div>
            <div className="recommend-contents">
              <img
                src="images/younghyunKim/177919409_466024897787486_7015720230700328365_n.jpeg"
                alt="추천 사진"
              />
              <div>
                <p className="user-id">0hyun0hyun</p>
                <p className="user-name">0hyun0hyun님 외 2명이...</p>
              </div>
            </div>
            <div className="recommend-contents">
              <img
                src="images/younghyunKim/177919409_466024897787486_7015720230700328365_n.jpeg"
                alt="추천 사진"
              />
              <div>
                <p className="user-id">0hyun0hyun</p>
                <p className="user-name">0hyun0hyun님 외 2명이...</p>
              </div>
            </div>
          </div>
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
