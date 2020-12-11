import UserService from "../services/UserService";

export const setEditing = (dispatch, editing) =>
    dispatch({type:"SET_EDITING", editing})

export const setRole = (dispatch, role) =>
    dispatch({type: "SET_ROLE_BY_ADMIN", role})

export const deleteUser = (dispatch, userId) =>
    UserService.deleteUser(userId).then((status) => dispatch({type:"DELETE_USER", userId}))
