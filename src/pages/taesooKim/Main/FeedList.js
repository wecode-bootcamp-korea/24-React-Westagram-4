import React, { Component } from "react";
import Feed from "./Feed";

export class FeedList extends Component {
  render() {
    const { feedList } = this.props;
    return (
      <div>
        {feedList.map(feed => {
          return (
            <Feed
              key={feed.id}
              name={feed.userName}
              profile={feed.profileImg}
              image={feed.feedImg}
            />
          );
        })}
      </div>
    );
  }
}

export default FeedList;
