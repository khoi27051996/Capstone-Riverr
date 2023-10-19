import { apiInstace } from "constant";
import { CongViecType } from "schema/CongViecSchema";
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

  getListCv: () => api.get<ApiResponse<DanhSachCongViec[]>>(``),

  postCongViec: (data: DanhSachCongViec) => api.post<ApiResponse<DanhSachCongViec>>("", data),

  xoaCvTrongDs: (payload: number) => api.delete<ApiResponse<DanhSachCongViec>>(`/${payload}`),

  getCvById: (payload: number) => api.get<ApiResponse<DanhSachCongViec>>(`/${payload}`),
  updateCv: (payload: CongViecType) => api.put<ApiResponse<DanhSachCongViec>>(`/${payload.id}`, payload)
};
