import React, { Component } from "react";
import Content from "./Content";

export default class Contents extends Component {
  render() {
    const { feeds, onSubmit } = this.props;
    return (
      <section className="contents">
        {feeds.map(content => (
          <Content content={content} onSubmit={onSubmit} />
        ))}
      </section>
    );
  }
}
