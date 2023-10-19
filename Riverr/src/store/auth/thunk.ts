import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginType } from "schema";
import { administerUser, updateUser } from "services";
import { getToken, handleErr, sleep } from "utils";
import { toast } from "react-toastify";
import { User2 } from "types";
export const SignInThunk = createAsyncThunk(
  "administerSignIn",
  async (payload: LoginType, { rejectWithValue }) => {
    try {
      const data = await administerUser.signIn(payload);
      toast.success("Đăng nhập thành công!!!");
      await sleep(2000);
      return data.data.content;
    } catch (err) {
      handleErr(err);
      return rejectWithValue(err);
    }
  }
);

export const getUserByTokenThunk = createAsyncThunk(
  "getUserByToken/id",
  async (payload: number, { rejectWithValue }) => {
    try {
      const token = getToken();
      if (token) {
        const  data  = await updateUser.getUserByToken(payload);
        console.log(data.data.content)
        return data.data.content;
      }
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const upDateInfoToken = createAsyncThunk(
  "Update/id",
  async (payload: User2, { rejectWithValue }) => {
    try {
      const data = await updateUser.updateUser(payload);
      return data.data.content;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
