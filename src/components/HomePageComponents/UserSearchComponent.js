import React from "react";
import {findUser, onChangeSearchName} from "../../actions/ProfileAction";
import {connect} from "react-redux";
import HomePageHeader from "./HomePageHeader";

const userSearchComponent = ({
    user
                             }) =>
<div>
    <div className="container-fluid">
        <HomePageHeader/>
        {
            user !== null &&
                <div>
                    <div>
            <h2 className="wbdv-header-profile-name text-primary">{user.userId}'s profile</h2>
                    </div>
                    <div>
                <h4 className="wbdv-margins-info">Email: {user.email}</h4>
                        <h4>Height: {user.height} feet</h4>
                    </div>
                </div>
        }
        {
            user === null &&
                <h3 className = "wbdv-header-profile-name">Profile not found! try again!</h3>
        }
    </div>
<div className="container">
    {console.log(user)}

</div>
</div>

const stateToPropertyMapper = (state) => ({
    searchName: state.profileReducer.searchName,
    user: state.profileReducer.user
})


const propertyToDispatchMapper = (dispatch) => ({
})

export default connect(stateToPropertyMapper, propertyToDispatchMapper)(userSearchComponent);



