const initialState = {
  amount: '1',
  originalName: '',
  possibleUnits: [],
  possibleUnit: '',
  aisle: '',
  categoryPath: [],
  image: '',
  updated: true,
  nutrients: [],
  updatedParams: false,
}

const resultItemReducer = (state=initialState, action) => {
  switch (action.type) {
    case "SET_UPDATE_PARAMS":
      return {
        ...state,
        updatedParams: action.updateParams,
      }
    case "SAVE_DETAIL_ITEM_WITH_PARAMS":
      return {
        ...state,
        nutrients: action.newArray,
        amount: action.amount,
        possibleUnit: action.unit,
        updatedParams: false,
      }
    case "UPDATE_UNIT":
      return {
        ...state,
        possibleUnit: action.unit,
        updatedParams: true,
      }
    case "ONCHANGE_AMOUNT":
      return {
        ...state,
        amount: action.amount,
        updatedParams: true,
      }
    case "SET_UPDATED":
      return {
        ...state,
        updated: action.updated,
      }
    case "SAVE_DETAIL_ITEM":
      return {
        ...state,
        updated: false,
        originalName: action.details.originalName,
        possibleUnits: action.details.possibleUnits,
        possibleUnit: '',
        aisle: action.details.aisle,
        image: action.details.image,
        categoryPath: action.details.categoryPath,
      }
    default:
      return state
  }
}

export default resultItemReducer;
