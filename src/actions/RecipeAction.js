import RecipeService from "../services/RecipeService";

export const getRecipes = (dispatch) =>
    dispatch({type:"GET_RECIPES"})

export const searchByTitle = (dispatch, keyword) =>
    dispatch({type: "KEYWORD_MAPPER", keyword})
