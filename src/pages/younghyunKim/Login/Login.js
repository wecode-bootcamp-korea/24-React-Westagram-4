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
    console.log(this.state.id);
    this.setState({ [className]: value }, () => {
      if (this.state.id.indexOf("@") !== -1 && this.state.pw.length > 5) {
        this.setState({ isActive: true });
      } else {
        this.setState({ isActive: false });
      }
    });
  };

  goToMain = () => {
    this.props.history.push("/main-hyun");
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
