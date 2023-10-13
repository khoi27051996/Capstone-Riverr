import { createSlice } from "@reduxjs/toolkit"
import { ThemBinhLuan, binhLuan } from "types"
import { binhLuanTheoCongViecThunk, themBinhLuanMoiThunk } from "."

type QuanLyBinhLuan = {
    binhLuanTheoCongViec?: binhLuan[]
    themBinhLuan?: ThemBinhLuan
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
        })
    },
})

export const { reducer: quanLyBinhLuanReducer, actions: quanLyBinhLuanActions } = quanLyBinhLuanSlice

