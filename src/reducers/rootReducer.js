import { combineReducers } from "redux";
import ListReducer from "./listReducer";


export default combineReducers({
    event:ListReducer,
})