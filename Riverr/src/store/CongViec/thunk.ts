import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyCongViec } from "services";

export const getMenuCvThunk = createAsyncThunk(
  "quanLyMenuCv/getMenu",
  async (_, { rejectWithValue }) => {
    try {
      const data = await quanLyCongViec.getMenuCv();
      return data.data.content;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getCongViecTheoLoaiThunk = createAsyncThunk(
  "quanLyLoaiCongViec/getCongViec",
  async (payload: number, { rejectWithValue }) => {
    try {
      const data = await quanLyCongViec.getCongViecTheoLoai(payload);
      return data.data.content;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const chiTietCongViecThunk = createAsyncThunk(
  "quanLyLoaiCongViec/ChiTiet",
  async (payload: number, { rejectWithValue }) => {
    try {
      const data = await quanLyCongViec.getChiTietCongViec(payload);
      return data.data.content;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const danhSachCongViecThunk = createAsyncThunk(
  "danhSachCongViec/theoTen",
  async (_, { rejectWithValue }) => {
    try {
      const data = await quanLyCongViec.getListCv()
      return data.data.content
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)