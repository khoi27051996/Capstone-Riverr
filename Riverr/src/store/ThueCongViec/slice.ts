import { createSlice } from "@reduxjs/toolkit"
import { CongViecDangThue, ThueCongViec } from "types"
import { deleteCvTrongList, dsCvDangThueThunk, getListThueCvThunk, thueCongViecThunk, xoaCvDaThueThunk } from "./thunk"

type QuanLyThueCv = {
    thueCongViec?: ThueCongViec
    DsCvDangThue?: CongViecDangThue[],
    listThueCv?: ThueCongViec[]
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
        }).addCase(deleteCvTrongList.fulfilled, (state, { payload }) => {
            state.listThueCv.filter(v => v.id != payload)
        })
    },
})

export const { reducer: thueCongViecReducer, actions: thueCongViecActions } = thueCongViecSlice
