import React from "react"
import "./HomePageBody.Style.css"
import HomePageCards from "./HomePageCards";
import SearchBar from "./SearchBar";
import HomePageHeader from "./HomePageHeader";
import "./Cards.css"
import HomePageCardItems from "./HomePageCardItems";
import {NavLink} from "react-router-dom";

const HomePageBody = () =>
    <div>
    <div>
        <HomePageHeader/>
    </div>
    <div>
        <div>
    <div className="wbdv-homepage-container">
        <div className="container">
       <div className="wbdv-homepage-buttons">
           <h1 className="wbdv-heading-body">Healthy Living Starts With What We Eat!</h1>
           <p className="wbdv-heading-paragraph">
               Take control of your goals. Track calories, break down ingredients,
               and log activities with OurFitnessPal.
           </p>
           <button
               className="btn btn-primary btn btn-outline-light wbdv-btn-mobile">
               <NavLink
                   className = "wbdv-link"
                   to="/ourfitnesspal/register"><span
                   className="sr-only">
                        (current)</span>Get Started</NavLink>
           </button>
           <span className="pull-left">
               <h5>Already have an account?</h5>
               <NavLink
                   className = "wbdv-link active text-primary"
                   to="/ourfitnesspal/login"><span
                   className="sr-only">
                        (current)</span><h3>Login</h3></NavLink>
           </span>
       </div>
        </div>
    </div>
        </div>
        <div className="wbdv-homepage-container-search">
    <SearchBar/>
    </div>
    </div>
    </div>
export default HomePageBody;

