import React, { Component } from "react";
import Aside from "./Aside/Aside";
import Nav from "../../../components/Nav/Nav";
import Contents from "./Contents/Contents";
import "./Main.scss";

class MainHyunJae extends Component {
  state = {
    commentList: [],
  };

  componentDidMount() {
    fetch("http://localhost:3000/data/commentData.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          commentList: data,
        });
      });
  }

  handleAdd = comment => {
    const commentList = [
      ...this.state.commentList,
      { id: Date.now(), userName: "hyun__jjae", content: comment },
    ];
    this.setState({ commentList });
  };

  render() {
    return (
      <>
        <Nav />
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
            <Contents
              commentList={this.state.commentList}
              onSubmit={this.handleAdd}
            />
          </div>
          <Aside />
        </div>
      </>
    );
  }
}

export default MainHyunJae;
