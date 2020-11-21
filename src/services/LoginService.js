const USER_URL = "http://localhost:8080/ourfitnesspal/users";

const findAllUsers = () =>
    fetch(USER_URL).then(response => response.json())

const findUserByUserId = (userId) =>
    fetch(`${USER_URL}/${userId}`).then(response => response.json())

export default {
  findAllUsers,
  findUserByUserId
}
