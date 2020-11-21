// #index

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import loginReducer from "./reducers/LoginReducer";
import registerReducer from "./reducers/RegisterReducer";
import userReducer from "./reducers/UserReducer"
import HomeComponent from "./components/HomeComponent";
import searchReducer from "./reducers/SearchReducer";
import SearchComponent from "./components/SearchComponent";
import resultItemReducer from "./reducers/ResultItemReducer";

const reducers = combineReducers({
  loginReducer: loginReducer,
  registerReducer: registerReducer,
  userReducer: userReducer,
  searchReducer: searchReducer,
  resultItemReducer: resultItemReducer,

import RouterManagerComponent from "./Components/HomePageComponents/RouterManagerComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css"

const reducers = combineReducers({
    loginReducer: loginReducer,
    registerReducer: registerReducer,
    userReducer: userReducer,
})
const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
      {/*<RegisterComponent/>*/}
      {/*<SearchComponent/>*/}
      <HomeComponent/>
        {/*<RegisterComponent/>*/}
        {/*<HomeComponent/>*/}
        <RouterManagerComponent/>
        {/*<HomePage/>*/}
    </Provider>,
    // <React.StrictMode>
    //   {/*<LoginComponent />*/}
    //
    // </React.StrictMode>,

    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
