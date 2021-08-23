import React, { Component } from "react";
import Comment from "./Comment";
import BtnLike from "./BtnLike";

export class CommentList extends Component {
  constructor() {
    super();
    this.state = {
      isClicked: false,
      commentList: [],
    };
  }

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

  handleClick = () => {
    this.setState({ isClicked: !this.state.isClicked });
  };

  render() {
    const { value, getValue, addComment } = this.props;
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
            <div>
              {this.state.commentList.map(comment => {
                return (
                  <Comment
                    key={comment.id}
                    name={comment.userName}
                    comment={comment.content}
                  />
                );
              })}
            </div>
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

export default CommentList;
