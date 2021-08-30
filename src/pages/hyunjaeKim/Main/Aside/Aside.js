import React, { Component } from "react";
import ServiceDetails from "./ServiceDetails/ServiceDetails";
import CurrentProfile from "./CurrentProfile";
import "./Aside.scss";
import Suggests from "./Suggests/Suggests";

export default class Aside extends Component {
  render() {
    return (
      <aside className="sideBar">
        <CurrentProfile />
        <Suggests />
        <ServiceDetails />
      </aside>
    );
  }
}
