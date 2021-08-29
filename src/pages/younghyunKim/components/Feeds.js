import React, { Component } from "react";
import WritingComment from "../components/WritingComment";
import CommentForm from "../components/CommentForm";
import DotIcon from "./svgIcon/DotIcon";
import HeartIcon from "./svgIcon/HeartIcon";
import TalkIcon from "./svgIcon/TalkIcon";
import ShareIcon from "./svgIcon/ShareIcon";
import SaveIcon from "./svgIcon/SaveIcon";
import "./Feeds.scss";

class Feeds extends Component {
  state = {
    comments: [],
  };

  componentDidMount = () => {
    this.setState(this.props.feed);
  };

  handleAdd = plusComment => {
    const comment = {
      id: Date.now(),
      userName: "0hyun0hyun",
      comment: plusComment,
      isUser: false,
    };

    const comments = [...this.state.comments, comment];
    this.setState({ comments });
  };

  handleDelete = content => {
    const comments = this.state.comments.filter(item => content.id !== item.id);
    this.setState({ comments });
  };

  render() {
    const { comments } = this.state;

    return (
      <div className="feeds-setting">
        <div>
          <div className="title-profile">
            <img
              src="/images/younghyunKim/eyesmag.jpeg"
              alt="eyemag님의 프로필 사진"
            />
            <span>eyesmag</span>
            <DotIcon />
          </div>
          <img
            src="/images/younghyunKim/234128717_201051705239434_4340604012078037440_n.jpeg"
            className="main-image"
            alt="메인 이미지"
          />
          <div className="feeds-contents">
            <div className="feeds-icons">
              <HeartIcon />
              <TalkIcon />
              <ShareIcon />
              <SaveIcon />
            </div>
            <div className="allFeeds">
              <div className="feeds-like">
                <img
                  src="images/younghyunKim/177919409_466024897787486_7015720230700328365_n.jpeg"
                  className="feeds-commentimage"
                  alt="좋아요한 프로필 사진"
                />
                <span>
                  <span className="like-bold">0hyun0hyun</span>님
                  <span className="like-bold">외 10명</span>이 좋아합니다
                </span>
              </div>
              <div className="feeds-writing">
                <span className="comment-id">eyesmag </span>
                <span>
                  송원아트센터에서 진행하는 뉴 랜덤 다이버시티 전시 📷
                </span>
              </div>
              <div>
                {comments.map(content => (
                  <WritingComment
                    content={content}
                    onDelete={this.handleDelete}
                    key={content.id}
                  />
                ))}
              </div>
              <span className="time">42분 전</span>
            </div>

            <CommentForm onAdd={this.handleAdd} />
          </div>
        </div>
      </div>
    );
  }
}

export default Feeds;
