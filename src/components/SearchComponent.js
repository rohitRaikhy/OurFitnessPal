import React from "react";
import {connect} from "react-redux";
import { Link } from "react-router-dom";
import {
  onChangeItemName, searchItem,
} from "../actions/SearchAction";

import searchReducer from "../reducers/SearchReducer";
import ResultItemComponent from "./ResultItemComponent";

const SearchComponent = ({
  itemName, results,
  onChangeItemName,searchItem,
}) =>
    <div className="container">
      <h1>Search Food Nutrition</h1>
      <form>
        <div className="form-group row">
          <label htmlFor="foodNameFld" className="col-sm-2 col-form-label">
            FoodName </label>
          <div className="col-sm-8">
            <input id="foodNameFld"
                   className="form-control"
                   placeholder="Cheddar Cheese"
                   onChange={(event) => onChangeItemName(event.target.value)}/>
          </div>
          {/*<div className="col-sm-2">*/}
          {/*  <button className="btn btn-primary btn-block"*/}
          {/*          onClick={() => this.searchItem(this.state.itemName)}>Search</button>*/}
          {/*</div>*/}
        </div>
      </form>
      {itemName}
      <h3>RESULT</h3>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>image</th>
          </tr>
        </thead>
        {results && results.map((result) =>
            <tr>
              <td>{result.id}</td>
              <td>
                <Link to={`/ourfitnesspal/search/${result.id}`}>
                  {result.name}
                </Link>
              </td>
              <td><img src={`https://spoonacular.com/cdn/ingredients_100x100/${result.image}`}/></td>
            </tr>
          )}
      </table>
      {/*{results.map((result) => <li>{result.fdcId} {result.description} {result.ingredients}</li>)}*/}
    </div>

const stateToPropertyMapper = (state) => ({
  itemName: state.searchReducer.itemName,
  results: state.searchReducer.results,
})
const propertyToDispatchMapper = (dispatch) => ({
  onChangeItemName : (itemName) => {onChangeItemName(dispatch, itemName); searchItem(dispatch, itemName)},
  searchItem : (itemName) => searchItem(dispatch, itemName),
})

export default connect(stateToPropertyMapper, propertyToDispatchMapper) (SearchComponent)
