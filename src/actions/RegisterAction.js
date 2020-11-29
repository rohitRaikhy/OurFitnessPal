import registerService from "../services/RegisterService";
import userService from "../services/UserService";

// export const createUser = (dispatch, userId, email, password) => {
//   let newUser = {
//     userId: userId,
//     email: email,
//     password: password
//   }

//TODO: ADDED HERE TO ADD MORE INFO ABOUT USER
export const createUser = (dispatch, userId, email, password, weight, heightFt) => {
  let newUser = {
    userId: userId,
    email: email,
    password: password,
    weight: weight,
    heightFt: heightFt
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

// ADDED HERE TO ADD TO PROFILE FOR ADDED USER INFO
export const onChangeCurrentWeight = (dispatch, weight) =>
    dispatch({type:"ONCHANGE_CURRENT_WEIGHT", weight})

export const onChangeHeight = (dispatch, heightFt) =>
    dispatch({type:"ONCHANGE_HEIGHT", heightFt})
