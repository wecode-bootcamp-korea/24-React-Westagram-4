import React, { Component } from "react";
import "./Login.scss";

class LoginYoungHyun extends Component {
  state = {
    id: "",
    pw: "",
    isActive: false,
  };

  handleInput = e => {
    const { className, value } = e.target;
    this.setState({
      [className]: value,
      isActive:
        this.state.id.indexOf("@") !== -1 && this.state.pw.length > 5
          ? true
          : false,
    });
  };

  // goToMain = () => {
  //   fetch("http://10.58.7.215:8000/users/signin", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       // name: "강남11",
  //       emasil: this.state.id,
  //       password: this.state.pw,
  //       // cell_number: "010-2344-2423",
  //       // address: "서울시 강남구 서초동 124",
  //       // birthday: "2020-03-02",
  //       // sex: "여",
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(result => {
  //       result.TOKEN
  //         ? this.props.history.push("/main-hyun")
  //         : alert("다시 입력해주세요!");
  //     });
  // };

  goToMain = () => {
    fetch("http://10.58.2.174:8000/users/signup", {
      method: "POST",
      body: JSON.stringify({
        name: "강남11",
        email: this.state.id,
        password: this.state.pw,
        cell_number: "010-2341-2423",
        address: "서울시 강남구 서초동 124",
        birthday: "2020-13-02",
        sex: "",
      }),
    })
      .then(response => response.json())
      .then(result => console.log("결과: ", result));
  };

  render() {
    return (
      <div className="login">
        <div className="background">
          <h1>Westagram</h1>
          <div className="boxes">
            <input
              type="text"
              className="id"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={this.handleInput}
            />
            <input
              type="password"
              className="pw"
              placeholder="비밀번호"
              onChange={this.handleInput}
            />
            <button
              type="button"
              className={this.state.isActive ? "active" : ""}
              disabled={!this.state.isActive}
              onClick={this.goToMain}
            >
              로그인
            </button>
          </div>
          <span>비밀번호를 잊으셨나요?</span>
        </div>
      </div>
    );
  }
}

export default LoginYoungHyun;
