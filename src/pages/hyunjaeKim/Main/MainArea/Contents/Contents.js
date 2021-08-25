import React, { Component } from "react";
import Content from "./Content";

export default class Contents extends Component {
  handleDelete = (reply, feed) => {
    this.props.onDelete(reply, feed);
  };

  render() {
    const { feeds, onSubmit } = this.props;
    return (
      <section className="contents">
        {feeds.map(content => (
          <Content
            content={content}
            onSubmit={onSubmit}
            onDelete={this.handleDelete}
          />
        ))}
      </section>
    );
  }
}
