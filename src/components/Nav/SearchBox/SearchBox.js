import React, { Component } from "react";
import SerachResults from "./SerachReesult/SerachResults";

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
    this.setState({ ...this.state, userInput: input });
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
            onChange={this.handleSearchInput}
            placeholder="Search..."
          />
        </form>
        <div>
          <SerachResults matchedValue={matchedValue} userInput={userInput} />
        </div>
      </div>
    );
  }
}
