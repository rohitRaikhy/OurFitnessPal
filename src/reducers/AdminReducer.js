const initialState = {
  roles: ["Dieter", "Healthy eater", "Gym Addict"],
}

const AdminReducer =(state=initialState, action) => {
  switch (action.type) {
    case "ADD_ROLE":
      return {
        ...state,
        roles: [...state.roles, action.role],
      }
    case "DELETE_ROLE":
      return {
        ...state,
        roles: state.roles.filter(r => r != action.role),
      }
    default:
      return state
  }
}

export default AdminReducer
