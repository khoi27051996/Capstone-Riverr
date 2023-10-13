import { User, User2, signUp, } from "types";
import { getToken } from "utils";
import { createSlice } from "@reduxjs/toolkit";
import { SignInThunk, getUserByTokenThunk, upDateInfoToken } from ".";
type AdministerUser = {
  token?: string;
  userSignUp?: signUp<User> | signUp<User2>;
  isLoading?: boolean;
  id?: number

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

        localStorage.setItem("TOKEN", payload.token);
  
        state.token = payload.token;
        state.userSignUp = payload;
        state.id = payload.user.id

      })
      .addCase(SignInThunk.rejected, (state) => {
        state.isLoading = false;
      })

      .addCase(getUserByTokenThunk.fulfilled, (state, { payload }) => {
        state.userSignUp = payload;
      })
      .addCase(upDateInfoToken.fulfilled, (state, { payload }) => {
        state.userSignUp = payload;
      });
  },
});

export const {
  reducer: administerUserReducer,
  actions: administerUserActions,
} = administerUser;

