import contentService from "../services/ContentService";



export const findAllVideoContentsByUserId = (dispatch, userId) =>
    contentService.findAllContentsByUserId(userId).then((contents) => {
      let videos = contents.filter(c => c.type === "video");
      dispatch({type:"SET_VIDEO", videos})
    })

export const addNewVideo = (dispatch, userId, videoUrl) => {
  let re = new RegExp('&ab_channel=.*');
  let newVideoUrl = videoUrl.replace("watch?v=", "embed/");
  newVideoUrl = newVideoUrl.replace(re, "");
  contentService.addNewVideo(userId, newVideoUrl).then((video => {
    dispatch({type:"ADD_VIDEO", video})
  }))
}
