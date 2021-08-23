import React, { Component } from "react";
import Content from "./Content";

export default class Contents extends Component {
  render() {
    const { commentList, onSubmit } = this.props;
    return (
      <section className="contents">
        <Content commentList={commentList} onSubmit={onSubmit} />
      </section>
    );
  }
}
