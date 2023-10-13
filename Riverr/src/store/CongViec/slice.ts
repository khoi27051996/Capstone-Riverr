import { createSlice } from "@reduxjs/toolkit";
import { ChiTietCongViec, CongViecTheoLoai, DanhSachCongViec, MenuLoaiCongViec } from "types";
import {
  chiTietCongViecThunk,
  danhSachCongViecThunk,
  getCongViecTheoLoaiThunk,
  getMenuCvThunk,
} from ".";

type QuanLyCongViec = {
  menuCv?: MenuLoaiCongViec[];
  congViecTheoLoai?: CongViecTheoLoai[];
  chiTietCongViec?: ChiTietCongViec[]
  listCongViec?: DanhSachCongViec[]
  listAfterSearch?: DanhSachCongViec[]
};

const initialState: QuanLyCongViec = {};

const quanLyCongViecSlice = createSlice({
  name: "quanLyCv",
  initialState,
  reducers: {
    getListAfterSearch: (state, { payload }) => {
      state.listAfterSearch = payload
      console.log(state.listAfterSearch)
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getMenuCvThunk.fulfilled, (state, { payload }) => {
        state.menuCv = payload;
      })
      .addCase(getCongViecTheoLoaiThunk.fulfilled, (state, { payload }) => {
        state.congViecTheoLoai = payload;
      })
      .addCase(chiTietCongViecThunk.fulfilled, (state, { payload }) => {
        state.chiTietCongViec = payload;
      }).addCase(danhSachCongViecThunk.fulfilled, (state, { payload }) => {
        state.listCongViec = payload
      })
  },
});

export const {
  reducer: quanLyCongViecReducer,
  actions: quanLyCongViecActions,
} = quanLyCongViecSlice;
