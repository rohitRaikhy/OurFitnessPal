//TODO: changed url for heroku db
// const CONTENT_URL = "http://localhost:8080/ourfitnesspal/users"

const CONTENT_URL = "https://ourfitnesspalserver.herokuapp.com/ourfitnesspal/users"

const findAllContentsByUserId = (userId) =>
    fetch(`${CONTENT_URL}/${userId}/contents`).then((response) => response.json());

const addNewVideo = (userId, videoUrl) =>
    fetch(`${CONTENT_URL}/${userId}/contents/video`, {
      method: "POST",
      body: videoUrl,
      headers: {
        "content-type":"application/json"
      }
    }).then((response) => response.json());
export default {
  findAllContentsByUserId,
  addNewVideo
}
