import { createStore } from "redux";
import BookRuducer from "./BookReducers";

const store=createStore(BookRuducer);
export default store;