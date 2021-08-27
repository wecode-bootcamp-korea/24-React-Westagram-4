import React, { Component } from "react";
import CommentForm from "./Replies/Comment";
import ContentHeader from "./ContentHeader";
import MainContents from "./MainContents";
import DetailWrapper from "./DetailWrapper";

export default class Content extends Component {
  state = { id: "", profile: "", userNAme: "", url: "", comments: [] };

  componentDidMount() {
    this.setState(this.props.content);
  }

  handleAdd = reply => {
    const comments = [
      ...this.state.comments,
      { id: Date.now(), userName: "hyun__jjae", comment: reply, isUser: true },
    ];
    this.setState({ comments });
  };

  handleDelete = reply => {
    const comments = this.state.comments.filter(item => item.id !== reply.id);
    this.setState({ comments });
  };

  render() {
    return (
      <article className="content">
        <ContentHeader />
        <MainContents />
        <DetailWrapper content={this.state} onDelete={this.handleDelete} />
        <CommentForm onSubmit={this.handleAdd} />
      </article>
    );
  }
}
