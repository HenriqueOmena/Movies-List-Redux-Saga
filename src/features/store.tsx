import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import counterSlice from "features/counter.slice";

const reducer = combineReducers({
  count: counterSlice,
});

export type RootState = ReturnType<typeof reducer>;

const store = configureStore({
  reducer,
});

export default store;
