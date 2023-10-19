import { ReactNode } from 'react'

export type binhLuan = {
    id: number,
    ngayBinhLuan: string,
    noiDung: string,
    saoBinhLuan: number,
    tenNguoiBinhLuan: string,
    avatar: string
}

export type ThemBinhLuan = {
    id: number,
    maCongViec: number,
    maNguoiBinhLuan: number,
    ngayBinhLuan: Date,
    noiDung: string,
    saoBinhLuan: number
}

export type ThemBinhLuan2 = {
    id: number,
    maCongViec: number,
    maNguoiBinhLuan: number,
    ngayBinhLuan: ReactNode,
    noiDung: string,
    saoBinhLuan: number
}