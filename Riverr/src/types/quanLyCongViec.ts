

export type MenuLoaiCongViec = {
  id: number;
  tenLoaiCongViec: string;
  dsNhomChiTietLoai: {
    id: number;
    tenNhom: string;
    hinhAnh: string;
    maLoaiCongviec: string;
    dsChiTietLoai: {
      id: string;
      tenChiTiet: string;
    }[];
  }[];
};

export type CongViecTheoLoai = {
  id: number;
  congViec: {
    id: number;
    tenCongViec: string;
    danhGia: number;
    giaTien: number;
    nguoiTao: number;
    hinhAnh: string;
    moTa: string;
    maChiTietLoaiCongViec: number;
    moTaNgan: string;
    saoCongViec: number;
  };
  tenLoaiCongViec: string;
  tenNhomChiTietLoai: string;
  tenChiTietLoai: string;
  tenNguoiTao: string;
  avatar: string;
};

export type ChiTietCongViec = {
  id: number;
  congViec: {
    id: number;
    tenCongViec: string;
    danhGia: number;
    giaTien: number;
    nguoiTao: number;
    hinhAnh: string;
    moTa: string;
    maChiTietLoaiCongViec: number;
    moTaNgan: string;
    saoCongViec: number;
  };
  tenLoaiCongViec: string;
  tenNhomChiTietLoai: string;
  tenChiTietLoai: string;
  tenNguoiTao: string;
  avatar: string;
};

export type DanhSachCongViec = {
  id: number,
  tenCongViec: string,
  danhGia: number,
  giaTien: number,
  nguoiTao: string,
  hinhAnh: string,
  moTa: string,
  maChiTietLoaiCongViec: number,
  moTaNgan: string,
  saoCongViec: number
}

export type ThemCongViec = {
  id: string,
  tenCongViec: string,
  danhGia: string,
  giaTien: string,
  nguoiTao: string,
  hinhAnh: string,
  moTa: string,
  maChiTietLoaiCongViec: string,
  moTaNgan: string,
  saoCongViec: string
}