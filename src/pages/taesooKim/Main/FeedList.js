import React, { Component } from "react";
import Feed from "./Feed";

export class FeedList extends Component {
  constructor() {
    super();
    this.state = {
      isClicked: false,
    };
  }

  handleClick = () => {
    this.setState({ isClicked: !this.state.isClicked });
  };

  render() {
    const { feedList } = this.props;
    return (
      <article className="feeds-container">
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
      </article>
    );
  }
}

export default FeedList;
