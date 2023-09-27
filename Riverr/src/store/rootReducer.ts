import { combineReducers } from "@reduxjs/toolkit";
import { administerUserReducer } from "./auth/slice";
export const rootReducer = combineReducers({
  administerUser: administerUserReducer,
});
