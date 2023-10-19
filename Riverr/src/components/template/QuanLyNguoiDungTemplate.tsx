import { useSelector } from "react-redux"
import { ROOTSTATE, useAppDispatch } from "store"
import { styled } from 'styled-components'
import { useEffect, useState } from 'react'
import {  getListNguoiDung } from "store/NguoiDung"
import ReactPaginate from "react-paginate"
import { generatePath, useNavigate } from "react-router-dom"
import { PATH } from "constant"
export const QuanLyNguoiDungTemplate = () => {
  const [inputValue, setInputValue] = useState("")
  const { listNguoiDung } = useSelector((state: ROOTSTATE) => state.quanLyNguoiDung)
  const searchList = listNguoiDung?.filter(v => v.name.toLowerCase().includes(inputValue.toLowerCase()))
  let numberInPage = 10;
  let totalPage = Math.ceil(searchList?.length / numberInPage)
  const [number, setNumber] = useState(0)
  let start = number * numberInPage;
  let end = start + numberInPage
  const handlePageClick = (event) => {
    setNumber(event.selected + 1)
  }
  let newList = searchList?.slice(start, end)
  const navigate = useNavigate()


  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getListNguoiDung())

  }, [dispatch])
  return (
    <NguoiDung>
      <h1 className="text-center font-bold text-[30px]">Quản lý người dùng</h1>
      <div className="search">
        <div>
          <input type="text" placeholder="Tìm tên người dùng" value={inputValue} onChange={(e) => {
            setInputValue(e.target.value)
          }} />

        </div>
        <button onClick={() => {
          navigate(PATH.quanLyNguoiDungThemQTV)
        }}>Thêm quản trị viên +++</button>
      </div>
      <table className="text-center table-main mt-[10px] w-full h-[750px] ">
        <thead className="text-[15px] table-header">
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th >Email</th>
            <th>Số ĐT</th>
            <th>Birthday</th>
            <th >Avatar</th>
            <th>Vai Trò</th>
            <th>Skill</th>
            <th>Certification</th>
            <th>BookingJob</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="text-[13px] table-body">
          {(newList && newList)?.map((v, index) => {
            return <tr key={v.id}>
              <td>{index + 1}</td>
              <td>{v.name}</td>
              <td>{v.email}</td>
              <td>{v.phone}</td>
              <td>{v.birthday}</td>
              <td>
                <img className="w-[80px]" src={v.avatar} alt="..." />
              </td>
              <td>{v.role}</td>
              <td>{v.skill?.map((v, index) => {
                return <p key={index}>{v}</p>
              })}</td>
              <td>{v.certification?.map((v, index) => {
                return <p key={index}>{v}</p>
              })}</td>
              <td>{v.bookingJob?.map((v, index) => {
                return <p key={index}>{v}</p>
              })}</td>
              <td>
                <div className="button-detail">
                  <button onClick={() => {
                    const path = generatePath(PATH.quanLyNguoiDungDetail, {
                      idUser: v.id
                    })
                    navigate(path)
                  }}>Detail</button>
                  <button onClick={() => {
                    alert("Api không cho truyền ID dô nên không biết làm hàm xóa User này như nào :(")
                  }}>X</button>
                </div>
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
    </NguoiDung>
  )
}

const NguoiDung = styled.div`
    padding: 50px;
  margin-top: 50px;
     /* .table-search{
      display: none;
     } */
     .table-header{
            border-bottom: 1px solid black;
           th{
            margin: 20px;
           }
        
    }
    .table-body{
      text-align: center;
     
        td{
        
           padding: 10px 10px;
           border-bottom: 1px solid black;
          
        }
        button {
            border: 1px solid black;
            padding: 5px 15px;
            border-radius: 10px;
            margin-left: 10px;
        }
        .button-detail{
          display: flex;
          gap: 10px;
        }
    }
    .table-search{
      display: none;
    }
    .search{
      display: flex;
      justify-content: space-around;
      margin: 10px 0;
      input{
        border: 1px solid black;
        padding: 5px 10px;
      }
      button{
        border: 1px solid green;
        padding: 5px 10px;
        border-radius: 10px;
        &:hover{
          background-color: green;
          border:  none;
        }
      }
    }
    .phanTrang{
      display: flex;
      justify-content: center;
      gap: 30px;
      margin-top: 20px;
      .active{
        color: red;
        border: 1px solid red;
        padding: 0 15px;
      }
    }
`