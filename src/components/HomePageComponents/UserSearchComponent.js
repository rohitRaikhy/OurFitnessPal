import React from "react";
import {findUser, onChangeSearchName} from "../../actions/ProfileAction";
import {connect} from "react-redux";
import HomePageHeader from "./HomePageHeader";

const userSearchComponent = ({
    user
                             }) =>
<div>
    <div className="container-fluid text-primary">
        <HomePageHeader/>
        {
            user !== null &&
            <h3 className="wbdv-header-profile-name">{user.userId}'s profile</h3>
        }
        {
            user === null &&
                <h3 className = "wbdv-header-profile-name">Profile not found! try again!</h3>
        }
    </div>
<div className="container">
    {/*Email: {user.email}*/}
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



