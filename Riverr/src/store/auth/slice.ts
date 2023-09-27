import { User, signUp } from "types";
import { getToken } from "utils";
import { createSlice } from "@reduxjs/toolkit";
import { SignInThunk } from ".";
type AdministerUser = {
  token?: string;
  userSignUp?: signUp<User>;
  isLoading?: boolean;
};

const initialState: AdministerUser = {
  token: getToken(),
  isLoading: false,
};

const administerUser = createSlice({
  name: "AdministerUser",
  initialState,
  reducers: {
    logOut: (state) => {
      (state.token = undefined),
        (state.userSignUp = undefined),
        localStorage.removeItem("TOKEN");
    },
  },
  extraReducers(builder) {
    builder
      .addCase(SignInThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(SignInThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.userSignUp = payload;
        console.log(payload)
        localStorage.setItem("TOKEN", payload.token);
        state.token = payload.token;
      });
  },
});

export const {
  reducer: administerUserReducer,
  actions: administerUserActions,
} = administerUser;
