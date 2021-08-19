import React from "react";
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
              <div className="feed-comment">
                <ul className="comments">
                  <li>
                    <p>
                      <span>orosy.ts</span>저는 아직 받으려면 멀었네요😂
                    </p>
                    <div className="full-heart-icon">
                      <i class="far fa-heart"></i>
                    </div>
                    <div className="trash-icon">
                      <i class="far fa-trash-alt"></i>
                    </div>
                  </li>
                </ul>
              </div>
              <p className="post-time">42분 전</p>
              <div className="write-comments">
                <form className="comment-form">
                  <input
                    className="comment-post"
                    type="text"
                    placeholder="댓글 달기..."
                  />
                  <button className="btn-post">게시</button>
                </form>
              </div>
            </article>
          </section>
          <aside className="main-right">
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
          </aside>
        </main>
      </section>
    );
  }
}

export default Main;
