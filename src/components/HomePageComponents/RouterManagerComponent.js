import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginComponent from "./LoginComponent";
import RegisterComponent from "./RegisterComponent";
import ProfileComponent from "./ProfileComponent";
import {BrowserRouter as Router, BrowserRouter, Link, Route, Switch} from "react-router-dom";
// import {findAllUsers} from "../services/HomeService";
import {connect} from "react-redux";
// import userService from "./services/UserService";
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
    // state = {
    //   users: [],
    //   loginStatus:false,
    // };

    state = {
        userLoggedIn : {},
    }

    // componentDidMount() {
    //   findAllUsers().then((users) => {
    //     this.setState((prevState) => ({
    //       users: users,
    //     }));
    //   });
    // }
    findUserLoggedIn = () => {

    }
    componentDidMount() {
        this.props.findAllUsers();
        profile().then(p => {
            p !== null &&
            console.log("DID MOUNT THIS PROFILE: " + p)
            // this.props.login(p);
            this.setState((prevState) => ({
                userLoggedIn : p
        }))})
        // this.props.loginUser && this.props.login(this.props.loginUser);
    }
    // componentDidUpdate() {
    //     this.props.loginUser && profile().then(p => {
    //         p !== null &&
    //         console.log("DID UPDATE THIS PROFILE: " + p)
    //         // this.props.login(p);
    //         this.setState((prevState) => ({
    //             userLoggedIn : p
    //         }))})
    // }

    // logout = () =>
    //     loginService.logout().then(status => this.props.history.push("/ourfitnesspal"))

    render() {
        return (
            // <HomePageHeader/>
            <BrowserRouter>
                <div>
                    <Route path="/" exact>
                        <PrivacyComponent/>
                    </Route>
                    <Route path="/ourfitnesspal" exact>
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
                    {/*<Route path="/ourfitnesspal/profile" exact>*/}
                    {/*    <ProfileComponent/>*/}
                    {/*</Route>*/}
                    <Route path={["/ourfitnesspal/search"]} exact >
                        <SearchComponent/>
                    </Route>
                    <Route path="/ourfitnesspal/search/:itemId" component={ResultItemComponent}/>
                    {/*This is the anonymous user*/}
                    <Route path="/ourfitnesspal/userProfile" component={userSearchComponent}/>
                    {/*<Route*/}
                    {/*    path={["/ourfitnesspal/userProfile",*/}
                    {/*        "/ourfitnesspal/userProfile/:userId"]}*/}
                    {/*    exact*/}
                    {/*    component={ProfileComponent}/>*/}
                    <Route path="/ourfitnesspal/admin" exact>
                        <AdminPageComponent/>
                    </Route>
                </div>
            </BrowserRouter>
        );
    }
}

const stateToPropertyMapper = (state) => ({
    users: state.userReducer.users,
    loginUser: state.loginReducer.loginUser,
    user: state.profileReducer.user
})

const propertyToDispatchMapper = (dispatch) => ({
    findAllUsers : () => userService.findAllUsers().then(users => dispatch({type: "FIND_ALL_USERS", users})),
    login: (user) => login(dispatch, user.userId),
})

export default connect(stateToPropertyMapper, propertyToDispatchMapper)(RouterManagerComponent)
