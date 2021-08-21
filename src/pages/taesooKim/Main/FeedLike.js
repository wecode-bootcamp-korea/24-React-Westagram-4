import React, { Component } from "react";

export class FeedLike extends Component {
  render() {
    const { likeFeed, likeFeedBtn } = this.props;
    return (
      <div className="heart-icon">
        <i
          onClick={likeFeedBtn}
          className={`${likeFeed === true ? "fas" : "far"} fa-heart`}
        ></i>
      </div>
    );
  }
}

export default FeedLike;
