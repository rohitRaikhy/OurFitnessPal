import registerService from "../services/RegisterService"
const initialState = {
  userId:"",
  password:"",
  email:"",
  userExists: null,
  passwordMatching: null,
  weight: "",
  heightFt: ""
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
    // case "CREATE_USER":
    //   return {
    //     ...state,
    //     userExists: false,
    //     userId:"",
    //     password: "",
    //     email: "",
    //   }
          //TOOD: ADDED HERE TO ADD MORE STUFF ABOUT THE USER
    case "CREATE_USER":
      return {
        ...state,
        userExists: false,
        userId:"",
        password: "",
        email: "",
        weight: "",
        heightFt: ""
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

      // ADDED HERE TO ADD TO PROFILE FOR MORE USERS INFO
    case "ONCHANGE_CURRENT_WEIGHT":
      return {
        ...state,
        weight: action.weight
      }
    case "ONCHANGE_HEIGHT":
      return {
        ...state,
        heightFt: action.heightFt
      }

    default:
      return state
  }
}

export default registerReducer
