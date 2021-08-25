import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

class LoginHyunJae extends Component {
  state = {
    email: "",
    password: "",
  };

  saveData = data => {
    localStorage.setItem("TOKEN", data.TOKEN);
  };

  handleLogin = () => {
    fetch("http://10.58.0.45:8000/users/login", {
      method: "POST",
      body: JSON.stringify({
        ...this.state,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.TOKEN) {
          this.saveData(data);
          this.props.history.push("/main-jae");
        } else {
          alert("회원가입을 해주세요!");
        }
      });
  };

  handleIDInput = e => {
    const { value } = e.target;
    this.setState({ ...this.state, email: value });
  };

  handlePWInput = e => {
    const { value } = e.target;
    this.setState({ ...this.state, password: value });
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
            placeholder="이메일을 입력해주세요"
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
          <button
            type="button"
            className={this.state.isActive ? "loginBtn active" : "loginBtn"}
            aria-label="login"
            onClick={this.handleLogin}
          >
            로그인
          </button>
        </form>
        <div className="helpLink" aria-label="help desk">
          <Link to="/account-jae">계정을 추가해보세요</Link>
        </div>
      </div>
    );
  }
}

export default LoginHyunJae;
