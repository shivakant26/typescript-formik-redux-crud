import { legacy_createStore } from "redux";
import rootReducer from "./Reducer";

const store = legacy_createStore(rootReducer);

export default store;