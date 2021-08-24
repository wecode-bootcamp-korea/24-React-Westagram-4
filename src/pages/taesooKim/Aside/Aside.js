import React, { Component } from "react";
import "./Aside.scss";

class Aside extends Component {
  render() {
    return (
      <aside className="Aside">
        <div className="main-right">
          <div className="my-profile">
            <img src="/images/taesooKim/tanggu.jpeg" alt="tanggu" />
            <div className="my-description">
              <p className="profile-name">ttsone_ss</p>
              <p className="profile-description">태연 TAEYEON</p>
            </div>
          </div>
          <div className="stories">
            <div className="story-title">
              <span>스토리</span>
              <span>모두 보기</span>
            </div>
            <ul className="story-update">
              <li>
                <img src="/images/taesooKim/tanggu.jpeg" alt="tanggu" />
                <div className="story-namebox">
                  <p className="story-username">ttsone_ss</p>
                  <p className="story-time">16분 전</p>
                </div>
              </li>
              <li>
                <img src="/images/taesooKim/tanggu.jpeg" alt="tanggu" />
                <div className="story-namebox">
                  <p className="story-username">ttsone_ss</p>
                  <p className="story-time">1시간 전</p>
                </div>
              </li>
              <li>
                <img src="/images/taesooKim/tanggu.jpeg" alt="tanggu" />
                <div className="story-namebox">
                  <p className="story-username">ttsone_ss</p>
                  <p className="story-time">3시간 전</p>
                </div>
              </li>
              <li>
                <img src="/images/taesooKim/tanggu.jpeg" alt="tanggu" />
                <div className="story-namebox">
                  <p className="story-username">ttsone_ss</p>
                  <p className="story-time">20시간 전</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="recomms">
            <div className="recomm-title">
              <span>회원님을 위한 추천</span>
              <span>모두 보기</span>
            </div>
            <ul className="recomm-list">
              <li>
                <img src="/images/taesooKim/orosy.jpg" alt="orosy" />
                <div className="recomm-namebox">
                  <p className="recomm-username">orosy.ts</p>
                  <p className="recomm-others">wecode_bootcamp님 외...</p>
                </div>
                <p className="recomm-follow">팔로우</p>
              </li>
              <li>
                <img src="/images/taesooKim/orosy.jpg" alt="orosy" />
                <div className="recomm-namebox">
                  <p className="recomm-username">orosy.ts</p>
                  <p className="recomm-others">회원님을 추천</p>
                </div>
                <p className="recomm-follow">팔로우</p>
              </li>
              <li>
                <img src="/images/taesooKim/orosy.jpg" alt="orosy" />
                <div className="recomm-namebox">
                  <p className="recomm-username">orosy.ts</p>
                  <p className="recomm-others">wecode_bootcamp님 외...</p>
                </div>
                <p className="recomm-follow">팔로우</p>
              </li>
            </ul>
          </div>
          <div className="westa-info">
            <p>
              Instagram 정보∙지원∙홍보 센터∙API∙채용
              정보∙개인정보처리방침∙약관∙디렉터리∙프로필∙해시태그∙언어
            </p>
          </div>
          <div className="westa-year">
            <p>© 2021 WESTAGRAM</p>
          </div>
        </div>
      </aside>
    );
  }
}

export default Aside;
