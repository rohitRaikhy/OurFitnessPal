//TODO: changed for heroku db
// const USER_URL = "http://localhost:8080/ourfitnesspal/users";

const USER_URL = "https://ourfitnesspalserver.herokuapp.com/ourfitnesspal/users"

export const findAllUsers = () =>
  fetch(USER_URL).then((response) => response.json());


