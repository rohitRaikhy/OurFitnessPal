import loginService from "../services/LoginService";
export const verifyUser = (dispatch, users, userId, password) =>
  dispatch({type: "VERIFY_USER", users, userId, password})

export const onChangeUserId = (dispatch, userId) =>
    dispatch({type:"ONCHANGE_USERID", userId})

export const onChangePassword = (dispatch, password) =>
    dispatch({type:"ONCHANGE_PASSWORD", password})

export const logout = () =>
    loginService.logout();


export const login = (dispatch, userId) =>
  loginService.login(userId)
