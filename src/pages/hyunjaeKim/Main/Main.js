import React, { Component } from "react";
import Nav from "../../../components/Nav/Nav";
import Contents from "./Contents/Contents";
import Aside from "./Aside/Aside";
import "./Main.scss";

class MainHyunJae extends Component {
  state = {
    feeds: [],
  };

  componentDidMount() {
    fetch("http://localhost:3000/data/commentData.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          feeds: data,
        });
      });
  }

  handleAdd = (comment, content) => {
    const commentList = [
      ...content.comments,
      { id: Date.now(), userName: "hyun__jjae", comment },
    ];
    const newFeed = { ...content, comments: commentList };
    const feeds = this.state.feeds.map(item => {
      if (item.id === content.id) {
        return newFeed;
      }
      return item;
    });
    console.log(feeds);
    this.setState({ feeds });
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
            <Contents feeds={this.state.feeds} onSubmit={this.handleAdd} />
          </div>
          <Aside />
        </div>
      </>
    );
  }
}

export default MainHyunJae;
