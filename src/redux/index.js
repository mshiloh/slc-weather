import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import weatherReducer from "./weather.js";
import hourlyReducer from "./hourly.js";
import dailyReducer from "./daily.js";

const store = createStore(combineReducers({ weather: weatherReducer, hourly: hourlyReducer, daily: dailyReducer }), applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()));

export default store;