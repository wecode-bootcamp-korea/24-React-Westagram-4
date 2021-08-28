import React, { Component } from "react";
import NavMenu from "./NavMenu";

export default class NavMenus extends Component {
  state = {
    menus: [
      { id: 1, name: "Profile", class: "menuProfile" },
      { id: 2, name: "Saved", class: "bookmark" },
      { id: 3, name: "Settings", class: "menuSetting" },
      { id: 4, name: "Switch Accounts", class: "menuSwitch" },
      { id: 5, name: "Log Out", class: "menuLogOut" },
    ],
  };

  render() {
    console.log(this.state.menus);
    const { menus } = this.state;
    return (
      <div className="navMenu" aria-label="account menu">
        <ul className="menuList" aria-label="menu lists">
          {menus.map(menu => (
            <NavMenu key={menu.id} menu={menu} />
          ))}
        </ul>
        <div className="menuShadow"></div>
        <div className="menuSquare"></div>
      </div>
    );
  }
}
