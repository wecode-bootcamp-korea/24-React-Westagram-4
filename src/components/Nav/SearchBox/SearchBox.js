import React, { Component } from "react";
import SerachResult from "./SerachReesult/SerachResult";

export default class SearchBox extends Component {
  render() {
    return (
      <div className="searchBox">
        <form className="searchForm">
          <input type="text" className="searchInput" placeholder="" />
          <div className="searchPlaceholder">
            <span className="searchIcon">
              <i className="fas fa-search"></i>
            </span>
            <span className="placeHolderText">Search</span>
          </div>
        </form>
        <SerachResult />
      </div>
    );
  }
}
