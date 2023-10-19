import { createSlice } from "@reduxjs/toolkit";
import { ChiTietCongViec, CongViecTheoLoai, DanhSachCongViec, MenuLoaiCongViec } from "types";
import {
  chiTietCongViecThunk,
  danhSachCongViecThunk,
  getCongViecTheoLoaiThunk,
  getCvByIdThunk,
  getMenuCvThunk,
  themCongViecThunk,
  updateCongViecThunk,


} from ".";

type QuanLyCongViec = {
  menuCv?: MenuLoaiCongViec[];
  congViecTheoLoai?: CongViecTheoLoai[];
  chiTietCongViec?: ChiTietCongViec[]
  listCongViec?: DanhSachCongViec[]
  listAfterSearch?: DanhSachCongViec[],
  congViecMoi?: DanhSachCongViec,

  congViecTheoId?: DanhSachCongViec
};

const initialState: QuanLyCongViec = {};

const quanLyCongViecSlice = createSlice({
  name: "quanLyCv",
  initialState,
  reducers: {
    getListAfterSearch: (state, { payload }) => {
      state.listAfterSearch = payload
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
      }).addCase(themCongViecThunk.fulfilled, (state, { payload }) => {
        state.listCongViec.push(payload)
      }).addCase(updateCongViecThunk.fulfilled, (state, { payload }) => {
        state.congViecTheoId = payload
      }).addCase(getCvByIdThunk.fulfilled, (state, { payload }) => {
        state.congViecTheoId = payload
      })
  },
});

export const {
  reducer: quanLyCongViecReducer,
  actions: quanLyCongViecActions,
} = quanLyCongViecSlice;
