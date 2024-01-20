import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { userInfoReducer } from "./reducers/user";

const Store = configureStore({
  reducer: {
    user: userInfoReducer,
  },
  middleware: [thunk],
});

export default Store;
