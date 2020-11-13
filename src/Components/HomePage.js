import React from "react"
import "./HomePage.Style.CSS.css"

const homePageHeading = () =>
    <div className="container">
        <div className="container-fluid">

            <div className="fixed-top">


                <nav className="navbar navbar-expand-lg navbar-dark wbdv-homepage-header">
                    <a className="navbar-brand" href="#">
                        <img src="https://static8.depositphotos.com/1010751/1032/v/950/depositphotos_10323838-stock-illustration-fitness-logo.jpg" width="30" height="30" alt=""
                             loading="lazy"/>
                    </a>

                    <a className="navbar-brand wbdv-label wbdv-course-manager" href="#">Our Fitness Pal</a>

                    <div className="collapse navbar-collapse wbdv-button wbdv-list-layout wbdv-padding" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Sign Up <span
                                    className="sr-only">
                        (current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Login<span
                                    className="sr-only">
                        (current)</span></a>
                            </li>
                        </ul>

                    </div>
                </nav>

            </div>
        </div>
    </div>

export default homePageHeading;
