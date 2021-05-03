import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginComponent from "./LoginComponent";
import RegisterComponent from "./RegisterComponent";
import ProfileComponent from "./ProfileComponent";
import {BrowserRouter as Router, BrowserRouter, Link, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import { login } from "../../actions/LoginActions";
import userService from "../../services/UserService";
import loginService from "../../services/LoginService";
import HomePage from "../HomePageComponents/HomePage";
import HomePageHeader from "./HomePageHeader"
import HomePageBody from "./HomePageBody";
import "./HomePageBody.Style.css"
import "./HomePage.Style.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css"
import PrivacyComponent from "../PrivacyPage/PrivacyComponent"
import SearchComponent from "../SearchComponent";
import ResultItemComponent from "../ResultItemComponent";
import userSearchComponent from "./UserSearchComponent";
import loggedInProfileComponent from "./loggedInProfileComponent";
import AdminPageComponent from "./AdminPageComponent";
import { profile } from "../../services/UserService";


class RouterManagerComponent extends React.Component {
    state = {
        userLoggedIn : {},
    }

    findUserLoggedIn = () => {

    }
    componentDidMount() {
        this.props.findAllUsers();
        profile().then(p => {
            p !== null &&
            console.log("DID MOUNT THIS PROFILE: " + p)
            this.setState((prevState) => ({
                userLoggedIn : p
        }))})
    }
    render() {
        return (
            <BrowserRouter>
                <Switch>
                <div>
                    <Route path="/" exact>
                        <PrivacyComponent/>
                    </Route>
                    <Route path={["/ourfitnesspal/home", "/ourfitnesspal/home/:keyword"]} exact>
                        <HomePageBody/>
                    </Route>
                    <Route path="/ourfitnesspal/login" exact>
                        <LoginComponent/>
                    </Route>
                    <Route path="/ourfitnesspal/register" exact>
                        <RegisterComponent/>
                    </Route>
                    <Route
                        path={["/ourfitnesspal/profile"]}
                        exact
                        component={ProfileComponent}/>

                    <Route
                        path={["/ourfitnesspal/profile/:userId"]}
                        exact
                        component={loggedInProfileComponent}/>
                    <Route path={["/ourfitnesspal/search/","/ourfitnesspal/search/:itemName" ]} exact >
                        <SearchComponent/>
                    </Route>

                    <Route path={["/ourfitnesspal/search/details/:itemId",
                        "/ourfitnesspal/search/details/:itemId/amount/:amount/units/:possibleUnit",
                        "/ourfitnesspal/search/details/:itemId/amount/:amount/units/"]} exact >
                           <ResultItemComponent/>
                    </Route>
                    <Route path="/ourfitnesspal/userProfile" component={userSearchComponent}/>
                    <Route path="/ourfitnesspal/admin" exact>
                        <AdminPageComponent/>
                    </Route>
                </div>
                    </Switch>
            </BrowserRouter>
        );
    }
}

const stateToPropertyMapper = (state) => ({
    users: state.userReducer.users,
    loginUser: state.loginReducer.loginUser,
    user: state.profileReducer.user,
})

const propertyToDispatchMapper = (dispatch) => ({
    findAllUsers : () => userService.findAllUsers().then(users => dispatch({type: "FIND_ALL_USERS", users})),
    login: (user) => login(dispatch, user.userId),
})

export default connect(stateToPropertyMapper, propertyToDispatchMapper)(RouterManagerComponent)
