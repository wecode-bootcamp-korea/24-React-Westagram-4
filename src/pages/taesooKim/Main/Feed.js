import React, { Component } from "react";
import Reaction from "./Reaction";
import CommentList from "./CommentList";

export class Feed extends Component {
  render() {
    const { name, profile, image, value, addComment, getValue, comment } =
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
        <img className="feeds-image" src={image} alt="cookies" />
        <Reaction />
        <CommentList
          value={value}
          addComment={addComment}
          getValue={getValue}
          comment={comment}
        />
      </div>
    );
  }
}

export default Feed;
