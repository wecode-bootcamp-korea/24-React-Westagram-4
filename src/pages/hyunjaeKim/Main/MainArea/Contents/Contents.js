import React, { Component } from "react";
import Content from "./Content";

export default class Contents extends Component {
  state = {
    feeds: [],
  };

  componentDidMount() {
    fetch("/data/commentData.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          feeds: data,
        });
      });
  }

  render() {
    const { feeds } = this.state;
    return (
      <section className="contents">
        {feeds.map(content => (
          <Content content={content} key={content.id} />
        ))}
      </section>
    );
  }
}
