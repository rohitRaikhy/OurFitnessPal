import React from "react";

const initialState = {
    keyword: ""
}


const recipeReducer = (state=initialState, action) => {
    switch (action.type) {

        case "KEYWORD_MAPPER":
            return {
                ...state,
                keyword: action.keyword
            }
        default:
            return state
    }
}

export default recipeReducer;




