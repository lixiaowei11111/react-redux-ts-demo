import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./reducers";
const preloadedState = {};
const enhancer = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(reducers, preloadedState, enhancer);

export default store;
