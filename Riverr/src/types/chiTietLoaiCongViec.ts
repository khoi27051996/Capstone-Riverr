export type ChiTietLoaiCongViec = {
    id: number,
    tenNhom: string,
    hinhAnh: string,
    maLoaiCongviec: number,
    dsChiTietLoai: {
        id: number,
        tenChiTiet: string
    }[]
}