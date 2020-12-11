import ProfileService from "../services/ProfileService";

export const onChangeSearchName = (dispatch, searchName) =>
    dispatch({type:"ONCHANGE_SEARCH_NAME", searchName})

export const findUser = (dispatch, searchName) =>
    ProfileService.findUserByUserId(searchName)
        .then(user => {
            dispatch({type: "FIND_USER", user})
        })

export const addVideo = (dispatch, video) =>
    dispatch({type: "ADD_VIDEO", video})

export const addRecipe = (dispatch, recipe) =>
    dispatch({type: "ADD_RECIPE", recipe})

export const setVideo = (dispatch, videos) =>
    dispatch({type: "SET_VIDEO", videos})

export const setEditing = (dispatch, editing) =>
    dispatch({type: "SET_EDITING", editing})

export const onChangeNewVideoUrl = (dispatch, videoUrl) =>
    dispatch({type: "ONCHANGE_VIDEO_URL", videoUrl})
