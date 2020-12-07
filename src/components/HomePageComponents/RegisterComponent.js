import React from "react";
import {connect} from "react-redux";
import { Link } from "react-router-dom";
import ProfileComponent from "./ProfileComponent";
import "./Register.Style.css"
import {
  createUser,
  onChangeUserId,
  onChangeEmail,
  onChangePassword,
  setUserExists,
  setPasswordMatching,
  onChangeCurrentWeight,
  onChangeHeightFt,
  setLocation, setGender, onChangeHeightInch, setRole
} from "../../actions/RegisterAction";
import registerReducer from "../../reducers/RegisterReducer";
import LoginComponent from "./LoginComponent";
import userReducer from "../../reducers/UserReducer";
import adminReducer from "../../reducers/AdminReducer";
import HomePageHeader from "./HomePageHeader";
import USStateDropDown from "./USStateDropDownComponent";


const RegisterComponent = ({
    users,
    userId,
    password,
    email,
    createUser,
    userIdExist,passwordMatchingFn,
    userExists, passwordMatching,
  setUserExists, setPasswordMatching,
  onChangeUserId,onChangeEmail, onChangePassword,
  weight, onChangeCurrentWeight, onChangeHeightFt, heightFt,
  setGender, gender, location, onChangeHeightInch, heightInch, roles, setRole, role
}) =>
    <div className="container">
      <HomePageHeader/>
      <div className="wbdv-register-page-margins">
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
        <USStateDropDown />
        <div className="form-group row">
          <label htmlFor="gender" className="col-sm-2 col-form-label">
            Gender </label>
          <div className="col-sm-2">
            <input id="gender" name="gender" type="radio" onClick={() => setGender("male")}/> Male
          </div>
          <div className="col-sm-2">
            <input id="gender" name="gender" type="radio" onClick={() => setGender("female")}/> Female
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="gender" className="col-sm-2 col-form-label">
            Role </label>
          <div className="col-sm-10">
            <select className="form-control" id="role" onChange={(event) => setRole(event.target.value)}>
              <option value="">Choose One</option>
              {roles.map( role =>
              <option value={role}>{role}</option>
              )}
            </select>
          </div>

        </div>

        <div className="form-group row">
          <label htmlFor="weight" className="col-sm-2 col-form-label">
            Current Weight</label>
          <div className="col-sm-10">
            <input id="weight"
                   className="form-control"
                   placeholder="enter weight in lbs"
                   onChange={(event) => onChangeCurrentWeight(event.target.value)}/>
          </div>
        </div>
          {console.log(weight)}
          <div className="form-group row">
            <label htmlFor="height" className="col-sm-2 col-form-label">
              Height</label>
            <div className="col-sm-3">
              <input id="heightFt"
                     className="form-control"
                     placeholder="enter height in feet"
                     onChange={(event) => onChangeHeightFt(event.target.value)}/>
            </div>
            Ft
            <div className="col-sm-3">
              <input id="heightInch"
                     className="form-control"
                     placeholder="enter height in inches"
                     onChange={(event) => onChangeHeightInch(event.target.value)}/>
            </div>Inches
        </div>

        <div className="form-group row">
          <label className="col-sm-2 col-form-label"></label>
          <div className="col-sm-10">
            {!userExists && passwordMatching && <Link to="/ourfitnesspal/login/"
                   className="btn btn-primary btn-block"
                   // onClick={() => createUser(userId, email, password)}>Sign
                onClick={() => createUser(userId, email, password, weight, heightFt, heightInch, location, gender, role)}>Sign
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


        {/*/!*ROHIT ADDED HERE FOR MORE INFO FROM USER FOR PROFILE PAGE*!/*/}
        {/*<h3 className="text-primary">Tell Us About Yourself</h3>*/}
        {/*<div className="form-group row">*/}
        {/*  <label htmlFor="weight" className="col-sm-2 col-form-label">*/}
        {/*    Current Weight</label>*/}
        {/*  <div className="col-sm-10">*/}
        {/*    <input id="weght" type="email"*/}
        {/*           className="form-control"*/}
        {/*           placeholder="enter weight in lbs"*/}
        {/*           onChange={(event) => onChangeCurrentWeight(event.target.value)}/>*/}
        {/*  </div>*/}
        {/*  {console.log(weight)}*/}
        {/*  /!*<div className="form-group row">*!/*/}
        {/*  /!*  <label htmlFor="weight" className="col-sm-2 col-form-label">*!/*/}
        {/*  /!*    Current Weight</label>*!/*/}
        {/*  /!*  <div className="col-sm-10">*!/*/}
        {/*  /!*    <input id="weght" type="email"*!/*/}
        {/*  /!*           className="form-control"*!/*/}
        {/*  /!*           placeholder="enter weight in lbs"*!/*/}
        {/*  /!*           onChange={(event) => onChangeCurrentWeight(event.target.value)}/>*!/*/}
        {/*  /!*  </div>*!/*/}
        {/*</div>*/}



    </div>
    </div>
const stateToPropertyMapper = (state) => ({
  users: state.userReducer.users,
  userId: state.registerReducer.userId,
  password:state.registerReducer.password,
  email: state.registerReducer.email,
  userExists: state.registerReducer.userExists,
  passwordMatching: state.registerReducer.passwordMatching,

  // ADDED HERE FOR ADDED USER STUFF
  weight: parseInt(state.registerReducer.weight),
  heightFt: parseInt(state.registerReducer.heightFt),
  heightInch: parseInt(state.registerReducer.heightInch),
  gender: state.registerReducer.gender,
  location:state.registerReducer.location,
  roles: state.adminReducer.roles,
  role: state.registerReducer.role,
})

const propertyToDispatchMapper = (dispatch) => ({
  // createUser : (userId, email, password) => createUser(dispatch, userId, email, password),
  //TODO: ADDED HERE TO ADD MORE INFO ABOUT THE USER
  createUser : (userId, email, password, weight, heightFt, heightInch, location, gender, role) =>
      createUser(dispatch, userId, email, password, weight, heightFt, heightInch, location, gender, role),

  onChangeUserId: (userId) => onChangeUserId(dispatch, userId),
  onChangeEmail: (email) => onChangeEmail(dispatch, email),
  onChangePassword: (password) => onChangePassword(dispatch, password),
  userIdExist: (users, userId) => users.find(user => user.userId === userId),
  setUserExists: (exist, userId) => {setUserExists(dispatch, exist); onChangeUserId(dispatch, userId)},
  passwordMatchingFn: (password, verifiedPassword) => password === verifiedPassword,
  setPasswordMatching: (matching, password) => {setPasswordMatching(dispatch, matching); onChangePassword(dispatch, password)},

  // ADDED HERE TO ADD TO USERS PROFILE
  onChangeCurrentWeight: (weight) => onChangeCurrentWeight(dispatch, weight),
  onChangeHeightFt: (heightFt) => onChangeHeightFt(dispatch, heightFt),
  onChangeHeightInch: (heightInch) => onChangeHeightInch(dispatch, heightInch),
  setGender: (gender) => setGender(dispatch, gender),
  setRole: (role) => setRole(dispatch, role),
})
export default connect(stateToPropertyMapper, propertyToDispatchMapper) (RegisterComponent)
