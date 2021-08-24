import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

class LoginHyunJae extends Component {
  state = {
    userID: "",
    userPW: 0,
    isActive: false,
  };

  handleInput = e => {
    const { value, className } = e.target;
    this.setState({
      [className]: value,
      isActive:
        this.state.userID.includes("@") && this.state.userPW.length > 4
          ? true
          : false,
    });
    console.log(this.state);
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
            onChange={this.handleInput}
          />
          <input
            type="password"
            className="userPW"
            placeholder="비밀번호"
            aria-label="Write accout password"
            onChange={this.handleInput}
          />
          <Link to="/main-jae">
            <button
              type="button"
              className={this.state.isActive ? "loginBtn active" : "loginBtn"}
              aria-label="login"
            >
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
