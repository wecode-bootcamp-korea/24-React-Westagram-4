import React, { Component } from "react";
import CommentOne from "./CommentOne";

export class CommentList extends Component {
  render() {
    const { list } = this.props;
    return (
      <div>
        {list.map((comment, index) => {
          return (
            <li key={index}>
              <span>orosy.ts</span>
              <CommentOne comm={comment} />
              <div className="heart-icon">
                <i className="far fa-heart"></i>
              </div>
              <div className="trash-icon">
                <i className="far fa-trash-alt"></i>
              </div>
            </li>
          );
        })}
      </div>
    );
  }
}

export default CommentList;
