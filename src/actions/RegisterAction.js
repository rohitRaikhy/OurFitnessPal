import registerService from "../services/RegisterService";
import userService from "../services/UserService";

export const createUser = (dispatch, userId, email, password) => {
  let newUser = {
    userId: userId,
    email: email,
    password: password
  }
  userService.createUser(newUser).then(newUser => {
    console.log(JSON.stringify(newUser))
    dispatch({type:"CREATE_USER", newUser})})}

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