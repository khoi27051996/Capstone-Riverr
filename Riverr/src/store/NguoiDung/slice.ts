import { createSlice } from "@reduxjs/toolkit"
import { User2 } from "types"
import { quanLyNguoiDungThunk } from "."

type QuanLyNguoiDung = {
    listUser?: User2[]
}

const initialState: QuanLyNguoiDung = {}

const quanLyNguoiDungSlice = createSlice({
    name: "QuanLyNguoiDung",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(quanLyNguoiDungThunk.fulfilled, (state, { payload }) => {
            state.listUser = payload
        })
    },
})
export const { reducer: quanLyNguoiDungReducer, actions: quanLyNguoiDungActions } = quanLyNguoiDungSlice