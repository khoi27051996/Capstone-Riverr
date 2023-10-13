import { apiInstace } from "constant";
import { ChiTietCongViec, CongViecTheoLoai, DanhSachCongViec, MenuLoaiCongViec } from "types";

const api = apiInstace({
  baseURL: import.meta.env.VITE_CONGVIEC_API,
});

export const quanLyCongViec = {
  getMenuCv: () =>
    api.get<ApiResponse<MenuLoaiCongViec[]>>("/lay-menu-loai-cong-viec"),

  getCongViecTheoLoai: (query = 0) =>
    api.get<ApiResponse<CongViecTheoLoai[]>>(
      `/lay-cong-viec-theo-chi-tiet-loai/${query}`
    ),
  getChiTietCongViec: (query = 0) =>
    api.get<ApiResponse<ChiTietCongViec[]>>(`/lay-cong-viec-chi-tiet/${query}`),

  getListCv: ()=> api.get<ApiResponse<DanhSachCongViec[]>>("")
};
