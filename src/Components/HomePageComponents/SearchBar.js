import React from "react"
import {connect} from "react-redux";
import {Link} from "react-router-dom"
import APP_ID from "./API-data"
// import URL from "./API-data"
import APP_KEY from "./API-data"
import "./Cards.css"
import HomePageCards from "./HomePageCards";
import HomePageCardItems from "./HomePageCardItems";
import {Grid} from "@material-ui/core";
// import HomePageCardItems from "./HomePageCardItems";
// import React from "react"
// import HomePageCardItems from "./HomePageCardItems";
// import "./Cards.css"
import "./HomePage.Style.css"


class searchBar extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            keyword: "",
            food: [],
            count: 0
        }
    }


    keywordChanged = event =>
      this.setState({keyword: event.target.value})

    searchFood = () => {
        fetch(`https://api.edamam.com/search?q=${this.state.keyword}&app_id=9b948587&app_key=3e7d74407131b5861669fbea1d249b1d`
        )
            .then(response => response.json())
            .then(this.renderFood)
        this.state.keyword = "";
    }

    renderFood = (response) =>
        // console.log(response.hits)
        this.setState({
            food: response.hits
        })
        // console.log(food)

    render() {
        return (
            <div className="wbdv-search-margin">
                <h2>Search from over millions of types of foods from our database.</h2>
                <div className="input-group">
                    <input
                        value={this.state.keyword}
                        onChange={this.keywordChanged}
                        className="form-control wbdv-margin-search-bar"
                        placeholder="keyword"/>
                    <div className="input-group-append">
                        <button
                            onClick={this.searchFood}
                            className="btn btn-primary">
                            Search
                        </button>
                    </div>
                </div>
                <div>
                <Grid container spacing={1}>
                    {this.state.food.length !== 0 &&
                    this.state.food.slice(0,8).map(food =>
                    <HomePageCardItems search = {food}/>
                    // <HomePageCards search={food}/>
                        )}
                </Grid>
            </div>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
})

const propertyToDispatchMapper = (dispatch) => ({

})


export default connect(stateToPropertyMapper, propertyToDispatchMapper)(searchBar);
