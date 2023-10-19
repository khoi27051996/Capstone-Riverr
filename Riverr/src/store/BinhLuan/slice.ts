import { createSlice } from "@reduxjs/toolkit"
import { ThemBinhLuan, binhLuan } from "types"
import { binhLuanTheoCongViecThunk, deleteBinhLuanThunk, getListBinhLuanThunk, themBinhLuanMoiThunk } from "."

type QuanLyBinhLuan = {
    binhLuanTheoCongViec?: binhLuan[]
    themBinhLuan?: ThemBinhLuan
    listBinhLuan?: ThemBinhLuan[]
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
        }).addCase(deleteBinhLuanThunk.fulfilled, (state, { payload }) => {
            state.listBinhLuan.filter(v => v.id != payload.id)
        })
    },
})

export const { reducer: quanLyBinhLuanReducer, actions: quanLyBinhLuanActions } = quanLyBinhLuanSlice

