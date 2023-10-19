import { createSlice } from "@reduxjs/toolkit"
import { CongViecDangThue, ThueCongViec, ThueCongViec2 } from "types"
import {  dsCvDangThueThunk, getListThueCvThunk, thueCongViecThunk, xoaCvDaThueThunk } from "./thunk"

type QuanLyThueCv = {
    thueCongViec?: ThueCongViec
    DsCvDangThue?: CongViecDangThue[],
    listThueCv?: ThueCongViec[] | ThueCongViec2[]
}

const initialState: QuanLyThueCv = {}

const thueCongViecSlice = createSlice({
    name: "ThueCongViec",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(thueCongViecThunk.fulfilled, (state, { payload }) => {
            state.thueCongViec = payload
        }).addCase(dsCvDangThueThunk.fulfilled, (state, { payload }) => {
            state.DsCvDangThue = payload
        }).addCase(xoaCvDaThueThunk.fulfilled, (state, { payload }) => {
            state.DsCvDangThue = payload
        }).addCase(getListThueCvThunk.fulfilled, (state, { payload }) => {
            state.listThueCv = payload
        })
    },
})

export const { reducer: thueCongViecReducer, actions: thueCongViecActions } = thueCongViecSlice
