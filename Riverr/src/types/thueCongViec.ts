import { ReactNode } from "react"

export type ThueCongViec = {
    id: number,
    maCongViec: number,
    maNguoiThue: number,
    ngayThue: ReactNode,
    hoanThanh: boolean
}

export type CongViecDangThue = {
    id: number,
    ngayThue: number,
    hoanThanh: boolean,
    congViec: {
        id: number,
        tenCongViec: string,
        danhGia: number,
        giaTien: number,
        nguoiTao: number,
        hinhAnh: string,
        moTa: number,
        maChiTietLoaiCongViec: number,
        moTaNgan: string,
        saoCongViec: number
    }
}