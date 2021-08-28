import React, { Component } from "react";

export default class NavMenu extends Component {
  render() {
    return (
      <div className="navMenu disappear" aria-label="account menu">
        <ul className="menuList" aria-label="menu lists">
          <li className="menuName" aria-label="my profile">
            <div className="menuDetail">
              <div className="menuIcon menuProfile"></div>
              <span className="menuText">Profile</span>
            </div>
          </li>
          <li className="menuName" aria-label="Saved feeds">
            <div className="menuDetail">
              <div className="menuIcon bookmark"></div>
              <span className="menuText">Saved</span>
            </div>
          </li>
          <li className="menuName" aria-label="Settings">
            <div className="menuDetail">
              <div className="menuIcon menuSetting"></div>
              <span className="menuText">Settings</span>
            </div>
          </li>
          <li className="menuName" aria-label="Switch Accounts">
            <div className="menuDetail">
              <div className="menuIcon menuSwitch"></div>
              <span className="menuText">Switch Accounts</span>
            </div>
          </li>
          <li className="menuName" aria-label="Log out">
            <p className="menuText">Log Out</p>
          </li>
        </ul>
        <div className="menuShadow"></div>
        <div className="menuSquare"></div>
      </div>
    );
  }
}
