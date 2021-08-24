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
              description={feed.description}
              image={feed.feedImg}
              like={feed.like}
              comment={feed.comment}
              update={feed.update}
            />
          );
        })}
      </article>
    );
  }
}

export default FeedList;
