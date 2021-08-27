import React from "react";
import { withRouter } from "react-router-dom";
import "./Login.scss";

class LoginTaeSoo extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      pw: "",
      disabled: true,
    };
  }

  handleLogin = () => {
    fetch("http://10.58.6.20:8000/users/signin", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.pw,
      }),
    })
      .then(response => response.json())
      .then(result => console.log(result));
  };

  handleInput = e => {
    const { name, value } = e.target;

    const isActive =
      this.state.id.indexOf("@") !== -1 && this.state.pw.length >= 5
        ? this.setState({ disabled: false })
        : this.setState({ disabled: true });

    this.setState({ [name]: value, isActive });
  };

  goToMain = () => {
    if (!this.state.disabled) {
      this.props.history.push("/main-soo");
    }
  };

  render() {
    const { id, pw, disabled } = this.state;
    const isActive = id.indexOf("@") !== -1 && pw.length >= 5;

    return (
      <section className="login">
        <h1 className="title">Westagram</h1>
        <div className="login-container">
          <div className="login-form">
            <input
              id="id"
              name="id"
              className="username"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={this.handleInput}
            />
            <input
              id="pw"
              name="pw"
              className="password"
              type="password"
              placeholder="비밀번호"
              onChange={this.handleInput}
            />
            <button
              className={`btn ${isActive ? "active" : ""}`}
              disabled={disabled}
              onClick={this.handleLogin}
            >
              <span>로그인</span>
            </button>
          </div>
        </div>
        <p className="forget-password">비밀번호를 잊으셨나요?</p>
      </section>
    );
  }
}

export default withRouter(LoginTaeSoo);
