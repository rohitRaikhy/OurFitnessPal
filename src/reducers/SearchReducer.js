
const initialState = {
  itemName: "",
  results: [],
}

const searchReducer = (state=initialState, action) => {
  switch (action.type) {
    case "SEARCH_RESULT":
      return {
        ...state,
        results: action.results.results,
        itemName: action.itemName,
      }
    case "ONCHANGE_ITEM_NAME":
      return {
        ...state,
        itemName: action.itemName,
      }
    default:
      return state
  }
}

export default searchReducer
