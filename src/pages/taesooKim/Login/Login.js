import React from "react";
import { withRouter } from "react-router-dom";
import "./Login.scss";
import "../../../styles/common.scss";

class LoginTaeSoo extends React.Component {
  constructor() {
    super();
    this.state = {
      IdVal: "",
      PwVal: "",
    };
  }

  handleIdInput = e => {
    this.setState({ IdVal: e.target.value });
  };

  handlePwInput = e => {
    this.setState({ PwVal: e.target.value });
  };

  goToMain = () => {
    this.props.history.push("/main-soo");
  };

  render() {
    const { IdVal, PwVal } = this.state;
    return (
      <section className="login">
        <h1 className="title">Westagram</h1>
        <div className="login-container">
          <form id="login-form">
            <input
              className="username"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              value={IdVal}
              onChange={this.handleIdInput}
            />
            <input
              className="password"
              type="password"
              placeholder="비밀번호"
              value={PwVal}
              onChange={this.handlePwInput}
            />
            <button
              className={`btn ${
                IdVal.indexOf("@") !== -1 && PwVal.length >= 5 ? "active" : ""
              }`}
              onClick={this.goToMain}
            >
              <span>로그인</span>
            </button>
          </form>
        </div>
        <p>비밀번호를 잊으셨나요?</p>
      </section>
    );
  }
}

export default withRouter(LoginTaeSoo);
