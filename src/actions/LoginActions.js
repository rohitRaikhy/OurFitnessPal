import loginService from "../services/LoginService";
export const verifyUser = (dispatch, users, userId, password) =>
    dispatch({type:"VERIFY_USER", users, userId, password})
    // loginService.findUserByUserId(userId)
    // .then(user => dispatch({type:"VERIFY_USER", users, userId, password}))

export const onChangeUserId = (dispatch, userId) =>
    dispatch({type:"ONCHANGE_USERID", userId})

export const onChangePassword = (dispatch, password) =>
    dispatch({type:"ONCHANGE_PASSWORD", password})