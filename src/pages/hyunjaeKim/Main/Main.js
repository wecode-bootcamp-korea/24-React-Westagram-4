import React, { Component } from "react";
import Aside from "./Aside/Aside";
import Replies from "./Replies/Replies";
import "./Main.scss";

class MainHyunJae extends Component {
  render() {
    return (
      <>
        <div className="containerCenter">
          <div className="mainArea">
            <section className="storyFeed">
              <ul className="stories content-box">
                <li className="story">
                  <div className="storyWrapper">
                    <div className="profileWrapper large">
                      <img
                        src="/images/hyunjaeKim/wecode.png"
                        alt="story_image"
                        className="profileImg large"
                      />
                    </div>
                    <strong className="userID storyID">koung_bear</strong>
                  </div>
                </li>
                <li className="story">
                  <div className="storyWrapper">
                    <div className="profileWrapper large">
                      <img
                        src="/images/hyunjaeKim/wecode.png"
                        alt="story_image"
                        className="profileImg large"
                      />
                    </div>
                    <strong className="userID storyID">romanyeye...</strong>
                  </div>
                </li>
                <li className="story">
                  <div className="storyWrapper">
                    <div className="profileWrapper large">
                      <img
                        src="/images/hyunjaeKim/wecode.png"
                        alt="story_image"
                        className="profileImg large"
                      />
                    </div>
                    <strong className="userID storyID">wannabeki...</strong>
                  </div>
                </li>
                <li className="story">
                  <div className="storyWrapper">
                    <div className="profileWrapper large">
                      <img
                        src="/images/hyunjaeKim/wecode.png"
                        alt="story_image"
                        className="profileImg large"
                      />
                    </div>
                    <strong className="userID storyID">kimcheodol</strong>
                  </div>
                </li>
                <li className="story">
                  <div className="storyWrapper">
                    <div className="profileWrapper large">
                      <img
                        src="/images/hyunjaeKim/wecode.png"
                        alt="story_image"
                        className="profileImg large"
                      />
                    </div>
                    <strong className="userID storyID">sbc_yuzawa</strong>
                  </div>
                </li>
                <li className="story">
                  <div className="storyWrapper">
                    <div className="profileWrapper large">
                      <img
                        src="/images/hyunjaeKim/wecode.png"
                        alt="story_image"
                        className="profileImg large"
                      />
                    </div>
                    <strong className="userID storyID">chewhee_l...</strong>
                  </div>
                </li>
                <li className="story">
                  <div className="storyWrapper">
                    <div className="profileWrapper large">
                      <img
                        src="/images/hyunjaeKim/wecode.png"
                        alt="story_image"
                        className="profileImg large"
                      />
                    </div>
                    <strong className="userID storyID">0oo0o0y</strong>
                  </div>
                </li>
                <li className="story">
                  <div className="storyWrapper">
                    <div className="profileWrapper large">
                      <img
                        src="/images/hyunjaeKim/wecode.png"
                        alt="story_image"
                        className="profileImg large"
                      />
                    </div>
                    <strong className="userID storyID">euddeme_</strong>
                  </div>
                </li>
              </ul>
              <button className="showNext icon"></button>
            </section>
            <section className="contents">
              <article className="content">
                <header className="contentHeader content-box">
                  <div className="writerInfo">
                    <div className="profileWrapper medium">
                      <img
                        src="/images/hyunjaeKim/wecode.png"
                        alt="story_image"
                        className="profileImg medium"
                      />
                    </div>
                    <strong className="userID">
                      <a href="#">yakiiikim_</a>
                    </strong>
                  </div>
                  <button type="button" className="icon details"></button>
                </header>
                <div className="mainContents">
                  <button className="icon tagged" type="button"></button>
                  <button className="icon showNext" type="button"></button>
                  <img
                    src="/images/hyunjaeKim/mainpage.jpg"
                    alt="content_image"
                    className="contentImg"
                  />
                </div>
                <div className="detailWrapper content-box">
                  <div className="contentDetail">
                    <section className="reactionTool">
                      <div className="giveReaction">
                        <div className="icon heartBtn">
                          <i className="far fa-heart"></i>
                        </div>
                        <a href="#" className="icon comment"></a>
                        <a href="#" className="icon dmBtn"></a>
                      </div>
                      <button type="button" className="icon bookmark"></button>
                    </section>
                    <div className="likes userID">
                      <strong className="likedNumber">1,515</strong> likes
                    </div>
                    <div className="writterComment">
                      <strong>
                        <a href="#" className="userID">
                          koung_bear
                        </a>
                      </strong>
                      <span className="comment">
                        마지막 팀 갤럭시...
                        <span className="moreLink">more</span>
                      </span>
                    </div>
                    <div className="userComments">
                      <a href="#" className="moreLink">
                        View all 9 comments
                      </a>
                      <Replies className="replies" />
                    </div>
                    <div className="pastDay">2 HOURS AGO</div>
                  </div>
                </div>
                <div className="commentForm content-box">
                  <button className="icon emoji" type="button"></button>
                  <input
                    type="text"
                    className="commentInput"
                    placeholder="Add a comment..."
                  />
                  <button type="button" className="Btn inactive commentPost">
                    Post
                  </button>
                </div>
              </article>
            </section>
          </div>
          <Aside />
        </div>
      </>
    );
  }
}

export default MainHyunJae;
