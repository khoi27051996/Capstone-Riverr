import { apiInstace } from "constant";
import { ThemBinhLuan, binhLuan } from "types";

const api = apiInstace({
    baseURL: import.meta.env.VITE_BINHLUAN_API
})

export const binhLuanServices = {
    binhLuanTheoCongViec: (query = 0) => api.get<ApiResponse<binhLuan[]>>(`/lay-binh-luan-theo-cong-viec/${query}`),

    themBinhLuanMoi: (data: ThemBinhLuan) =>
        api.post<ApiResponse<ThemBinhLuan>>("", data),

    getListBinhLuan: () => api.get<ApiResponse<ThemBinhLuan[]>>(""),

    deleteBinhLuan: (data: number) => api.delete<ApiResponse<ThemBinhLuan[]>>(`/${data}`)
}