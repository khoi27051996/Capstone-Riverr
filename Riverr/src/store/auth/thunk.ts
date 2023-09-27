import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginType } from "schema";
import { administerUser } from "services";
import { handleErr, sleep } from "utils";
import { toast } from "react-toastify";
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
