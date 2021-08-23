import React, { Component } from "react";

export class Feed extends Component {
  render() {
    const { name, profile, image } = this.props;
    return (
      <div>
        <div className="feeds-profile">
          <img src={profile} alt="tanggu" />
          <span>{name}</span>
          <div className="more-icon">
            <i className="fas fa-ellipsis-h"></i>
          </div>
        </div>
        <img src={image} alt="cookies" />
      </div>
    );
  }
}

export default Feed;
