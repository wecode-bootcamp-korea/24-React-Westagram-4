import React, { Component } from "react";
import Reaction from "./Reaction";
import CommentList from "./CommentList";

export class Feed extends Component {
  render() {
    const { name, profile, image, value, commentList, addComment, getValue } =
      this.props;
    return (
      <div className="feeds-each">
        <div className="feeds-profile">
          <img src={profile} alt="tanggu" />
          <span>{name}</span>
          <div className="more-icon">
            <i className="fas fa-ellipsis-h"></i>
          </div>
        </div>
        <img src={image} alt="cookies" />
        <Reaction />
        <CommentList
          value={value}
          commentList={commentList}
          addComment={addComment}
          getValue={getValue}
        />
      </div>
    );
  }
}

export default Feed;
