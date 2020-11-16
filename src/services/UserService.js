const USER_URL = "http://localhost:8080/ourfitnesspal/users";

const findAllUsers = () =>
    fetch(USER_URL).then((response) => response.json());

const createUser = (user) =>
    fetch(USER_URL, {
      method: "POST",
      body:JSON.stringify(user),
      headers: {
        "content-type":"application/json"
      }
    }).then(response => response.json())

export default {
  findAllUsers,
  createUser
}