import React, { Component } from "react";
import CommentList from "./CommentList";
import BtnLike from "./BtnLike";

export class Comment extends Component {
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
    const { value, commentList, getValue, addComment } = this.props;
    return (
      <div>
        <div className="feed-comment">
          <ul className="comments">
            <li>
              <p>
                <span>orosy.ts</span>저는 아직 받으려면 멀었네요😂
              </p>
              <BtnLike
                isClicked={this.state.isClicked}
                handleClick={this.handleClick}
              />
              <div className="trash-icon">
                <i className="far fa-trash-alt"></i>
              </div>
            </li>
            <CommentList list={commentList} />
          </ul>
        </div>
        <p className="post-time">42분 전</p>
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

export default Comment;
