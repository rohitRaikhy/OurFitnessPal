import searchService from "../services/SearchService";

export const onChangeItemName = (dispatch, itemName) =>
    dispatch({type:"ONCHANGE_ITEM_NAME", itemName})

export const searchItem = (dispatch, itemName) => {
    let newItemName = itemName.split(" ").join("%20");
    console.log("NEW ", newItemName);
    searchService.searchItem(newItemName).then(results => {
        console.log(results.results);
        dispatch({type:"SEARCH_RESULT", results, itemName})})
}

export const getInformationItem = (dispatch, itemId) => {
    searchService.getDetailItem(itemId).then(details => dispatch({type: "SAVE_DETAIL_ITEM", details}))
}

export const getInformationItemWithParams = (dispatch, itemId, amount, unit) => {
    searchService.getInformationItemWithParams(itemId, amount, unit).then(details => {
        console.log(details.nutrition["nutrients"][0]);
        let newArray = [];
        let nutrients = details.nutrition["nutrients"];
        for (var i = 0; i <nutrients.length; i++) {
            let newSub = [];
            newSub.push(nutrients[i].title);
            newSub.push(nutrients[i].amount);
            newSub.push(nutrients[i].unit);
            newArray.push(newSub)
        }
        console.log(newArray)
        dispatch({type: "SAVE_DETAIL_ITEM_WITH_PARAMS", newArray, amount, unit})})
}

export const setUpdated = (dispatch, updated) =>
    dispatch({type: "SET_UPDATED", updated})

export const onChangeAmount = (dispatch, amount) =>
    dispatch({type:"ONCHANGE_AMOUNT", amount})

export const updatePossibleUnit = (dispatch, unit) =>
    dispatch({type:"UPDATE_UNIT", unit})

export const setUpdateParams = (dispatch, updateParams) =>
    dispatch({type:"SET_UPDATE_PARAMS", updateParams})
