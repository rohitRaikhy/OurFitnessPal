const USER_URL = "https://ourfitnesspalserver.herokuapp.com/ourfitnesspal/users";


const findAllUsers = () =>
    fetch(USER_URL).then(response => response.json())

const findUserByUserId = (userId) =>
    fetch(`${USER_URL}/${userId}`).then(response => response.json())

const logout = () =>
    fetch(`http://localhost:8080/ourfitnesspal/logout`, {
      method: 'POST',
      credentials: "include"
    })

const login = (userId) =>
  fetch(`http://localhost:8080/ourfitnesspal/login/${userId}`, {
    method: 'POST',
    credentials: "include"
  }).then(response => response.json())

export default {
  findAllUsers,
  findUserByUserId,
  logout, login
}
