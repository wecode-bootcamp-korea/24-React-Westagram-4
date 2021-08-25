import React, { Component } from "react";
import Replies from "./Replies/Replies";
import CommentForm from "./Replies/Comment";

export default class Content extends Component {
  render() {
    const { content, onSubmit } = this.props;
    return (
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
              <Replies className="replies" content={content.comments} />
            </div>
            <div className="pastDay">2 HOURS AGO</div>
          </div>
        </div>
        <CommentForm onSubmit={onSubmit} content={content} />
      </article>
    );
  }
}
