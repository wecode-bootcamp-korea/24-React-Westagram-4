import React, { Component } from "react";
import CommentForm from "./Replies/Comment";
import ContentHeader from "./ContentHeader";
import MainContents from "./MainContents";
import DetailWrapper from "./DetailWrapper";

export default class Content extends Component {
  // state = { ...this.props.content };
  state = {};

  componentDidMount() {
    this.setState(this.props.content);
  }
  //optional) 위의 것을 사용하면, comment가 있을 때에만 map을 돌릴 수 있도록 코멘트&&코멘트.map()

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
        {this.state.comments && (
          <DetailWrapper content={this.state} onDelete={this.handleDelete} />
        )}
        <CommentForm onSubmit={this.handleAdd} />
      </article>
    );
  }
}
