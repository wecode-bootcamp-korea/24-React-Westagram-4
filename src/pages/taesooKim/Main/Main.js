import React from "react";
import Aside from "../Aside/Aside";
import Comment from "./Comment";
import "./Main.scss";
import "../../../styles/common.scss";

class Main extends React.Component {
  render() {
    return (
      <section className="Main">
        <header>
          <nav className="navbar">
            <div className="westa-container">
              <a className="westa-logo" href="/">
                <img src="/images/taesooKim/instagram.png" alt="westagram" />
              </a>
              <a className="westa-title" href="/">
                <h1>Westagram</h1>
              </a>
            </div>
            <div className="search-container">
              <input className="search-bar" type="text" />
              <div className="search-content">
                <span className="search">검색</span>
                <div className="search-icon">
                  <i class="fas fa-search"></i>
                </div>
                <div className="times-icon">
                  <i class="fas fa-times-circle"></i>
                </div>
              </div>
              <div className="suggestions-cap"></div>
              <div className="suggestions-container">
                <ul className="suggestions-list"></ul>
              </div>
            </div>
            <div className="mypage-container">
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                alt="explore"
              />
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                alt="heart"
              />
              <img
                className="profile-img"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
                alt="profile"
              />
              <div className="profile-cap"></div>
              <div className="profile-container">
                <ul className="profile-list">
                  <li>
                    <div className="profile-icon">
                      <i class="far fa-user-circle"></i>
                    </div>
                    <span>프로필</span>
                  </li>
                  <li>
                    <div className="bookmark-icon">
                      <i class="far fa-bookmark"></i>
                    </div>
                    <span>저장됨</span>
                  </li>
                  <li>
                    <div className="cog-icon">
                      <i class="fas fa-cog"></i>
                    </div>
                    <span>설정</span>
                  </li>
                  <li>
                    <p>로그아웃</p>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <main className="main">
          <section className="feeds">
            <article className="feeds-each">
              <div className="feeds-profile">
                <img src="/images/taesooKim/tanggu.jpeg" alt="tanggu" />
                <span>ttsone_ss</span>
                <div className="more-icon">
                  <i class="fas fa-ellipsis-h"></i>
                </div>
              </div>
              <img src="/images/taesooKim/cookies.jpeg" alt="cookies" />
              <div className="reaction">
                <div className="full-heart-icon">
                  <i class="fas fa-heart"></i>
                </div>
                <div className="heart-icon">
                  <i class="far fa-comment"></i>
                </div>
                <div className="plane-icon">
                  <i class="far fa-paper-plane"></i>
                </div>
                <div className="bookmark-icon">
                  <i class="far fa-bookmark"></i>
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
              <Comment />
            </article>
          </section>
          <Aside />
        </main>
      </section>
    );
  }
}

export default Main;
