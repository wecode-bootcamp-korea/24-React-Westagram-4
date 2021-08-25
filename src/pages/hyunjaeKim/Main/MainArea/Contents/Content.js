import React, { Component } from "react";
import CommentForm from "./Replies/Comment";
import ContentHeader from "./ContentHeader";
import MainContents from "./MainContents";
import DetailWrapper from "./DetailWrapper";

export default class Content extends Component {
  render() {
    const { content, onSubmit } = this.props;
    return (
      <article className="content">
        <ContentHeader />
        <MainContents />
        <DetailWrapper content={content} />
        <CommentForm onSubmit={onSubmit} content={content} />
      </article>
    );
  }
}
