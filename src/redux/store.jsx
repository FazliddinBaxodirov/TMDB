import { combineReducers, createStore } from "redux";
import { reducer } from "./reducer";


const rootReducer = combineReducers({
    card:reducer,
})

export const store = createStore(rootReducer)