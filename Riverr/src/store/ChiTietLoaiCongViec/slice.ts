import { createSlice } from "@reduxjs/toolkit"
import { ChiTietLoaiCongViec } from "types"
import {  getListCTLCV, postCTLCVThunk } from "."

type QuanLyChiTietLoaiCongViec = {
    listCTLCV?: ChiTietLoaiCongViec[]
}

const initialState: QuanLyChiTietLoaiCongViec = {}

const chiTietCongViecSlice = createSlice({
    name: "ChiTietLoaiCongViec",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getListCTLCV.fulfilled, (state, { payload }) => {
            state.listCTLCV = payload
        }).addCase(postCTLCVThunk.fulfilled, (state, { payload }) => {
            state.listCTLCV.push(payload)
        })
    },
})

export const { reducer: chiTietCongViecReducer, actions: chiTietCongViecActions } = chiTietCongViecSlice