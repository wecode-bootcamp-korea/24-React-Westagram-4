import React, { Component } from "react";
import SearchResult from "./SearchResult";

export default class SerachResult extends Component {
  render() {
    const { matchedValue } = this.props;
    return (
      <div className="searchResultContainer">
        <div className="searchWrapper">
          <div className="searchComponent">
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
