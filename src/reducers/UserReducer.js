const initialState = {
  users: [],
  user: null,
}

const UserReducer =(state=initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user:action.user
      }
    case "FIND_ALL_USERS":
      return {
        ...state,
        users: action.users
      }
    case "CREATE_USER":
      return {
        ...state,
        users: [...state.users, action.newUser],
      }
    default:
      return state
  }
}

export default UserReducer