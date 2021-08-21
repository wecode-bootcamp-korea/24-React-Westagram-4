import React from "react";
import Aside from "../Aside/Aside";
import Nav from "../../../components/Nav/Nav";
import Comment from "./Comment";
import "./Main.scss";
import "../../../styles/common.scss";

class Main extends React.Component {
  render() {
    return (
      <section className="section-main">
        <Nav />
        <main className="main">
          <section className="feeds">
            <article className="feeds-each">
              <div className="feeds-profile">
                <img src="/images/taesooKim/tanggu.jpeg" alt="tanggu" />
                <span>ttsone_ss</span>
                <div className="more-icon">
                  <i className="fas fa-ellipsis-h"></i>
                </div>
              </div>
              <img src="/images/taesooKim/cookies.jpeg" alt="cookies" />
              <div className="reaction">
                <div className="full-heart-icon">
                  <i className="far fa-heart"></i>
                </div>
                <div className="heart-icon">
                  <i className="far fa-comment"></i>
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
