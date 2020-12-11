
const initialState = {
  loginUserId:"",
  loginPassword:"",
  loginStatus: false,
  loginUser: null,

}

const loginReducer = (state=initialState, action) => {
  switch (action.type) {
    case "VERIFY_USER":
      let verified = action.users.find(user => user.userId === action.userId && user.password === action.password);
      {console.log(JSON.stringify(verified))}
      {verified !== undefined ? state.loginStatus=true : state.loginStatus=false}
        return {
          ...state,
          loginUser: state.loginStatus ? verified : null
        }
    // case "SET_LOGIN_USER":
    //   return {
    //     ...state,
    //     loginUser: action.user,
    //   }
    case "ONCHANGE_USERID":
      return {
        ...state,
        loginUserId: action.userId
      }
    case "ONCHANGE_PASSWORD":
      return {
        ...state,
        loginPassword: action.password
      }
    default:
      return state
  }
}

export default loginReducer
