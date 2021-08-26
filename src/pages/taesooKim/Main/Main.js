import React from "react";
import Aside from "../Aside/Aside";
import Nav from "../../../components/Nav/Nav";
import FeedList from "./FeedList";
import "./Main.scss";
import "../../../styles/common.scss";

class MainTaesoo extends React.Component {
  constructor() {
    super();
    this.state = {
      feedList: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/feedData.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          feedList: data,
        });
      });
  }

  render() {
    return (
      <section className="section-main">
        <Nav />
        <main className="main">
          <section className="feeds">
            <FeedList feedList={this.state.feedList} />
          </section>
          <Aside />
        </main>
      </section>
    );
  }
}

export default MainTaesoo;
