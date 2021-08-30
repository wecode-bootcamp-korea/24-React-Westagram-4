import React, { Component } from "react";
import Replies from "../Contents/Replies/Replies";

export default class DetailWrapper extends Component {
  state = {
    likes: 1515,
    isRed: false,
    isOpened: false,
  };

  handleDelete = reply => {
    this.props.onDelete(reply);
  };

  handleBtn = () => {
    this.setState({ ...this.state, isRed: !this.state.isRed }, () => {
      this.handleIncrement();
    });
  };

  handleOpen = () => {
    this.setState({ ...this.state, isOpened: true });
  };

  handleIncrement = () => {
    const { isRed, likes } = this.state;
    const sign = { true: 1, false: -1 };
    this.setState(prev => ({
      ...prev,
      likes: likes + sign[isRed],
    }));
  };

  render() {
    const { isOpened, likes } = this.state;
    return (
      <div className="detailWrapper content-box">
        <div className="contentDetail">
          <section className="reactionTool">
            <div className="giveReaction">
              <div className="icon heartBtn" onClick={this.handleBtn}>
                <i
                  className={
                    this.state.isRed ? "fas fa-heart" : "far fa-heart "
                  }
                />
              </div>
              <a href="#" className="icon comment"></a>
              <a href="#" className="icon dmBtn"></a>
            </div>
            <button type="button" className="icon bookmark"></button>
          </section>
          <div className="likes userID">
            <strong className="likedNumber">{likes}</strong> likes
          </div>
          <div className="writterCommentContainer">
            <span className={`writterCommentWrapper ${isOpened ? "open" : ""}`}>
              <strong>
                <a href="#" className="userID">
                  koung_bear
                </a>
              </strong>
              <span className="writterComment">
                동메달보다 금메달보다 어떤 메달과 상보다 더 값진
                감동을선물해줘서 너무너무 고마워요 덕분에 전국민이 국뽕 한 사발
                들이키고 목 터져라 김연경 울부짖었던 행복했던 올림픽이었어요
                절대절대 자책하지말고 푸욱 쉬어요💙
              </span>
            </span>
            <button
              className={`moreLink ${isOpened ? "open" : ""}`}
              onClick={this.handleOpen}
            >
              more
            </button>
          </div>
          <div className="userComments">
            <a href="#" className="moreLink">
              View all 9 comments
            </a>
            <Replies
              className="replies"
              content={this.props.content}
              onDelete={this.handleDelete}
            />
          </div>
          <div className="pastDay">2 HOURS AGO</div>
        </div>
      </div>
    );
  }
}
