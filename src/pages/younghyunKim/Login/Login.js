import React, { Component } from "react";
import "./Login.scss";

class LoginYoungHyun extends Component {
  state = [
    { id: "" },
    { pw: "" },
    {
      isActive: false,
    },
  ];

  // this.state = {
  //   isActive: false
  // }

  hande;

  handleIdInput = e => {
    const i = e.target.value;
    this.setState({ id: i });
    console.log(this.state.id);
  };

  handlePwInput = e => {
    const i = e.target.value;
    this.setState({ pw: i });
    console.log(this.state.pw);
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
              onChange={this.handleIdInput}
            />
            <input
              type="password"
              className="pw"
              placeholder="비밀번호"
              onChange={this.handlePwInput}
            />
            <button
              type="button"
              className={this.isActive ? "active" : "loginBtn"}
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
