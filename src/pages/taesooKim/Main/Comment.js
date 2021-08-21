import React, { Component } from "react";
import CommentList from "./CommentList";

export class Comment extends Component {
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
              <div className="full-heart-icon">
                <i className="far fa-heart"></i>
              </div>
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
