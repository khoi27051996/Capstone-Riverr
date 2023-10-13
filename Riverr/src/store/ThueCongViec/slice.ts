import { createSlice } from "@reduxjs/toolkit"
import { CongViecDangThue, ThueCongViec } from "types"
import { dsCvDangThueThunk, thueCongViecThunk } from "./thunk"

type QuanLyThueCv = {
    thueCongViec?: ThueCongViec
    DsCvDangThue?: CongViecDangThue[]
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
        })
    },
})

export const { reducer: thueCongViecReducer, actions: thueCongViecActions } = thueCongViecSlice
