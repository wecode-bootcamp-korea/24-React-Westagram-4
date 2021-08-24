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
      value: "",
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

  getValue = e => {
    this.setState({
      value: e.target.value,
    });
  };

  addComment = e => {
    e.preventDefault();
    this.setState({
      commentList: this.state.commentList.concat([this.state.value]),
      value: "",
    });
  };

  render() {
    return (
      <section className="section-main">
        <Nav />
        <main className="main">
          <section className="feeds">
            <FeedList
              value={this.state.value}
              feedList={this.state.feedList}
              getValue={this.getValue}
              addComment={this.addComment}
            />
          </section>
          <Aside />
        </main>
      </section>
    );
  }
}

export default MainTaesoo;
