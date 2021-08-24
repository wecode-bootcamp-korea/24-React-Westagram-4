import React, { Component } from "react";
import CommentList from "./CommentList";
import BtnLike from "./BtnLike";
import Like from "./Like";

export class Feed extends Component {
  constructor() {
    super();
    this.state = {
      isClicked: false,
    };
  }

  handleClick = () => {
    this.setState({ isClicked: !this.state.isClicked });
  };
  render() {
    const {
      name,
      profile,
      description,
      image,
      value,
      addComment,
      getValue,
      comment,
      like,
      update,
    } = this.props;
    return (
      <div className="feeds-each">
        <div className="feeds-profile">
          <img src={profile} alt="tanggu" />
          <span>{name}</span>
          <div className="more-icon">
            <i className="fas fa-ellipsis-h"></i>
          </div>
        </div>
        <img className="feeds-image" src={image} alt="cookies" />
        <div className="reaction">
          <BtnLike
            isClicked={this.state.isClicked}
            handleClick={this.handleClick}
          />
          <div className="plane-icon">
            <i className="far fa-comment"></i>
          </div>
          <div className="plane-icon">
            <i className="far fa-paper-plane"></i>
          </div>
          <div className="bookmark-icon">
            <i className="far fa-bookmark"></i>
          </div>
        </div>
        <div>
          {like.map(like => {
            return (
              <Like
                key={like.id}
                name={like.userName}
                image={like.image}
                count={like.count}
              />
            );
          })}
        </div>
        <div className="feed-description">
          <span className="username">{name}</span>
          {description}
          <span className="more">더 보기</span>
        </div>
        <div className="feed-comment">
          <ul className="comments">
            <CommentList comment={comment} />
          </ul>
        </div>
        <p className="post-time">{update}</p>
        <div className="write-comments">
          <form className="comment-form" onSubmit={addComment}>
            <input
              className="comment-post"
              type="text"
              placeholder="댓글 달기..."
              value={value}
              onChange={getValue}
            />
            <button className={`btn-post ${value ? "active" : ""}`}>
              게시
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Feed;
