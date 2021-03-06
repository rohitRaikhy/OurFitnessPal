import React from "react";
import ContentCardItem from "./ContentCardItem";
import {
  addRecipe,
  addVideo,
  findUser,
  onChangeSearchName, setVideo
} from "../../actions/ProfileAction";
import {findAllVideoContentsByUserId} from "../../actions/ContentAction";
import {connect} from "react-redux";

const VideosOrRecipesCard = ({contents}) =>
    <div>
      <div className="wbdv-cards">
        <div className= "wbdv-cards-container">
          <div className= "wbdv-cards-wrapper">
            <div className="wbdv-margin-cards">
              <ul className="wbdv-margin-cards">
                {contents.map(content =>
                    <li className="list-group">
                      <ContentCardItem content={content}/>
                    </li>

                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

const stateToPropertyMapper = (state) => ({
  contents: state.profileReducer.videos,

})


const propertyToDispatchMapper = (dispatch) => ({
})

export default connect(stateToPropertyMapper, propertyToDispatchMapper)(VideosOrRecipesCard);

