import {
  onChangeItemName,
  searchItem,updatePossibleUnit,getInformationItemWithParams,getInformationItem,setUpdateParams,
  setUpdated, onChangeAmount
} from "../actions/SearchAction";
import {connect} from "react-redux";
import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import resultItemReducer from "../reducers/ResultItemReducer";


const resultItemComponent = ({
  itemId,onChangeAmount, amount,updatePossibleUnit,updatedParams, nutrients,getInformationItemWithParams,setUpdateParams,
  originalName, possibleUnits, possibleUnit, aisle, categoryPath, image,
  getInformationItem,setUpdated, updated}) =>
    <div>
      {updated && getInformationItem(itemId)}
      {console.log("uppdatedParams", updatedParams)}
      {updatedParams && getInformationItemWithParams(itemId, amount, possibleUnit)}
      <h2>{originalName}</h2>
      <div className="form-group row">
        Amount
        <div className="col-sm-4">
          <input id="amountFld"
                 className="form-control"
                 placeholder="1"
                 onChange={(event) => onChangeAmount(event.target.value)}/>
        </div>
        Unit
        <div className="col-sm-4">
          {console.log("possible Unit", possibleUnit)}
          <select value={possibleUnit !== '' ? possibleUnit : "chooseOne"} id="unitSelect" className="browser-default custom-select"
                  onChange={(event) => updatePossibleUnit(event.target.value)}>
            <option value="chooseOne" disabled>choose one</option>
            {possibleUnits.map((unit) =>
            document.getElementById("unitSelect").value === possibleUnit ?
                <option value={unit.toString()} selected>{unit}</option> : <option value={unit.toString()}>{unit}</option>
            )}
          </select>

        </div>
        {/*<div className="col-sm-2">*/}
        {/*  <button className={"btn btn-block btn-primary"}*/}
        {/*          onClick={() => setUpdateParams(true)}>lookUp</button>*/}
        {/*</div>*/}
      </div>
      <div className="form-group row">
        <div className="col-sm-4">
          <img src={`https://spoonacular.com/cdn/ingredients_250x250/${image}`}/>
        </div>
        <div className="col-sm-8">
          {
                <div>
            Amount : {amount}   Possible Unit: {possibleUnit}
                </div>
          }

          <table className="table">
            <thead>
            <tr>
              <th scope="col">title</th>
              <th scope="col">amount</th>
              <th scope="col">unit</th>
            </tr>
            </thead>
            <tbody>
              {nutrients && nutrients.map((nutrient) =>
                <tr>
                  <th scope="row">{nutrient[0]}</th>
                  <td>{nutrient[1]}</td>
                  <td>{nutrient[2]}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>


const stateToPropertyMapper = (state, ownProps) => ({
  itemId: ownProps.match.params.itemId,
  amount: state.resultItemReducer.amount,
  originalName: state.resultItemReducer.originalName,
  possibleUnits: state.resultItemReducer.possibleUnits,
  possibleUnit: state.resultItemReducer.possibleUnit,
  aisle: state.resultItemReducer.aisle,
  categoryPath: state.resultItemReducer.categoryPath,
  image: state.resultItemReducer.image,
  updated:state.resultItemReducer.updated,
  nutrients: state.resultItemReducer.nutrients,
  updatedParams: state.resultItemReducer.updatedParams,

})
const propertyToDispatchMapper = (dispatch) => ({
  getInformationItem: (itemId) => {getInformationItem(dispatch, itemId)},
  setUpdated: (updated) => setUpdated(dispatch, updated),
  onChangeAmount: (amount) => onChangeAmount(dispatch, amount),
  updatePossibleUnit: (unit) => updatePossibleUnit(dispatch, unit),
  getInformationItemWithParams: (itemId, amount, unit) => getInformationItemWithParams(dispatch, itemId, amount, unit),
  setUpdateParams: (updateParams) => setUpdateParams(dispatch, updateParams),
})

export default withRouter(connect(stateToPropertyMapper, propertyToDispatchMapper) (resultItemComponent))
