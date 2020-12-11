//TODO: changed for heroku db
//const USER_URL = "http://localhost:8080/ourfitnesspal/users";

const USER_URL = "https://ourfitnesspalserver.herokuapp.com/ourfitnesspal/users";

const findAllUsers = () =>
    fetch(USER_URL).then((response) => response.json());

const updateUser = (userId, newUser) =>
fetch(`${USER_URL}/${userId}`, {
  method: "PUT",
  body: JSON.stringify(newUser),
  headers: { "content-type": "application/json" },
}).then((response) => response.json());

const deleteUser = (uid) =>
    fetch(`${USER_URL}/${uid}`, { method: "DELETE" });

const createUser = (user) =>
    fetch(USER_URL, {
      method: "POST",
      body:JSON.stringify(user),
      headers: {
        "content-type":"application/json"
      }
    }).then(response => response.json())

export const profile = () =>
    fetch(`http://localhost:8080/ourfitnesspal/profile`).then(response =>
      response.json());

export default {
  findAllUsers, updateUser, deleteUser,
  createUser, profile
}
