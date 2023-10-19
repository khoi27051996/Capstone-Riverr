import { PATH } from "constant"
import { NavLink } from "react-router-dom"
import { styled } from 'styled-components'
export const SileBarLayout = () => {
    return (
        <SildBar>

            <div className="grid gap-[30px] mt-[20px] p-[30px]">
                <NavLink to={PATH.quanLyNguoiDung}>Quản Lý Người Dùng</NavLink>

                <NavLink to={PATH.quanLyCongViec}>Quản Lý Công Việc</NavLink>
                <NavLink to={PATH.quanLyLoaiCongViec}>Quản Lý Loại Công Việc</NavLink>
                <NavLink to={PATH.quanLyDichVu}>Quản Lý Dịch Vụ</NavLink>
            </div>
        </SildBar>
    )
}
const SildBar = styled.div`
    .active{
        border-bottom: 2px solid red;
        color: red;
    }
`
