import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

import { ROOTSTATE, deleteBinhLuanThunk, deleteCvTrongList, getListBinhLuanThunk, getListThueCvThunk, useAppDispatch } from "store"
import { styled } from 'styled-components'
import ReactPaginate from 'react-paginate';


export const QuanLyDichVuTemplate = () => {
    const { listThueCv } = useSelector((state: ROOTSTATE) => state.quanLyThueCv)
    const [number, setNumber] = useState(0)
    let numberInPage = 10
    let totalPage = Math.ceil(listThueCv?.length / numberInPage)
    let start = number * numberInPage;
    let end = start + numberInPage
    let newList = listThueCv?.slice(start, end)
    const handlePageClick = (event) => {
        setNumber(event.selected + 1)
    }

    const { listBinhLuan } = useSelector((state: ROOTSTATE) => state.quanLyBinhLuan)
    const [number2, setNumber2] = useState(0)
    let numberInPage2 = 10
    let totalPage2 = Math.ceil(listBinhLuan?.length / numberInPage2)
    let start2 = number2 * numberInPage2;
    let end2 = start2 + numberInPage2
    let newList2 = listBinhLuan?.slice(start2, end2)
    const handlePageClick2 = (event) => {
        setNumber2(event.selected + 1)
    }

    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getListThueCvThunk())
        dispatch(getListBinhLuanThunk())
    }, [dispatch])
    return (
        <QuanLyDichVu>

            <div className="p-[40px] mt-[50px]">
                <h1 className="text-[30px] font-bold text-center">Thông tin thuê công việc</h1>
                <table className="text-center table-fixed w-full">
                    <thead className="text-[15px] table-header">
                        <tr>
                            <th className="w-[100px]">ID</th>
                            <th>Mã Công Việc</th>
                            <th className="w-[120px]">Mã người thuê</th>
                            <th>Ngày Thuê</th>
                            <th>Hoàn Thành</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="text-[13px] table-body">
                        {newList && newList.map((v) => {
                            return <tr key={v.id}>
                                <td>{v.id}</td>
                                <td>{v.maCongViec}</td>
                                <td>{v.maNguoiThue}</td>
                                <td>{v.ngayThue}</td>
                                <td>{v.hoanThanh}</td>
                                <td>
                                    <button onClick={() => {
                                        dispatch(deleteCvTrongList(v.id))
                                        dispatch(getListThueCvThunk())
                                        alert(`Đã xóa thông tin thuê cv ${v.id}`)
                                    }}>X</button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>

                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={totalPage}
                    previousLabel="< previous"
                    activeClassName="active"
                    className="phanTrang"
                    renderOnZeroPageCount={null}
                />
            </div>
            <div className="p-[40px] mt-[50px]">
                <h1 className="text-[30px] font-bold text-center">Thông tin bình luận</h1>
                <table className="text-center table-fixed w-full">
                    <thead className="text-[15px] table-header">
                        <tr>
                            <th className="w-[100px]">ID</th>
                            <th>Mã Công Việc</th>
                            <th className="w-[120px]">Mã người BL</th>
                            <th>Ngày bình luận</th>
                            <th>Nội dung</th>
                            <th>Sao bình luận</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="text-[13px] table-body">
                        {newList2 && newList2?.map((v) => {
                            return <tr key={v.id}>
                                <td>{v.id}</td>
                                <td>{v.maCongViec}</td>
                                <td>{v.maNguoiBinhLuan}</td>
                                <td>{v.ngayBinhLuan}</td>
                                <td>{v.noiDung.substring(0, 40)}...</td>
                                <td>{v.saoBinhLuan}</td>
                                <td>
                                    <button onClick={() => {
                                        dispatch(deleteBinhLuanThunk(v.id))
                                        dispatch(getListBinhLuanThunk())
                                        alert(`Đã xóa bình luận ${v.id}`)
                                    }}>X</button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>

                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick2}
                    pageRangeDisplayed={5}
                    pageCount={totalPage2}
                    previousLabel="< previous"
                    activeClassName="active"
                    className="phanTrang"
                    renderOnZeroPageCount={null}
                />
            </div>

        </QuanLyDichVu>
    )
}
const QuanLyDichVu = styled.div`
    .table-header{
            border-bottom: 1px solid black;
           th{
            margin: 20px;
           }
        
    }
    .table-body{
        td{
           padding: 10px 0;
           border-bottom: 1px solid black;
          
        }
        button {
            border: 1px solid black;
            padding: 5px 15px;
            border-radius: 10px;
        }
    }
    .phanTrang{
        display: flex;
        justify-content: center;
        gap: 20px;
        margin-top: 10px;
        .active{
            color: red;
            border: 1px solid red;
            padding: 0 15px;
        }
    }
`