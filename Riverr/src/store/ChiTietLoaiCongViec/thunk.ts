import { createAsyncThunk } from "@reduxjs/toolkit";
import { chiTietLoaiCongViecServices } from "services";
import { ChiTietLoaiCongViec } from "types";

export const getListCTLCV = createAsyncThunk(
    "chiTietLoaiCongViec/getList",
    async (_, { rejectWithValue }) => {
        try {
            const data = await chiTietLoaiCongViecServices.getListCTLCV()
            return data.data.content
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const deleteCTLCVThunk = createAsyncThunk(
    "chiTietLoaiCongViec/delete",
    async (payload: ChiTietLoaiCongViec, { rejectWithValue }) => {
        try {
            const data = await chiTietLoaiCongViecServices.deleteCTLCV(payload)
            return data
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const postCTLCVThunk = createAsyncThunk(
    "chiTietLoaiCongViec/Post",
    async (payload: ChiTietLoaiCongViec, { rejectWithValue }) => {
        try {
            const data = await chiTietLoaiCongViecServices.postCTLCV(payload)
            return data.data.content
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)