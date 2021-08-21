import React, { Component } from "react";
import CommentOne from "./CommentOne";

export class EachComment extends Component {
  render() {
    const list = this.props.list;
    return (
      <div>
        {list.map(index => {
          return (
            <li key={index}>
              <span>orosy.ts</span>
              <CommentOne comment={index} />
              <div className="full-heart-icon">
                <i class="far fa-heart"></i>
              </div>
              <div className="trash-icon">
                <i class="far fa-trash-alt"></i>
              </div>
            </li>
          );
        })}
      </div>
    );
  }
}

export default EachComment;
