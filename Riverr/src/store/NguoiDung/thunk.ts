import { createAsyncThunk } from "@reduxjs/toolkit";
import { updateUser } from "services";
import { nguoiDungServices } from "services/quanLyNguoiDungAdmin";
import { User2 } from "types";

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

export const getListNguoiDung = createAsyncThunk(
    "nguoiDung/getList",
    async (_, { rejectWithValue }) => {
        try {
            const data = await nguoiDungServices.getListNguoiDung()
            return data.data.content
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

// export const deleteNguoiDungThunk = createAsyncThunk(
//     "nguoiDung/delete",
//     async (payload: any, { rejectWithValue }) => {
//         try {
//             const data = await nguoiDungServices.deleteNguoiDung(payload)
//             return data
//         } catch (err) {
//             return rejectWithValue(err)
//         }
//     }
// )

export const updateNguoiDungThunk = createAsyncThunk(
    "nguoiDung/Update",
    async (payload: User2, { rejectWithValue }) => {
        try {
            const data = await nguoiDungServices.updateNguoiDung(payload)
            return data.data.content
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const themQuanTriVienThunk = createAsyncThunk(
    "nguoiDung/themQTV",
    async (payload: User2, { rejectWithValue }) => {
        try {
            const data = await nguoiDungServices.themQuanTriVien(payload)
            return data.data.content
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)