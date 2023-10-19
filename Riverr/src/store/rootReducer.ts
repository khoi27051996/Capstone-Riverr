import { combineReducers } from "@reduxjs/toolkit";
import { administerUserReducer } from "./auth/slice";
import { quanLyCongViecReducer } from "./CongViec/slice";
import { quanLyBinhLuanReducer } from "./BinhLuan/slice";
import { thueCongViecReducer } from "./ThueCongViec";
import { quanLyNguoiDungReducer } from "./NguoiDung";
import { chiTietCongViecReducer } from "./ChiTietLoaiCongViec/slice";

export const rootReducer = combineReducers({
  administerUser: administerUserReducer,
  quanLyCongViec: quanLyCongViecReducer,
  quanLyBinhLuan: quanLyBinhLuanReducer,
  quanLyThueCv: thueCongViecReducer,
  quanLyNguoiDung: quanLyNguoiDungReducer,
  quanLyCTLCV: chiTietCongViecReducer
});
