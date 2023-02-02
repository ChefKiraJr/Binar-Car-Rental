import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import getAllCarsReducer from "./reducers/getAllCarsReducer";
import getCarDetailReducer from "./reducers/getCarDetailReducer";

const reducer = combineReducers({
  cars: getAllCarsReducer,
  carDetail: getCarDetailReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
