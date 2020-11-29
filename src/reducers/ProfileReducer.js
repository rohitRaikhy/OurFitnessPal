import {Route} from "react-router-dom";
import userSearchComponent from "../components/HomePageComponents/UserSearchComponent";
import React from "react";


const initialState = {
    searchUserId: "",
    searchName: "",
    user: null
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
        default:
            return state
    }
}

export default profileReducer;
