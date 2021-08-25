import React, { Component } from "react";
import Suggest from "./suggest";

export default class Suggests extends Component {
  state = {
    suggests: [
      { id: 1, userID: "cej_ane" },
      { id: 2, userID: "sy.so__e" },
      { id: 3, userID: "fairytale_zero" },
      { id: 4, userID: "han_ji_95" },
      { id: 5, userID: "florecer_lucky8085" },
    ],
  };

  render() {
    return (
      <div className="suggestions">
        <div className="suggestTitle">
          <span className="suggestHeader">Suggestions For You</span>
          <a href="#" className="Btn">
            See All
          </a>
        </div>
        <div className="suggestedProfiles">
          {this.state.suggests.map(user => (
            <Suggest user={user} />
          ))}
        </div>
      </div>
    );
  }
}
