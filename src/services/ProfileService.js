const USER_URL = "http://localhost:8080/ourfitnesspal/users";


const findUserByUserId = (userId) =>
    fetch(`${USER_URL}/${userId}`).then(response => response.json())

export default {
    findUserByUserId
}
