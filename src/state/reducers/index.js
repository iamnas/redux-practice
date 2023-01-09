import { combineReducers } from "redux";
import amountReducers from "./amountReducer"

export default combineReducers({
    amount:amountReducers
})

// export default reducer