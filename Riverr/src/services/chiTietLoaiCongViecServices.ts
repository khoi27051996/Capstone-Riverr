import { apiInstace } from "constant";
import { ChiTietLoaiCongViec } from "types";

const api = apiInstace({
    baseURL: import.meta.env.VITE_CHITIETLOAICONGVIEC_API
})

export const chiTietLoaiCongViecServices = {
    getListCTLCV: () => api.get<ApiResponse<ChiTietLoaiCongViec[]>>(""),

    deleteCTLCV: (data: ChiTietLoaiCongViec) => api.delete<ApiResponse<ChiTietLoaiCongViec>>(`${data.id}`),

    postCTLCV: (data: ChiTietLoaiCongViec) => api.post<ApiResponse<ChiTietLoaiCongViec>>("", data)
}