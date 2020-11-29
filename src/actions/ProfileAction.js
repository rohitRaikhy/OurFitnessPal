import ProfileService from "../services/ProfileService";

export const onChangeSearchName = (dispatch, searchName) =>
    dispatch({type:"ONCHANGE_SEARCH_NAME", searchName})

export const findUser = (dispatch, searchName) =>
    ProfileService.findUserByUserId(searchName)
        .then(user => {
            dispatch({type: "FIND_USER", user})
        })
