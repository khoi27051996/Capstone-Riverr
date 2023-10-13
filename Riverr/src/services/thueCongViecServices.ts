import { apiInstace } from "constant";
import { CongViecDangThue, ThueCongViec } from "types";

const api = apiInstace({
    baseURL: import.meta.env.VITE_THUECONGVIEC_API
})

export const thueCongViecServices = {
    thueCongViec: (data: ThueCongViec) => api.post<ApiResponse<ThueCongViec>>("", data),

    layDsViec: () => api.get<ApiResponse<CongViecDangThue[]>>("/lay-danh-sach-da-thue")
}