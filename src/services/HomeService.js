const USER_URL = "https://ourfitnesspalserver.herokuapp.com/ourfitnesspal/users"

export const findAllUsers = () =>
  fetch(USER_URL).then((response) => response.json());


