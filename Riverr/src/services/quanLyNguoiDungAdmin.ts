import { apiInstace } from "constant";
import { User2 } from "types";

const api = apiInstace({
    baseURL: import.meta.env.VITE_QUANLYNGUOIDUNG_API
})

export const nguoiDungServices = {
    getListNguoiDung: () => api.get<ApiResponse<User2[]>>(""),

    // deleteNguoiDung: (data: any) => api.delete<ApiResponse<User2>>("", data),

    updateNguoiDung: (data: User2) => api.put<ApiResponse<User2>>(`${data.id}`, data),

    themQuanTriVien: (data: User2) => api.post<ApiResponse<User2>>("", data)
}