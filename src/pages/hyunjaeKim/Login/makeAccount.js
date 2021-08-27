import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

export default class MakeAccountJae extends Component {
  state = {
    name: "",
    phone_number: "",
    gender: "",
    address: "",
    birth: "",
    email: "",
    password: "",
  };

  sendAccount = () => {
    fetch("http://10.58.0.45:8000/users/signup", {
      method: "POST",
      body: JSON.stringify({
        ...this.state,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  };

  handleNameInput = e => {
    const { value } = e.target;
    this.setState({ ...this.state, name: value });
  };

  handlePhoneInput = e => {
    const { value } = e.target;
    this.setState({ ...this.state, phone_number: value });
  };

  handleGenderInput = e => {
    const { value } = e.target;
    this.setState({ ...this.state, gender: value });
  };

  handleAddressInput = e => {
    const { value } = e.target;
    this.setState({ ...this.state, address: value });
  };

  handleBirthInput = e => {
    const { value } = e.target;
    this.setState({ ...this.state, birth: value });
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
      // 전화번호 , 이메일, 패스워드
      <div className="loginBody">
        <div className="loginContainer">
          <h1 className="title" aria-label="Welcome to Westagram">
            Sign up
          </h1>
          <form className="userInfo">
            <input
              type="texrt"
              className="userID"
              placeholder="이름"
              aria-label="Write your phonenumber"
              onChange={this.handleNameInput}
            />
            <input
              type="tel"
              className="userID"
              placeholder="전화번호 000-000-0000으로 입력해주세요"
              aria-label="Write your phonenumber"
              onChange={this.handlePhoneInput}
            />
            <input
              type="text"
              className="userPW"
              placeholder="Male / Female"
              aria-label="Write your gender"
              onChange={this.handleGenderInput}
            />
            <input
              type="text"
              className="userPW"
              placeholder="address"
              aria-label="Write your address"
              onChange={this.handleAddressInput}
            />
            <input
              type="text"
              className="userPW"
              placeholder="YYYY-MM-DD"
              aria-label="Write your birthday"
              onChange={this.handleBirthInput}
            />
            <input
              type="email"
              className="userID"
              placeholder="이메일"
              aria-label="Write account ID"
              onChange={this.handleIDInput}
            />
            <input
              type="password"
              className="userPW"
              placeholder="비밀번호 - 8자 이상, 대문자 및 특수문자를 1자 이상 포함할 것 "
              aria-label="Write accout password"
              onChange={this.handlePWInput}
            />
            <button
              type="button"
              className={this.state.isActive ? "loginBtn active" : "loginBtn"}
              aria-label="login"
              onClick={this.sendAccount}
            >
              회원가입 하기
            </button>
          </form>
          <div className="helpLink" aria-label="help desk">
            <Link to="/login-jae">로그인 페이지로 이동하기</Link>
          </div>
        </div>
      </div>
    );
  }
}
