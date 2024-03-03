import { createStore } from "redux";
import pincodeReducer from "./reducer/pincodeReducer";

const store = createStore(pincodeReducer);

export default store;