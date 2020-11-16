import registerService from "../services/RegisterService"
const initialState = {
  userId:"",
  password:"",
  email:"",
  userExists: null,
  passwordMatching: null,
}

const registerReducer = (state=initialState, action) => {
  switch (action.type) {
    case "SET_PASSWORD_MATCHING":
      return {
        ...state,
        passwordMatching: action.matching
      }
    case "SET_USER_EXISTS":
      console.log("exist: ", action.exist)
      return {
        ...state,
        userExists: action.exist
      }
    case "CREATE_USER":
      return {
        ...state,
        userExists: false,
        userId:"",
        password: "",
        email: "",
      }
    case "ONCHANGE_USERID":
      return {
        ...state,
        userId: action.userId
      }
    case "ONCHANGE_EMAIL":
      return {
        ...state,
        email: action.email
      }
    case "ONCHANGE_PASSWORD":
      return {
        ...state,
        password: action.password
      }
    default:
      return state
  }
}

export default registerReducer