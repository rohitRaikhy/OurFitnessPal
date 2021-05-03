import React from "react";
import {connect} from "react-redux";
import HomePageHeader from "./HomePageHeader";
import { setEditing,setRole, deleteUser } from "../../actions/AdminAction"
import UserRowComponent from "./UserRowComponent";
import userService from "../../services/UserService";

const AdminPageComponent = ({loginStatus, loginUser, userLoggedIn, users, setEditing, editing, roles, setRole, deleteUser}) =>
    <div className="container">
      <HomePageHeader/>
      <div className= "wbdv-register-page-margins ">
        <h1>ADMIN </h1>
        <table className="table table-hover">
          <thead>
          <tr>
            <th>userId</th>
            <th>email</th>
            <th>role</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
            {users.map(user =>
                <UserRowComponent user={user} roles={roles} deleteUser={deleteUser}/>
            )}
          </tbody>
        </table>

      </div>
    </div>

const stateToPropertyMapper = (state) => ({
  users: state.userReducer.users,
  loginStatus: state.loginReducer.loginStatus,
  loginUser: state.loginReducer.loginUser,
  userLoggedIn: state.userLoggedIn,
  // editing: state.adminReducer.editing,
  roles: state.adminReducer.roles,
})


const propertyToDispatchMapper = (dispatch) => ({
  setEditing: (editing) => setEditing(dispatch, editing),
  setRole : (role) => setRole(dispatch, role),
  deleteUser: (userId) => deleteUser(dispatch, userId),
})

export default connect(stateToPropertyMapper, propertyToDispatchMapper)(AdminPageComponent);
