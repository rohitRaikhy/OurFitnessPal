import React from "react";
import {connect} from "react-redux";
import  { Redirect, BrowserRouter, Link, Route } from "react-router-dom";
import {verifyUser, onChangeUserId, onChangePassword, login} from "../../actions/LoginActions";
import HomePageHeader from "./HomePageHeader";
import "./Register.Style.css"


const LoginComponent = ({
    users, loginUserId, loginPassword,loginStatus,loginUser,
    onChangeUserId, onChangePassword, verifyUser, login
}) =>
    <div className="container">
      <HomePageHeader/>
      <div className= "wbdv-register-page-margins ">
      <h1>Login to MyFitnessPal</h1>
      <form>
        <div className="form-group row">
          <label htmlFor="username" className="col-sm-2 col-form-label">
            Username </label>
          <div className="col-sm-10">
            <input className="form-control"
                   id="username" placeholder="ourfitnesspal"
                   onChange={(event) => onChangeUserId(event.target.value)}/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="password" className="col-sm-2 col-form-label">
            Password </label>
          <div className="col-sm-10">
            <input type="password" className="form-control"
                   id="password" placeholder="enter your password"
                   onChange={(event) => onChangePassword(event.target.value)}/>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label"></label>
          <div className="col-sm-10">
            <Link to={loginStatus ? `/ourfitnesspal/profile/${loginUserId}`: "/ourfitnesspal/login"} className="btn btn-primary btn-block"
                onClick={() => {verifyUser(users, loginUserId, loginPassword); login(loginUserId)}}>Sign In</Link>
            {console.log("users", " ", users)}
            {console.log("loginUserID", " ", loginUserId)}
            {console.log("login password", " ", loginPassword)}
            {console.log("loginStatus", " ", loginStatus)}
            {console.log("loginUser", " ", loginUser)}
            <div className="row">
              <div className="col-6">
                <a href="#">Forgot Password?</a>
              </div>
              <div className="col-6">
                  <Link to="/ourfitnesspal/register" className="float-right">Sign Up</Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    </div>

const stateToPropertyMapper = (state) => ({
  users: state.userReducer.users,
  loginUserId: state.loginReducer.loginUserId,
  loginPassword: state.loginReducer.loginPassword,
  loginStatus: state.loginReducer.loginStatus,
  loginUser: state.loginReducer.loginUser,
})

const propertyToDispatchMapper = (dispatch) => ({
  verifyUser: (users,userId, password) => verifyUser(dispatch, users, userId, password),
  onChangeUserId: (userId) => onChangeUserId(dispatch, userId),
  onChangePassword: (password) => onChangePassword(dispatch, password),
  login: (userId) => login(dispatch, userId)
})



export default connect(stateToPropertyMapper, propertyToDispatchMapper)(LoginComponent)
