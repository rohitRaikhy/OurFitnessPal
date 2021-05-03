import React from "react"
import HomePageHeader from "./HomePageHeader"
import "./HomePage.Style.css"
import NavbarTwo from "./navbarTwo"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import homePageBody from "./HomePageBody"
import HomePageBody from "./HomePageBody";
import HomePageCards from "./HomePageCards";

const HomePage = () =>


<div>
    <div>
        <Router>
            <HomePageBody/>
        <Switch>
        <Route path = "/ourFitnessPal" exact component={HomePageBody}/>
        </Switch>
        </Router>
    </div>

</div>



export default HomePage;


