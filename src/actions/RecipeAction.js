import RecipeService from "../services/RecipeService";

export const getRecipes = (dispatch) =>
    dispatch({type:"GET_RECIPES"})
