import React, { Component } from "react";

export default class NavMenu extends Component {
  render() {
    const { menu } = this.props;
    return (
      <li className="menuName" aria-label="my profile">
        <div className="menuDetail">
          <div className={`menuIcon ${menu.class}`}></div>
          <span className="menuText">{menu.name}</span>
        </div>
      </li>
    );
  }
}
