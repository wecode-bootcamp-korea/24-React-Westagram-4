import React from "react";
import { withRouter } from "react-router-dom";
import "./Login.scss";
import "../../../styles/common.scss";

class LoginTaeSoo extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      pw: "",
      disabled: true,
    };
  }

  activeLogin = () => {
    this.state.id.indexOf("@") > 0 && this.state.pw.length >= 5
      ? this.setState({ disabled: false })
      : this.setState({ disabled: true });
  };

  handleInput = e => {
    const { value, id } = e.target;
    this.setState({
      [id]: value,
    });
    this.activeLogin();
  };

  goToMain = () => {
    if (!this.state.disabled) {
      this.props.history.push("/main-soo");
    }
  };

  render() {
    const { id, pw, disabled } = this.state;
    return (
      <section className="login">
        <h1 className="title">Westagram</h1>
        <div className="login-container">
          <div id="login-form">
            <input
              id="id"
              className="username"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={this.handleInput}
            />
            <input
              id="pw"
              className="password"
              type="password"
              placeholder="비밀번호"
              onChange={this.handleInput}
            />
            <button
              className={`btn ${
                id.indexOf("@") !== -1 && pw.length >= 5 ? "active" : ""
              }`}
              onClick={this.goToMain}
              disabled={disabled}
            >
              <span>로그인</span>
            </button>
          </div>
        </div>
        <p>비밀번호를 잊으셨나요?</p>
      </section>
    );
  }
}

export default withRouter(LoginTaeSoo);
