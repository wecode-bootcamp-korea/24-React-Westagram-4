import React, { Component } from "react";
import Nav from "../../../components/Nav/Nav";
import Aside from "./Aside/Aside";
import MainArea from "./MainArea/MainArea";
import "./Main.scss";

class MainHyunJae extends Component {
  render() {
    return (
      <>
        <Nav />
        <div className="containerCenter">
          <MainArea />
          <Aside />
        </div>
      </>
    );
  }
}

export default MainHyunJae;
