const USER_URL = "http://localhost:8080/ourfitnesspal/users";

export const findAllUsers = () =>
  fetch(USER_URL).then((response) => response.json());


