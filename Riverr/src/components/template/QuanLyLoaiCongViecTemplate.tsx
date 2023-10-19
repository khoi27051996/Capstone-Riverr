
import { useSelector } from "react-redux"
import { ROOTSTATE, useAppDispatch } from "store"
import styled from "styled-components"
import { useEffect, useState } from 'react'
import { deleteCTLCVThunk, getListCTLCV } from "store/ChiTietLoaiCongViec"
import { generatePath, useNavigate } from "react-router-dom"
import { PATH } from "constant"


export const QuanLyLoaiCongViecTemplate = () => {
  const { listCTLCV } = useSelector((state: ROOTSTATE) => state.quanLyCTLCV)

  const [inputValue, setInputValue] = useState("")
  const newList = listCTLCV?.filter(v => v.tenNhom.toLowerCase().includes(inputValue.toLowerCase()))
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getListCTLCV())
  }, [dispatch])
  return (

    <PhanTrang>

      <div>
        <h1 className="text-[30px] font-bold text-center">Quản Lý Loại Công Việc</h1>
        <div className="flex justify-around my-[10px]">
          <div className="search">
            <input type="text" placeholder="Tìm tên nhóm" value={inputValue} onChange={(e) => {
              setInputValue(e.target.value)
            }} />
          </div>
        </div>
        <table className=" w-full ">
          <thead className="text-[15px] table-header">
            <tr>
              <th >Tên nhóm</th>
              <th>Hình Ảnh</th>
              <th>Mã loại công việc</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="text-[13px] table-body">
            {(newList ? newList : listCTLCV)?.map(v => {
              return <tr key={v.id}>
                <td className="text-left">{v.tenNhom}</td>
                <td >
                  <img className="w-full h-[100px] object-cover" src={v.hinhAnh} alt="..." />
                </td>
                <td>{v.maLoaiCongviec}</td>
                <td>
                  <button onClick={() => {
                    const path = generatePath(PATH.quanLyLoaiCongViecDetail, {
                      idLCV: v.id
                    })
                    navigate(path)
                  }}>View Detail</button>
                  <button onClick={() => {
                    dispatch(deleteCTLCVThunk(v))
                  }}>X</button>
                </td>
              </tr>
            })}

          </tbody>
        </table>
      
        {/* <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={10}
          previousLabel="< previous"
          activeClassName="active"
          className="phanTrang"
          renderOnZeroPageCount={null}
        /> */}
      </div>
    </PhanTrang>

  )
}
const PhanTrang = styled.div`
  padding: 50px;
  margin-top: 50px;
     .table-header{
            border-bottom: 1px solid black;
           th{
            margin: 20px;
           }
        
    }
    .table-body{
      text-align: center;
        td{
           padding: 10px 0;
           border-bottom: 1px solid black;
          
        }
        button {
            border: 1px solid black;
            padding: 5px 15px;
            border-radius: 10px;
            margin-left: 10px;
        }
    }
    .search{
      input{
        border: 1px solid black;
        padding: 5px 10px;
      }
    }
    button{
      border: 1px solid black;
      padding: 5px 10px;
      border-radius: 10px;
      margin-left: 10px;
      &:hover{
        background-color: green;
        border: none;
      }
    }

    .modal {
    display: none; /* mặc định được ẩn đi */
    position: fixed; /* vị trí cố định */
    z-index: 1; /* Ưu tiên hiển thị trên cùng */
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
  }

  /* Modal Content */
  .modal-content {
    background-color: #c3a8a8;
    margin: auto;
    padding: 20px;
    border: 1px solid white;
    width: 60%;
    border-radius: 10px;
  }

  /* The Close Button */
  .close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
  .phanTrang{
    display: flex;
    gap: 20px;
    .active{
      color: red;
    }
  }
`
