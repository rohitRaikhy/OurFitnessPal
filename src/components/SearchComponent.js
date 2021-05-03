import React from "react";
import {connect} from "react-redux";
import { Link } from "react-router-dom";
import {onChangeItemName, searchItem} from "../actions/SearchAction";
import searchReducer from "../reducers/SearchReducer";
import ResultItemComponent from "./ResultItemComponent";
import HomePageHeader from "./HomePageComponents/HomePageHeader";
import "../components/HomePageComponents/Register.Style.css"
import {searchByTitle} from "../actions/RecipeAction";
import {withRouter} from "react-router";

class SearchComponent extends React.Component {

    state = {
        itemName: "",
    }

    componentDidMount() {
        console.log("URL params:", this.props.match.params.itemName)
        this.setState({
            itemName: this.props.match.params.itemName
        })
        if(this.props.match.params.itemName) {
            this.props.searchItem(this.props.match.params.itemName)
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.match.params.itemName !== this.props.match.params.itemName) {
            this.setState({
                itemName: this.props.match.params.itemName
            })
            if(this.props.match.params.itemName) {
                this.props.searchItem(this.props.match.params.itemName)
            }
        }
    }

    searchByTitle = (itemName) => {
        this.props.history.push(`/ourfitnesspal/search/${itemName}`)
    }

    render() {
        {console.log("These are the props for search:", this.props)}
        return(
                <div className="container">
        <HomePageHeader/>
        <div className="wbdv-register-page-margins">
      <h1>Search Food Nutrition</h1>
      <form>
        <div className="form-group row">
          <label htmlFor="foodNameFld" className="col-sm-2 col-form-label">
            FoodName </label>
          <div className="col-sm-8">
            <input id="foodNameFld"
                   className="form-control"
                   placeholder="Cheddar Cheese"
                   onChange={(event) => this.props.onChangeItemName(event.target.value)}/>

          </div>
            <button
                onClick={() => this.searchByTitle(this.props.itemName)}
                className="btn btn-primary">
                Search
            </button>
        </div>
      </form>
      {this.props.itemName}
      <h3>RESULT</h3>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>image</th>
          </tr>
        </thead>
        {this.props.results && this.props.results.map((result) =>
            <tr>
              <td>{result.id}</td>
              <td>
                <Link to={`/ourfitnesspal/search/details/${result.id}`}>
                  {result.name}
                </Link>
              </td>
              <td><img src={`https://spoonacular.com/cdn/ingredients_100x100/${result.image}`}/></td>
            </tr>
          )}
      </table>
    </div>
    </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
  itemName: state.searchReducer.itemName,
  results: state.searchReducer.results,
})
const propertyToDispatchMapper = (dispatch) => ({
    onChangeItemName : (itemName) => {onChangeItemName(dispatch, itemName)},
  searchItem : (itemName) => searchItem(dispatch, itemName),
})

export default withRouter(connect(stateToPropertyMapper, propertyToDispatchMapper) (SearchComponent))
