import React, { Component } from "react";

export class Comment extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      commentList: [],
    };
  }

  getValue = e => {
    this.setState({
      value: e.target.value,
    });
  };

  addComment = e => {
    e.preventDefault();
    this.setState({
      commentList: this.state.commentList.concat([this.state.value]),
      value: "",
    });
  };

  render() {
    return (
      <div>
        <div className="feed-comment">
          <ul className="comments">
            <li>
              <p>
                <span>orosy.ts</span>저는 아직 받으려면 멀었네요😂
              </p>
              <div className="full-heart-icon">
                <i class="far fa-heart"></i>
              </div>
              <div className="trash-icon">
                <i class="far fa-trash-alt"></i>
              </div>
            </li>
            {this.state.commentList.map((comment, index) => {
              return (
                <li key={index}>
                  <span>orosy.ts</span>
                  {comment}
                  <div className="full-heart-icon">
                    <i class="far fa-heart"></i>
                  </div>
                  <div className="trash-icon">
                    <i class="far fa-trash-alt"></i>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <p className="post-time">42분 전</p>
        <div className="write-comments">
          <form className="comment-form" onSubmit={this.addComment}>
            <input
              className="comment-post"
              type="text"
              placeholder="댓글 달기..."
              value={this.state.value}
              onChange={this.getValue}
            />
            <button className="btn-post">게시</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Comment;
