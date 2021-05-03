import {
  onChangeItemName,
  searchItem,updatePossibleUnit,getInformationItemWithParams,getInformationItem,//setUpdateParams,
  setUpdated, onChangeAmount
} from "../actions/SearchAction";
import {connect} from "react-redux";
import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import resultItemReducer from "../reducers/ResultItemReducer";
import HomePage from "./HomePageComponents/HomePage";
import HomePageHeader from "./HomePageComponents/HomePageHeader";
import "../components/HomePageComponents/ResultItem.css"

class resultItemComponent extends React.Component {
  state = {
    itemName: "",
    amount: 0,
    possibleUnit: "",
    itemId: "",
    updatedParams: false
  }

  componentDidMount() {
    console.log("URL params for mount:", this.props.match.params.itemId)

    this.setState({
      amount: this.props.match.params.amount,
      itemId: this.props.match.params.itemId,
      possibleUnit: this.props.match.params.possibleUnit
    })
    if(this.props.match.params.amount) {
      this.props.getInformationItemWithParams(this.props.match.params.itemId, this.props.match.params.amount, this.props.match.params.possibleUnit )
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevProps.match.params.amount !== this.props.match.params.amount ||
        prevProps.match.params.possibleUnit !== this.props.match.params.possibleUnit) {
      console.log("URL params for mount updated version:", this.props.match.params.amount)
      this.setState({
        amount: this.props.match.params.amount,
        possibleUnit: this.props.match.params.possibleUnit
      })
      if(this.props.match.params.amount) {
        this.props.getInformationItemWithParams(this.props.match.params.itemId, this.props.match.params.amount, this.props.match.params.possibleUnit )
      }
    }
  }

  searchByTitle = (itemId, amount, possibleUnit) => {
    this.props.history.push(`/ourfitnesspal/search/details/${itemId}/amount/${amount}/units/${possibleUnit}`)
  }

  render() {
    return(
            <div>
        <HomePageHeader/>
    <div className="wbdv-results-page-margins">
      {this.props.updated && this.props.getInformationItem(this.props.itemId)}
      {console.log("uppdatedParams", this.props.updatedParams)}
      {/*{this.props.updatedParams && this.props.getInformationItemWithParams(this.props.itemId, this.props.amount, this.props.possibleUnit)}*/}
      <h2>{this.props.originalName}</h2>
      <div className="form-group row wbdv-margin-header">
        Amount
        <div className="col-sm-4">
          <input id="amountFld"
                 className="form-control"
                 placeholder="1"
                 onChange={(event) => this.props.onChangeAmount(event.target.value)}/>
        </div>
        Unit
        <div className="col-sm-4">
          {console.log("possible Unit", this.props.possibleUnit)}
          <select value={this.props.possibleUnit !== '' ? this.props.possibleUnit : "chooseOne"} id="unitSelect" className="browser-default custom-select"
                  onChange={(event) => this.props.updatePossibleUnit(event.target.value)}>
            <option value="chooseOne" disabled>choose one</option>
            {this.props.possibleUnits.map((unit) =>
            document.getElementById("unitSelect").value === this.props.possibleUnit ?
                <option value={unit.toString()} selected>{unit}</option> : <option value={unit.toString()}>{unit}</option>
            )}
          </select>
        </div>
        <div className="col-sm-2">
          <button className={"btn btn-block btn-primary"}
                  onClick={() => this.searchByTitle(this.props.itemId, this.props.amount, this.props.possibleUnit)}>lookUp</button>
        </div>
      </div>
      <div className="form-group row">
        <div className="col-sm-4">
          <img src={`https://spoonacular.com/cdn/ingredients_250x250/${this.props.image}`}/>
        </div>
        <div className="col-sm-8">
          {
                <div>
            Amount : {this.props.amount}   Possible Unit: {this.props.possibleUnit}
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
              {this.props.nutrients && this.props.nutrients.map((nutrient) =>
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
    </div>
    )
  }
}

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
  // setUpdateParams: (updateParams) => setUpdateParams(dispatch, updateParams),
})

export default withRouter(connect(stateToPropertyMapper, propertyToDispatchMapper) (resultItemComponent))

