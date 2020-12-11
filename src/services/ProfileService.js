//TODO: changed for heroku db
//const USER_URL = "http://localhost:8080/ourfitnesspal/users";

const USER_URL = "https://ourfitnesspalserver.herokuapp.com/ourfitnesspal/users";

const findUserByUserId = (userId) =>
    fetch(`${USER_URL}/${userId}`).then(response => response.json())

export default {
    findUserByUserId
}
