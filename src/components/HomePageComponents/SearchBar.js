import React from "react"
import {connect} from "react-redux";
import {Link} from "react-router-dom"
import APP_ID from "./API-data"
import APP_KEY from "./API-data"
import "./Cards.css"
import HomePageCards from "./HomePageCards";
import HomePageCardItems from "./HomePageCardItems";
import {Grid} from "@material-ui/core";
import "./HomePage.Style.css"
import {searchByTitle} from "../../actions/RecipeAction";
import {withRouter} from "react-router";

class searchBar extends React.Component {
        state = {
            keyword: "",
            food: [],
            count: 0,
    }
    componentDidMount() {
        let keyword = this.props.keyword
        console.log("URL params:", this.props.match.params.keyword)
        this.setState({
            keyword: this.props.match.params.keyword
        })
        if(this.props.match.params.keyword) {
            this.searchFood(this.props.match.params.keyword)
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
            if(prevProps.match.params.keyword !== this.props.match.params.keyword) {
                this.setState({
                    keyword: this.props.match.params.keyword
                })
                if(this.props.match.params.keyword) {
                    this.searchFood(this.props.match.params.keyword)
                }
            }
    }


    keywordChanged = event =>
      this.setState({keyword: event.target.value})

    searchFood = (keyword) => {
        fetch(`https://api.edamam.com/search?q=${keyword}&app_id=9b948587&app_key=3e7d74407131b5861669fbea1d249b1d`
        )
            .then(response => response.json())
            .then(this.renderFood)
    }

    renderFood = (response) =>
        this.setState({
            food: response.hits
        })

    searchByTitle = (keyword) => {
        this.props.history.push(`/ourfitnesspal/home/${keyword}`)
    }
    render() {
        return (
            <div className="wbdv-search-margin">
                <h2>Search for a recipe from our database.</h2>
                <div className="input-group">
                    <input
                        value={this.state.keyword}
                        onChange={this.keywordChanged}
                        className="form-control wbdv-margin-search-bar"
                        placeholder="keyword"/>
                    <div className="input-group-append">
                        <button
                            onClick={() => this.searchByTitle(this.state.keyword)}
                            className="btn btn-primary">
                            Search
                        </button>
                    </div>
                </div>
                <div>
                <Grid container spacing={1}>
                    {this.state.food.length !== 0 &&
                    this.state.food.slice(0,6).map(food =>
                    <HomePageCardItems search = {food}/>
                        )}
                </Grid>
            </div>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    keyword: state.recipeReducer.keyword,
})

const propertyToDispatchMapper = (dispatch) => ({
    searchByTitle: (keyword) => searchByTitle(dispatch, keyword)
})
export default withRouter(connect(stateToPropertyMapper, propertyToDispatchMapper)(searchBar));
