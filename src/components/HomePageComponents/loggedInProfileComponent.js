import React from "react";
import HomePageHeader from "./HomePageHeader";
import "./ProfilePage.css"
import {onChangeSearchName, findUser, addRecipe, addVideo, setVideo, setEditing, onChangeNewVideoUrl} from "../../actions/ProfileAction"
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import userSearchComponent from "./UserSearchComponent";
import {BrowserRouter as Router, BrowserRouter, Route, Switch} from "react-router-dom";
import VideosOrRecipesCards from "./VideosOrRecipesCards";
import {findAllVideoContentsByUserId, addNewVideo} from "../../actions/ContentAction";

const ProfileComponent = ({
  searchName, user, onChangeSearchName, findUser, addRecipe, addVideo, recipes, videos, findAllVideoContentsByUserId, setVideo, setEditing, editing,
  onChangeNewVideoUrl, newVideoUrl, addNewVideo}) =>
    <div className="wbdv-header-profile-name">
        <HomePageHeader/>
        {user &&
            <div className="container">
            <h2 className="text-primary">{user.userId}'s profile</h2>
                <div className= "wbdv-profile-loggedIn-margin">
                    <h4>Email: {user.email}</h4>
                    <h4>Height: {user.heightFt} feet {user.heightInch} inches </h4>
                    <h4>Role: {user.role} </h4>

                  <button className="btn btn-success" onClick={() => findAllVideoContentsByUserId(user.userId)}>LIST ALL SAVED VIDEOS</button>
                  {editing && <input className="col-8 form-control" onChange={(event) => onChangeNewVideoUrl(event.target.value)}/>}
                  {!editing && <button className="pull-right btn btn-primary" onClick={() => setEditing(true)}>Add Video</button>}
                  {editing && <button className="col-4 btn btn-primary" onClick={() => {addNewVideo(user.userId, newVideoUrl); setEditing(false)}}>save</button>}
                  <VideosOrRecipesCards contents={videos}/>

                </div>
            </div>
        }
        {console.log(user)}
        <h4 className="wbdv-profile-search">Search for a member</h4>
        <div className="col-sm-4">
            <span>
            <input id="foodNameFld"
                   className="form-control"
                   placeholder="Enter a profile name"
                   onChange={(event) => onChangeSearchName(event.target.value)}/>
                <Link to={`/ourfitnesspal/userProfile/${searchName}`}>
                    <button
                        onClick={() => findUser(searchName)}
                        className="btn btn-primary">
                    Search
                    </button>
                   </Link>
                </span>
        </div>
    </div>


const stateToPropertyMapper = (state) => ({
    searchName: state.profileReducer.searchName,
    user: state.loginReducer.loginUser,
    videos: state.profileReducer.videos,
    recipes: state.profileReducer.recipes,
    editing: state.profileReducer.editing,
    newVideoUrl: state.profileReducer.newVideoUrl,
})


const propertyToDispatchMapper = (dispatch) => ({
    onChangeSearchName : (searchName) => {onChangeSearchName(dispatch, searchName)},
    findUser: (searchName) => {findUser(dispatch, searchName)},
    addVideo: (video) => addVideo(dispatch, video),
    addRecipe: (recipe) => addRecipe(dispatch, recipe),
    findAllVideoContentsByUserId: (userId) => findAllVideoContentsByUserId(dispatch, userId),
    setVideo: (videos) => setVideo(dispatch, videos),
    setEditing :(editing) => setEditing(dispatch, editing),
    onChangeNewVideoUrl: (videoUrl) => onChangeNewVideoUrl(dispatch, videoUrl),
    addNewVideo: (userId, videoUrl) => addNewVideo(dispatch, userId, videoUrl),
})

export default connect(stateToPropertyMapper, propertyToDispatchMapper)(ProfileComponent);
