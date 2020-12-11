import registerService from "../services/RegisterService";
import userService from "../services/UserService";
import {useHistory} from "react-router";


// export const createUser = (dispatch, userId, email, password) => {
//   let newUser = {
//     userId: userId,
//     email: email,
//     password: password
//   }

//TODO: ADDED HERE TO ADD MORE INFO ABOUT USER
export const createUser = (dispatch, userId, email, password, weight, heightFt, heightInch, location, gender, role) => {
  let notNull = userId != null && email != null && password != null && weight != null && heightFt != null &&
      heightInch != null &&  location != null && gender != null && role != null;
  let newUser = {
    userId: userId,
    email: email,
    password: password,
    weight: weight,
    heightFt: heightFt,
    heightInch: heightInch,
    location: location,
    gender: gender,
    role: role,
  }
  notNull && userService.createUser(newUser).then(newUser => {
    dispatch({type:"CREATE_USER", newUser});

  })}

export const findAllUsers = (dispatch) =>{
  registerService.findAllUsers().then(users => {
    dispatch({type:"FIND_ALL_USERS", users})
  })
}

export const setPasswordMatching = (dispatch, matching) => {
  dispatch({type: "SET_PASSWORD_MATCHING", matching})
}

export const setUserExists = (dispatch, exist) => {
  dispatch({type:"SET_USER_EXISTS", exist})
}

export const onChangeUserId = (dispatch, userId) =>
    dispatch({type:"ONCHANGE_USERID", userId})

export const onChangeEmail = (dispatch, email) =>
    dispatch({type:"ONCHANGE_EMAIL", email})

export const onChangePassword = (dispatch, password) =>
    dispatch({type:"ONCHANGE_PASSWORD", password})

// ADDED HERE TO ADD TO PROFILE FOR ADDED USER INFO
export const onChangeCurrentWeight = (dispatch, weight) =>
    dispatch({type:"ONCHANGE_CURRENT_WEIGHT", weight})

export const onChangeHeightFt = (dispatch, heightFt) =>
    dispatch({type:"ONCHANGE_HEIGHT_FT", heightFt})

export const onChangeHeightInch = (dispatch, heightInch) =>
    dispatch({type:"ONCHANGE_HEIGHT_INCH", heightInch})

export const setLocation = (dispatch, state) =>
    dispatch({type: "SET_LOCATION", state})

export const setGender = (dispatch, gender) =>
    dispatch({type: "SET_GENDER", gender})

export const setRole = (dispatch, role) =>
    dispatch({type: "SET_ROLE", role})


