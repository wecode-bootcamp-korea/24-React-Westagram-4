import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

class LoginHyunJae extends Component {
  state = {
    id: "",
    pw: "",
  };

  handleIDInput = e => {
    const id = e.target.value;
    this.setState({ id });
  };

  handlePWInput = e => {
    const pw = e.target.value;
    this.setState({ pw });
  };

  render() {
    return (
      <div className="loginContainer">
        <h1 className="title" aria-label="Welcome to Westagram">
          Westagram
        </h1>
        <form className="userInfo">
          <input
            type="email"
            className="userID"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            aria-label="Write account ID"
            onChange={this.handleIDInput}
          />
          <input
            type="password"
            className="userPW"
            placeholder="비밀번호"
            aria-label="Write accout password"
            onChange={this.handlePWInput}
          />
          <Link to="/main-jae">
            <button type="button" className="loginBtn" aria-label="login">
              로그인
            </button>
          </Link>
        </form>
        <div className="helpLink" aria-label="help desk">
          <Link to="/main-jae">비밀번호를 잊으셨나요?</Link>
        </div>
      </div>
    );
  }
}

export default LoginHyunJae;
