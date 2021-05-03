import React from "react"
import {Link, NavLink} from 'react-router-dom'
import {Grid} from "@material-ui/core";
import "./HomePageBody.Style.css"
import "./cards-search.css"
import "./Cards.css"

const HomePageCardItems = ({search}) => {
    let {label, image, calories, ingredients} = search.recipe
    return(
    <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
        <div className="card-deck wbdv-card-dim wbdv-cards-items wbdv-homepage-cards wbdv-cards-wrapper">
            <div className="card wbdv-hover-cards">
                <img src={image}
                     className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{label}</h5>
                    <p className="card-text">Calories: {Math.round(calories,0)} <br/>
                    <button
                            className="btn btn-primary">
                            Ingredients
                        </button> </p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Last updated {new Date().getSeconds().toString()} seconds ago</small>
                </div>
            </div>

        </div>
    </Grid>
    )}
export default HomePageCardItems;
