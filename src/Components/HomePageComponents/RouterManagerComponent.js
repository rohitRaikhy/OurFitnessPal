import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginComponent from "../LoginComponent";
import RegisterComponent from "../RegisterComponent";
import ProfileComponent from "../ProfileComponent";
import {BrowserRouter as Router, BrowserRouter, Link, Route, Switch} from "react-router-dom";
// import {findAllUsers} from "../services/HomeService";
import {connect} from "react-redux";
// import userService from "./services/UserService";
import userService from "../../services/UserService"
import HomePage from "../HomePageComponents/HomePage";
import HomePageHeader from "./HomePageHeader"
import HomePageBody from "./HomePageBody";
import "./HomePageBody.Style.css"
import "./HomePage.Style.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css"
import PrivacyComponent from "../PrivacyPage/PrivacyComponent"

class RouterManagerComponent extends React.Component {
    // state = {
    //   users: [],
    //   loginStatus:false,
    // };

    // componentDidMount() {
    //   findAllUsers().then((users) => {
    //     this.setState((prevState) => ({
    //       users: users,
    //     }));
    //   });
    // }
    componentDidMount() {
        this.props.findAllUsers();
    }

    render() {
        return (
            // <HomePageHeader/>
            <BrowserRouter>
                <div>
                    {/*<Link to="/ourfitnesspal">HOME</Link> |*/}
                    {/*<Link to="/ourfitnesspal/login">Login</Link> |*/}
                    {/*<Link to="/ourfitnesspal/register">Register</Link> |*/}
                    {/*<Link to="/ourfitnesspal/profile">Profile</Link>*/}
                    {/*<Route path="/ourfitnesspal" exact>*/}
                    {/*    /!*<HomeComponent/>*!/*/}
                    {/*    <HomePage/>*/}
                    {/*</Route>*/}

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
                    <Route path="/ourfitnesspal/profile" exact>
                        <ProfileComponent/>
                    </Route>
                </div>
                ,
            </BrowserRouter>
        );
    }
}

const stateToPropertyMapper = (state) => ({
    users: state.userReducer.users,
    loginUser: state.loginReducer.loginUser,
})

const propertyToDispatchMapper = (dispatch) => ({
    findAllUsers : () => userService.findAllUsers().then(users => dispatch({type: "FIND_ALL_USERS", users})),
})

export default connect(stateToPropertyMapper, propertyToDispatchMapper)(RouterManagerComponent)
