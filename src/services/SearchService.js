const SEARCH_INGREDIENT_ITEM = "https://api.spoonacular.com/food/ingredients/search?query=";
const API_KEY = "apiKey=56048a40e399452eb102658417d73d76";
const DETAIL_INGREDIENT_ITEM = "https://api.spoonacular.com/food/ingredients";
const searchItem = (itemName) =>
  fetch(`${SEARCH_INGREDIENT_ITEM}${itemName}&sort=calories&sortDirection=desc&${API_KEY}`).then(response => response.json())

const getDetailItem = (itemId) =>
    fetch(`${DETAIL_INGREDIENT_ITEM}/${itemId}/information?${API_KEY}`).then(response => response.json())

const getInformationItemWithParams = (itemId, amount, unit) =>
    fetch(`${DETAIL_INGREDIENT_ITEM}/${itemId}/information?amount=${amount}&unit=${unit}&${API_KEY}`).then(response => response.json())

export default {
  searchItem,
  getDetailItem,
  getInformationItemWithParams
}

