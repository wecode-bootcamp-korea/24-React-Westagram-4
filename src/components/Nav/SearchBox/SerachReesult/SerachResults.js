import React, { Component } from "react";
import SearchResult from "./SearchResult";

export default class SerachResults extends Component {
  render() {
    const { matchedValue, userInput } = this.props;
    return (
      <div className="searchResultContainer">
        <div className="searchWrapper">
          <div
            className={`searchComponent ${
              !userInput || userInput.length < 0 ? "disappear" : ""
            }`}
          >
            {matchedValue.map((user, idx) => (
              <SearchResult key={idx} user={user} />
            ))}
            <div className="search-squre"></div>
          </div>
          <div className="searchResultBoxShadow"></div>
        </div>
      </div>
    );
  }
}
