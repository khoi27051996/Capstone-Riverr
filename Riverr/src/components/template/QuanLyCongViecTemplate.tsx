import { ModelThemCongViec } from "components"
import { PATH } from "constant"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { generatePath, useNavigate } from "react-router-dom"
import { binhLuanServices, quanLyCongViec } from "services"
import { ROOTSTATE, danhSachCongViecThunk, getCvByIdThunk, useAppDispatch, xoaCongViecTrongDsThunk } from "store"
import { styled } from 'styled-components'

export const QuanLyCongViecTemplate = () => {
    const navigate = useNavigate()
    const { listCongViec } = useSelector((state: ROOTSTATE) => state.quanLyCongViec)
    const dispatch = useAppDispatch()
    const [tableCv, setTableCv] = useState(listCongViec)
    const [inputValue, setInputValut] = useState("")
    let newList = listCongViec?.filter((v) => v.tenCongViec.toLowerCase().includes(inputValue.toLowerCase()))
    const [number, setNumber] = useState(0)
    useEffect(() => {
        dispatch(danhSachCongViecThunk())
        tableCv
    }, [dispatch, number, tableCv])


    return (
        <QuanLyCongViec>
            <div className="p-[40px] mt-[50px]">

                <div className="flex justify-around header-top">
                    <div className="searchCv">

                        <input type="text" placeholder="Tìm kiếm việc" value={inputValue} onChange={(e) => {
                            setInputValut(e.target.value)
                        }} onKeyDown={(v) => {
                            v.key == "Enter"
                        }} />
                        {/* <button className="btn-search" onClick={() => {
                           
                        }}>Search</button> */}
                    </div>
                    <button id="myBtn3" className="btn-them" onClick={() => {
                        const modal = document.getElementById("addCv");

                        const btn = document.getElementById("myBtn3");

                        btn.onclick = function () {
                            modal.style.display = "block";
                        };

                        window.onclick = function (event) {
                            if (event.target == modal) {
                                modal.style.display = "none";
                            }
                        };

                    }}>Thêm Công việc +++</button>
                </div>
                <table className="text-center table-fixed mt-[10px]">
                    <thead className="text-[15px] table-header">
                        <tr>
                            <th className="w-[100px]">Mã Công Việc</th>
                            <th>Tên Công Việc</th>
                            <th className="w-[80px]">Hình ảnh</th>
                            <th>Mô Tả</th>
                            <th>Đánh Giá</th>
                            <th>Sao Công Việc</th>
                            <th>Người Tạo</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="text-[13px] table-body">
                        {(newList ? newList : tableCv)?.map((v) => {
                            return <tr key={v.id}>
                                <td>{v.id}</td>
                                <td>{v.tenCongViec}</td>
                                <td>

                                    <img className="" src={v.hinhAnh} alt="..." />

                                </td>
                                <td>{v.moTa.substring(0, 50)}...</td>
                                <td>{v.danhGia}</td>
                                <td>{v.saoCongViec}</td>
                                <td>{v.nguoiTao}</td>
                                <td>
                                    <div className="flex gap-[20px]">
                                        <button className="button1" onClick={() => {
                                            const path = generatePath(PATH.detailJob, {
                                                idDetailJob: v.id
                                            })
                                            navigate(path)
                                        }}>Detail</button>
                                        <button className="button2" id="myBtn4" onClick={() => {
                                            dispatch(getCvByIdThunk(v.id))
                                            navigate(PATH.editsJob)
                                        }}>Edits</button>
                                        <button className="button3" onClick={async () => {
                                            try {
                                                await quanLyCongViec.xoaCvTrongDs(v.id)
                                                setTableCv(listCongViec)
                                            } catch (err) {
                                                console.log(err)
                                            }
                                        }}>Delete</button>
                                    </div>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
            <ModelThemCongViec />

        </QuanLyCongViec>
    )
}

const QuanLyCongViec = styled.div`
    .header-top{
        .searchCv{
            input{
                border: 1px solid black;
                padding: 5px 10px;
                margin-right: 20px ;
            }
            button{
                border: 1px solid black;
                padding: 5px 10px;
                border-radius: 10px;
                &:hover{
                    background-color: green;
                    border: none;
                }
            }
        }
        .btn-them{
            border: 1px solid white;
            padding: 10px 15px;
            background-color: green;
            font-weight: bold;
            border-radius: 10px;
            &:hover{
                border: 1px solid black;
                background-color: white;
            }
        }
    }
    .table-header{
    
            border-bottom: 1px solid black;
        
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

  .formModal {
    padding: 30px;
  }
  .modalButton {
    text-align: right;
    margin-top: 10px;
    button {
      border: var(--button-boder);
      border-radius: var(--button-radius);
      background-color: white;
      color: brown;
      padding: 5px 15px;
      margin-left: 20px;
      &:hover {
        background-color: brown;
        color: white;
      }
    }
  }

`