import React, { Component } from "react";

export class Like extends Component {
  render() {
    const { name, image, count } = this.props;
    return (
      <div className="like">
        <img src={image} alt="orosy" />
        <p className="many-likes">
          <span>{name}</span>님 <span>외 {count}명</span>이 좋아합니다
        </p>
      </div>
    );
  }
}

export default Like;
