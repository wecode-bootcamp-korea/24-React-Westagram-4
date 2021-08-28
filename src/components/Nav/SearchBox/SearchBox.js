import React, { Component } from "react";
import SerachResult from "./SerachReesult/SerachResults";

export default class SearchBox extends Component {
  state = {
    accounts: [],
    userInput: "",
  };

  componentDidUpdate() {
    fetch("/data/searchData.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(accounts => this.setState({ accounts: accounts.account }));
  }

  handleSearchInput = e => {
    const input = e.target.value;
    if (input.length > 0) {
      this.setState({ ...this.state, userInput: input });
    }
  };

  render() {
    const { accounts, userInput } = this.state;
    // user가 입력한 값으로만 새로 만든 obj
    const matchedValue = accounts.filter(user =>
      user.id.toLowerCase().includes(userInput)
    );
    return (
      <div className="searchBox">
        <form className="searchForm">
          <input
            type="text"
            className="searchInput"
            placeholder="Search"
            onChange={this.handleSearchInput}
          />
          <div className="searchPlaceholder">
            <span className="searchIcon">
              <i className="fas fa-search"></i>
            </span>
            <span className="placeHolderText">Search</span>
          </div>
        </form>
        <SerachResult accounts={accounts} matchedValue={matchedValue} />
      </div>
    );
  }
}
