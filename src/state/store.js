import { applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducer from "./reducers";
import { createStore } from 'redux'
const store = createStore(reducer,{},applyMiddleware(thunk))
// const store = configureStore(reducer,{},applyMiddleware(thunk))


export default store