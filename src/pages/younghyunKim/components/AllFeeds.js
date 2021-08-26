import React, { Component } from "react";
import Feeds from "../components/Feeds";

class AllFeeds extends Component {
  render() {
    const { feeds } = this.props;
    return (
      <div className="feeds-align">
        {feeds.map(feed => (
          <Feeds feed={feed} comments={feed.comments} key={feed.id} />
        ))}
      </div>
    );
  }
}

export default AllFeeds;
