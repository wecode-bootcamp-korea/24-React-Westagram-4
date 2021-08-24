import React, { Component } from "react";
import Feeds from "../components/Feeds";

class AllFeeds extends Component {
  render() {
    const { onDelete, onAdd, feeds } = this.props;
    return (
      <div className="feeds-align">
        {feeds.map(feed => (
          <Feeds
            feed={feed}
            comments={feed.comments}
            onDelete={onDelete}
            onAdd={onAdd}
          />
        ))}
      </div>
    );
  }
}

export default AllFeeds;
