import { createSlice } from "@reduxjs/toolkit"
import { ThemBinhLuan, ThemBinhLuan2, binhLuan } from "types"
import { binhLuanTheoCongViecThunk, getListBinhLuanThunk, themBinhLuanMoiThunk } from "."

type QuanLyBinhLuan = {
    binhLuanTheoCongViec?: binhLuan[]
    themBinhLuan?: ThemBinhLuan
    listBinhLuan?: ThemBinhLuan[] | ThemBinhLuan2[]
}

const initialState: QuanLyBinhLuan = {}

const quanLyBinhLuanSlice = createSlice({
    name: "quanLyBinhLuan",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(binhLuanTheoCongViecThunk.fulfilled, (state, { payload }) => {
            state.binhLuanTheoCongViec = payload
        }).addCase(themBinhLuanMoiThunk.fulfilled, (state, { payload }) => {
            state.themBinhLuan = payload
        }).addCase(getListBinhLuanThunk.fulfilled, (state, { payload }) => {
            state.listBinhLuan = payload
        })
    },
})

export const { reducer: quanLyBinhLuanReducer, actions: quanLyBinhLuanActions } = quanLyBinhLuanSlice

