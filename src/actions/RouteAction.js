import {useHistory} from "react-router";
import {Redirect} from 'react-router-dom';
import React from "react";

// export function RouteToLogin() {
//   let history = useHistory();
//   history.push("/ourfitnesspal/login");
// }

export const RouteToLogin = () => {
  return  <Redirect  to="/ourfitnesspal/login" />
}
