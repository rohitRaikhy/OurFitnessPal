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
import RouterManagerComponent from "./components/HomePageComponents/RouterManagerComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css"
import profileReducer from "./reducers/ProfileReducer";
import adminReducer from "./reducers/AdminReducer";
import recipeReducer from "./reducers/RecipeReducer";

const reducers = combineReducers({
  loginReducer: loginReducer,
  registerReducer: registerReducer,
  userReducer: userReducer,
  searchReducer: searchReducer,
  resultItemReducer: resultItemReducer,
  profileReducer: profileReducer,
  adminReducer: adminReducer,
    recipeReducer: recipeReducer
})
const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <RouterManagerComponent/>
    </Provider>,
    document.getElementById('root')
);
reportWebVitals();
