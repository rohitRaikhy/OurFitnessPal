import React from "react";
import {connect} from "react-redux";
import { Link } from "react-router-dom";
import ProfileComponent from "./ProfileComponent";
import {
  createUser,
  onChangeUserId,
  onChangeEmail,
  onChangePassword,
  setUserExists,
  setPasswordMatching
} from "../../actions/RegisterAction";
import registerReducer from "../../reducers/RegisterReducer";
import LoginComponent from "./LoginComponent";
import userReducer from "../../reducers/UserReducer";


const RegisterComponent = ({
    users,
    userId,
    password,
    email,
    createUser,
    userIdExist,passwordMatchingFn,
    userExists, passwordMatching,
  setUserExists, setPasswordMatching,
  onChangeUserId,onChangeEmail, onChangePassword
}) =>
    <div className="container">
      <h1>Register</h1>
      <form>
        <div className="form-group row">
          <label htmlFor="usernameFld" className="col-sm-2 col-form-label">
            Username </label>
          <div className="col-sm-10">
            <input id="usernameFld"
                   className="form-control"
                   placeholder="fitnesspal01"
                   onChange={(event) => userIdExist(users, event.target.value) !== undefined ? setUserExists(true, event.target.value) : setUserExists(false, event.target.value)}/>
            {userExists && "this userId is taken"}
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="email" className="col-sm-2 col-form-label">
            Email Address</label>
          <div className="col-sm-10">
            <input id="email" type="email"
                   className="form-control"
                   placeholder="user@myfitnesspal.com"
                    onChange={(event) => onChangeEmail(event.target.value)}/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="passwordFld" className="col-sm-2 col-form-label">
            Password </label>
          <div className="col-sm-10">
            <input id="passwordFld" type="password"
                   className="form-control"
                   placeholder="123qwe#$%"
                   onChange={(event) => onChangePassword(event.target.value)}/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="passwordFld" className="col-sm-2 col-form-label">
            Verify Password </label>
          <div className="col-sm-10">
            <input id="verifyPasswordFld" type="password"
                   className="form-control"
                   placeholder="123qwe#$%"
                   onChange={(event) => passwordMatchingFn(password, event.target.value) ? setPasswordMatching(true, password) : setPasswordMatching(false, password)}/>
            {!passwordMatching &&"Please confirm your password"}
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label"></label>
          <div className="col-sm-10">
            {!userExists && passwordMatching && <Link to="/ourfitnesspal/profile"
                   className="btn btn-primary btn-block"
                   onClick={() => createUser(userId, email, password)}>Sign
              Up</Link>}
            <div className="row">
              <div className="col-6">
                  <Link to="/ourfitnesspal/login">Login</Link>
              </div>
              <div className="col-6">
                <a href="#" className="float-right">Cancel</a>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
const stateToPropertyMapper = (state) => ({
  users: state.userReducer.users,
  userId: state.registerReducer.userId,
  password:state.registerReducer.password,
  email: state.registerReducer.email,
  userExists: state.registerReducer.userExists,
  passwordMatching: state.registerReducer.passwordMatching,

})

const propertyToDispatchMapper = (dispatch) => ({
  createUser : (userId, email, password) => createUser(dispatch, userId, email, password),
  onChangeUserId: (userId) => onChangeUserId(dispatch, userId),
  onChangeEmail: (email) => onChangeEmail(dispatch, email),
  onChangePassword: (password) => onChangePassword(dispatch, password),
  userIdExist: (users, userId) => users.find(user => user.userId === userId),
  setUserExists: (exist, userId) => {setUserExists(dispatch, exist); onChangeUserId(dispatch, userId)},
  passwordMatchingFn: (password, verifiedPassword) => password === verifiedPassword,
  setPasswordMatching: (matching, password) => {setPasswordMatching(dispatch, matching); onChangePassword(dispatch, password)},
})
export default connect(stateToPropertyMapper, propertyToDispatchMapper) (RegisterComponent)
