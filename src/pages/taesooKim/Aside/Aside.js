import React, { Component } from "react";
import "./Aside.scss";
import { storyData } from "./storyData";
import { recommData } from "./recommData";

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
              {storyData.map(el => {
                return (
                  <li key={el.id}>
                    <img src={el.image} alt={el.nickName} />
                    <div className="story-namebox">
                      <p className="story-username">{el.userName}</p>
                      <p className="story-time">{el.updateTime}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="recomms">
            <div className="recomm-title">
              <span>회원님을 위한 추천</span>
              <span>모두 보기</span>
            </div>
            <ul className="recomm-list">
              {recommData.map(el => {
                return (
                  <li key={el.id}>
                    <img src={el.image} alt={el.nickName} />
                    <div className="recomm-namebox">
                      <p className="recomm-username">{el.userId}</p>
                      <p className="recomm-others">{el.recommOthers}</p>
                    </div>
                    <p className="recomm-follow">{el.follow}</p>
                  </li>
                );
              })}
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
