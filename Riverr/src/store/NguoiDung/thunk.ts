import { createAsyncThunk } from "@reduxjs/toolkit";
import { updateUser } from "services";

export const quanLyNguoiDungThunk = createAsyncThunk(
    "quanLyNguoiDung/getList",
    async (_, { rejectWithValue }) => {
        try {
            const data = await updateUser.getListUser()
            return data.data.content
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)