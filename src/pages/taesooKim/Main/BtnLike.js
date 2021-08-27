import React, { Component } from "react";

export class BtnLike extends Component {
  render() {
    const { isClicked, handleClick } = this.props;
    return (
      <div className="heart-icon">
        <i
          onClick={handleClick}
          className={`${isClicked ? "fas" : "far"} fa-heart`}
        ></i>
      </div>
    );
  }
}

export default BtnLike;
