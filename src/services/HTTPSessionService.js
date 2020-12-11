//TODO: changed for heroku db
const USER_SESSION = "http://localhost:8080/ourfitnesspal/login"

const setSessionForLogin = (userId) =>
    fetch(`${USER_SESSION}/${userId}`).then(response => response.json())

export default {
  setSessionForLogin
}
