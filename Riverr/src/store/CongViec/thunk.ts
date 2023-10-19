import { createAsyncThunk } from "@reduxjs/toolkit";
import { CongViecType } from "schema/CongViecSchema";
import { quanLyCongViec } from "services";
import { DanhSachCongViec} from "types";

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

export const themCongViecThunk = createAsyncThunk(
  "themCongViec",
  async (payload: DanhSachCongViec, { rejectWithValue }) => {
    try {
      const data = await quanLyCongViec.postCongViec(payload)
      return data.data.content
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)

export const xoaCongViecTrongDsThunk = createAsyncThunk(
  "danhSachCongViec/Xoa",
  async (payload: number, { rejectWithValue }) => {
    try {
      const data = await quanLyCongViec.xoaCvTrongDs(payload)
      return data.data.content
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)


export const getCvByIdThunk = createAsyncThunk(
  "congViecTheoId",
  async (payload: number, { rejectWithValue }) => {
    try {
      const data = await quanLyCongViec.getCvById(payload)
      return data.data.content
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)

export const updateCongViecThunk = createAsyncThunk(
  "danhSachCongViec/Update",
  async (payload: CongViecType, { rejectWithValue }) => {
    try {
      const data = await quanLyCongViec.updateCv(payload)
      return data.data.content
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)