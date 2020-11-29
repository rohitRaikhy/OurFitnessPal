import React from "react";
import HomePageHeader from "./HomePageHeader";
import "./ProfilePage.css"
import {onChangeSearchName, findUser} from "../../actions/ProfileAction"
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import userSearchComponent from "./UserSearchComponent";
import {BrowserRouter as Router, BrowserRouter, Route, Switch} from "react-router-dom";

const ProfileComponent = ({
    searchName, user, onChangeSearchName, findUser
}) =>
    <div className="wbdv-header-profile-name">
        <HomePageHeader/>
        {/*<h4 className= "wbdv-profile-search">Enter a height: </h4>*/}
        {/*<div className="col-sm-4">*/}
        {/*<input id="height"*/}
        {/*       className="form-control"*/}
        {/*       placeholder="Enter a height"*/}
        {/*/>*/}
        {/*    <button className="btn btn-primary">*/}
        {/*        Save*/}
        {/*    </button>*/}
        {/*</div>*/}


        {/*<h4 className="wbdv-profile-search">Search for a member</h4>*/}
        <div className="col-sm-4">
            <span>

                <form>
        <div className="form-group row">
          <label htmlFor="searchProfile" className="col-sm-2 col-form-label">
            Profile Search</label>
          <div className="col-sm-10">
            <input id="searchProfile"
                   className="form-control"
                   placeholder="Enter a profile name"
                   onChange={(event) => onChangeSearchName(event.target.value)}/>
          </div>
        </div>
                </form>
              <Link to={`/ourfitnesspal/userProfile/${searchName}`}>
                    <button
                        onClick={() => findUser(searchName)}
                        className="btn btn-primary">
                    Search
                    </button>
                   </Link>
             </span>

            {/*This works but changed to above for changing view of big to small screen sizes*/}
            {/*<input id="foodNameFld"*/}
            {/*       className="form-control"*/}
            {/*       placeholder="Enter a profile name"*/}
            {/*       onChange={(event) => onChangeSearchName(event.target.value)}/>*/}

            {/*         /!*<Route path="/ourfitnesspal/userProfile" component={userSearchComponent({user})}/>*!/*/}
            {/*        <Link to={`/ourfitnesspal/userProfile/${searchName}`}>*/}
            {/*        <button*/}
            {/*        onClick={() => findUser(searchName)}*/}
            {/*        className="btn btn-primary">*/}
            {/*        Search*/}
            {/*        </button>*/}
            {/*       </Link>*/}
            {/*    </span>*/}
        </div>
    </div>


const stateToPropertyMapper = (state) => ({
    searchName: state.profileReducer.searchName,
    user: state.profileReducer.user
})


const propertyToDispatchMapper = (dispatch) => ({
    onChangeSearchName : (searchName) => {onChangeSearchName(dispatch, searchName)},
    findUser: (searchName) => {findUser(dispatch, searchName)}
})

export default connect(stateToPropertyMapper, propertyToDispatchMapper)(ProfileComponent);
