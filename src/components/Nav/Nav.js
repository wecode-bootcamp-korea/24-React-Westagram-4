import React, { Component } from "react";
import SearchBox from "./SearchBox/SearchBox";
import NavIcons from "./NavIcons/NavIcons";
import "./Nav.scss";

export default class Nav extends Component {
  render() {
    return (
      <nav className="content-box">
        <div className="navHeader">
          <h1 className="title">Westagram</h1>
          <SearchBox />
          <NavIcons />
        </div>
      </nav>
    );
  }
}
