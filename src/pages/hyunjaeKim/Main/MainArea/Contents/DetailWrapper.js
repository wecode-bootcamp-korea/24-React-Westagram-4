import React, { Component } from "react";
import Replies from "../Contents/Replies/Replies";

export default class DetailWrapper extends Component {
  state = {
    likes: 1515,
    isRed: false,
  };

  handleDelete = reply => {
    this.props.onDelete(reply);
  };

  handleBtn = () => {
    this.setState({ ...this.state, isRed: !this.state.isRed }, () => {
      this.handleIncrement();
    });
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
            <strong className="likedNumber">{this.state.likes}</strong> likes
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
