import {createStore , applyMiddleware} from "redux";
import logger from "redux-logger";
import reduxThunk from "redux-thunk"
import rootReducer from "./root-reducer"

const middleware = [reduxThunk, logger];

const store = createStore(rootReducer, applyMiddleware(...middleware))

export default store;