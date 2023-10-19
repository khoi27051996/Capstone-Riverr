import { createSlice } from "@reduxjs/toolkit"
import { User2 } from "types"
import { getListNguoiDung, quanLyNguoiDungThunk, themQuanTriVienThunk, updateNguoiDungThunk } from "."

type QuanLyNguoiDung = {
    listUser?: User2[]

    listNguoiDung?: User2[]
}

const initialState: QuanLyNguoiDung = {}

const quanLyNguoiDungSlice = createSlice({
    name: "QuanLyNguoiDung",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(quanLyNguoiDungThunk.fulfilled, (state, { payload }) => {
            state.listUser = payload
        }).addCase(getListNguoiDung.fulfilled, (state, { payload }) => {
            state.listNguoiDung = payload
        }).addCase(updateNguoiDungThunk.fulfilled, (state, { payload }) => {
            state.listNguoiDung.push(payload)
        }).addCase(themQuanTriVienThunk.fulfilled, (state, { payload }) => {
            state.listNguoiDung.push(payload)
        })
    },
})
export const { reducer: quanLyNguoiDungReducer, actions: quanLyNguoiDungActions } = quanLyNguoiDungSlice