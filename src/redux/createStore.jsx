import {combineReducers, createStore} from "redux";
import testReducer from "./reducers/test-reducer";



let combineReducer = combineReducers({
        test: testReducer,
    }
);

let store = createStore(combineReducer);


window.store = store;

export default store