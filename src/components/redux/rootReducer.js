import { combineReducers } from "redux";

import shopReducer from "./Reducer";

const rootReducer = combineReducers({
  shop: shopReducer,
});

export default rootReducer;