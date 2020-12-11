import {Route} from "react-router-dom";
import userSearchComponent from "../components/HomePageComponents/UserSearchComponent";
import React from "react";


const initialState = {
    searchUserId: "",
    searchName: "",
    user: null,
    videos : [],
    // videos : ["http://www.youtube.com/embed/oc4QS2USKmk"],
    recipes : [],
    editing: false,
    newVideoUrl: "",
}

const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case "ONCHANGE_SEARCH_NAME":
            return {
                ...state,
                searchName: action.searchName,
            }
        case "FIND_USER":
            return {
                ...state,
                user: action.user,
            }
        case "ADD_VIDEO":
            return {
                ...state,
                videos: [...state.videos, action.video]
            }
        case "ADD_RECIPE":
            return {
                ...state,
                recipes: [...state.recipes, action.recipe]
            }
        case "FIND_ALL_CONTENTS":
            return {
                ...state,
                videos: action.contents
            }
        case "SET_VIDEO":
            return {
                ...state,
                videos: action.videos
            }
        case "SET_EDITING":
            return {
                ...state,
                editing: action.editing
            }
        case "ONCHANGE_VIDEO_URL":
            return {
                ...state,
                newVideoUrl: action.videoUrl
            }
        default:
            return state
    }
}

export default profileReducer;
