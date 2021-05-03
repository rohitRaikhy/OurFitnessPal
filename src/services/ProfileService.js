const USER_URL = "https://ourfitnesspalserver.herokuapp.com/ourfitnesspal/users";

const findUserByUserId = (userId) =>
    fetch(`${USER_URL}/${userId}`).then(response => response.json())

export default {
    findUserByUserId
}
