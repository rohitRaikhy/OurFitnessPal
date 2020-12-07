import registerService from "../services/RegisterService"
const initialState = {
  userId:"",
  password:"",
  email:"",
  userExists: null,
  passwordMatching: null,
  weight: "",
  heightFt: "",
  heightInch: "",
  location: "",
  gender: "",
  role: "",
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
        heightFt: "",
        heightInch: "",
        location: "",
        gender: "",
        role: "",
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
    case "ONCHANGE_HEIGHT_FT":
      return {
        ...state,
        heightFt: action.heightFt
      }
    case "ONCHANGE_HEIGHT_INCH":
      return {
        ...state,
        heightInch: action.heightInch
      }
    case "SET_LOCATION":
      return {
        ...state,
        location: action.state
      }
    case "SET_GENDER":
      return {
        ...state,
        gender: action.gender
      }
    case "SET_ROLE":
      return {
        ...state,
        role: action.role
      }
    default:
      return state
  }
}

export default registerReducer
