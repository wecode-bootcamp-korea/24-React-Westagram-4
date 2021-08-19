import React, { Component } from "react";
import Aside from "../Aside/Aside";
import "./Main.scss";

class MainHyunJae extends Component {
  render() {
    return (
      <>
        {/* <nav className="content-box">
          <div className="navHeader">
            <h1 className="title">Westagram</h1>
            <div className="searchBox">
              <form className="searchForm">
                <input type="text" className="searchInput" placeholder="" />
                <div className="searchPlaceholder">
                  <span className="searchIcon">
                    <i className="fas fa-search"></i>
                  </span>
                  <span className="placeHolderText">Search</span>
                </div>
              </form>
              {/* <div className="searchResultContainer disappear">
                                <div className="searchWrapper">
                                    <div className="searchComponent">
                                        <div className="searchResultBox">
                                            <div className="profileWrapper medium">
                                                <img src="./assets/images/wecode.png" alt="스토리 프로필 사진" className="profileImg medium" />
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
            </div>
            <div className="icons">
              <a href="./main.html" className="icon homeBtn"></a>
              <a href="#" className="icon dmBtn"></a>
              <a href="#" className="icon recommendBtn"></a>
              <span className="icon statusBtn">
                <svg
                  viewBox="0 -28 512.001 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m256 455.515625c-7.289062 0-14.316406-2.640625-19.792969-7.4375-20.683593-18.085937-40.625-35.082031-58.21875-50.074219l-.089843-.078125c-51.582032-43.957031-96.125-81.917969-127.117188-119.3125-34.644531-41.804687-50.78125-81.441406-50.78125-124.742187 0-42.070313 14.425781-80.882813 40.617188-109.292969 26.503906-28.746094 62.871093-44.578125 102.414062-44.578125 29.554688 0 56.621094 9.34375 80.445312 27.769531 12.023438 9.300781 22.921876 20.683594 32.523438 33.960938 9.605469-13.277344 20.5-24.660157 32.527344-33.960938 23.824218-18.425781 50.890625-27.769531 80.445312-27.769531 39.539063 0 75.910156 15.832031 102.414063 44.578125 26.191406 28.410156 40.613281 67.222656 40.613281 109.292969 0 43.300781-16.132812 82.9375-50.777344 124.738281-30.992187 37.398437-75.53125 75.355469-127.105468 119.308594-17.625 15.015625-37.597657 32.039062-58.328126 50.167969-5.472656 4.789062-12.503906 7.429687-19.789062 7.429687zm-112.96875-425.523437c-31.066406 0-59.605469 12.398437-80.367188 34.914062-21.070312 22.855469-32.675781 54.449219-32.675781 88.964844 0 36.417968 13.535157 68.988281 43.882813 105.605468 29.332031 35.394532 72.960937 72.574219 123.476562 115.625l.09375.078126c17.660156 15.050781 37.679688 32.113281 58.515625 50.332031 20.960938-18.253907 41.011719-35.34375 58.707031-50.417969 50.511719-43.050781 94.136719-80.222656 123.46875-115.617188 30.34375-36.617187 43.878907-69.1875 43.878907-105.605468 0-34.515625-11.605469-66.109375-32.675781-88.964844-20.757813-22.515625-49.300782-34.914062-80.363282-34.914062-22.757812 0-43.652344 7.234374-62.101562 21.5-16.441406 12.71875-27.894532 28.796874-34.609375 40.046874-3.453125 5.785157-9.53125 9.238282-16.261719 9.238282s-12.808594-3.453125-16.261719-9.238282c-6.710937-11.25-18.164062-27.328124-34.609375-40.046874-18.449218-14.265626-39.34375-21.5-62.097656-21.5zm0 0" />
                </svg>
              </span>
              <div className="navProfile">
                <div className="profileWrapper" id="navProfile">
                  <img
                    src="/images/myprofile.jpeg"
                    alt="profile_image"
                    className="profileImg"
                  />
                </div>
              </div>
            </div>
            <div className="navMenu disappear" aria-label="account menu">
        <ul className="menuList" aria-label="menu lists">
          <li className="menuName" aria-label="my profile">
            <div className="menuDetail">
              <div className="menuIcon menuProfile"></div>
              <span className="menuText">Profile</span>
            </div>
          </li>
          <li className="menuName" aria-label="Saved feeds">
            <div className="menuDetail">
              <div className="menuIcon bookmark"></div>
              <span className="menuText">Saved</span>
            </div>
          </li>
          <li className="menuName" aria-label="Settings">
            <div className="menuDetail">
              <div className="menuIcon menuSetting"></div>
              <span className="menuText">Settings</span>
            </div>
          </li>
          <li className="menuName" aria-label="Switch Accounts">
            <div className="menuDetail">
              <div className="menuIcon menuSwitch"></div>
              <span className="menuText">Switch Accounts</span>
            </div>
          </li>
          <li className="menuName" aria-label="Log out">
            <p className="menuText">Log Out</p>
          </li>
        </ul>
        <div className="menuShadow"></div>
        <div className="menuSquare"></div>
      </div> 
          </div>
        </nav> */}

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
                      <ul className="replies">
                        <li className="reply">
                          <div className="replyDetail">
                            <strong>
                              <a href="#" className="userID">
                                chillin1980
                              </a>
                            </strong>
                            <a href="#" className="comment hashtag">
                              @jis20da
                            </a>
                          </div>
                          <div className="icon heartBtn small_icon">
                            <i className="far fa-heart"></i>
                          </div>
                        </li>
                        <li className="reply">
                          <div className="replyDetail">
                            <strong>
                              <a href="#" className="userID">
                                gumbong2
                              </a>
                            </strong>
                            <a href="#" className="comment hashtag">
                              @funky1o.ve
                            </a>
                          </div>
                          <div className="icon heartBtn small_icon">
                            <i className="far fa-heart"></i>
                          </div>
                        </li>
                      </ul>
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
