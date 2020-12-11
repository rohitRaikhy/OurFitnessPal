import React from "react"
import "./HomePage.Style.css"
import {Link, NavLink} from "react-router-dom";
import loginService from "../../services/LoginService";
const homePageHeading = (history) =>
    <div className="container">
        <div className="container-fluid">

            <div className="fixed-top">


                <nav className="navbar navbar-expand-lg navbar-dark wbdv-homepage-header">
                    <a className="navbar-brand" href="#">
                        <img src="https://static8.depositphotos.com/1010751/1032/v/950/depositphotos_10323838-stock-illustration-fitness-logo.jpg" width="30" height="30" alt=""
                             loading="lazy"/>
                    </a>

                    {/*<a className="navbar-brand wbdv-label wbdv-course-manager" href="#">Our Fitness Pal</a>*/}
                    <NavLink className = "wbdv-link navbar-brand wbdv-label wbdv-course-manager"
                             to="/ourfitnesspal"><span
                        className="sr-only">
                        (current)</span>Our Fitness Pal</NavLink>

                    <div className="collapse navbar-collapse wbdv-button wbdv-list-layout wbdv-padding" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            {/*<li className="nav-item active">*/}
                            {/*    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>*/}
                            {/*</li>*/}
                            <li className="nav-item nav-link">
                                <NavLink
                                    className = "wbdv-link"
                                    to="/ourfitnesspal/login"><span
                                    className="sr-only">
                        (current)</span>Login</NavLink>
                            </li>
                        {/*    <li className="nav-item">*/}
                        {/*        <a className="nav-link" href="#">Login<span*/}
                        {/*            className="sr-only">*/}
                        {/*(current)</span></a>*/}
                        {/*    </li>*/}
                            <li className="nav-item nav-link">
                                <NavLink
                                    className = "wbdv-link"
                                    to="/ourfitnesspal/register"><span
                                    className="sr-only">
                        (current)</span>Register</NavLink>
                            </li>
                            <li className="nav-item nav-link">
                                <NavLink
                                    className = "wbdv-link"
                                    to="/ourfitnesspal/profile"><span
                                    className="sr-only">
                        (current)</span>Profile</NavLink>
                            </li>

                            <li className="nav-item nav-link">
                                <NavLink
                                    className = "wbdv-link"
                                    to="/"><span
                                    className="sr-only">
                        (current)</span>Privacy Page</NavLink>
                            </li>
                            <li className="nav-item nav-link">
                                <NavLink
                                    className = "wbdv-link"
                                    to="/ourfitnesspal/search"><span
                                    className="sr-only">
                        (current)</span>Search Food</NavLink>
                            </li>
                            <li className="nav-item nav-link">
                                <NavLink
                                    className = "wbdv-link"
                                    to="/ourfitnesspal/admin"><span
                                    className="sr-only">
                        (current)</span>Admin</NavLink>
                            </li>
                        </ul>
                    </div>
                    <Link to="/ourfitnesspal" className={"btn btn-danger"} onClick={() => loginService.logout()}>LOGOUT</Link>
                </nav>

            </div>
        </div>
    </div>

export default homePageHeading;
