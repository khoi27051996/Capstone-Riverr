import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { ROOTSTATE } from "store"
import { styled } from 'styled-components'

export const QLLCVDetail = () => {
    const { listCTLCV } = useSelector((state: ROOTSTATE) => state.quanLyCTLCV)
    const param = useParams()
    const id: number = parseInt(param.idLCV, 10)

    const detail = listCTLCV.find(v => v.id == id)

    return (
        <DetailCTLCV>
            <h1 className="text-center font-bold text-[30px]">Chi tiết nhóm loại công việc</h1>
            <div className="content">
                <div className="title">
                    <h2>Tên nhóm :<hr/> {detail.tenNhom}</h2>
                    <p>Mã loại công việc : {detail.maLoaiCongviec}</p>
                    <h2>Nhóm gồm các loại: </h2>
                    {detail.dsChiTietLoai.map(v => {
                        return <p key={v.id}>{v.tenChiTiet}</p>
                    })}
                </div>
                <div className="image">
                    <img src={detail.hinhAnh} alt="" />
                </div>
            </div>
        </DetailCTLCV>
    )
}

const DetailCTLCV = styled.div`
    padding: 50px;
    margin-top: 30px;
    .content{
        display: flex;
        margin-top: 30px;
        gap: 50px;
        h2{
            font-weight: bold;
        }

        p{
            margin: 10px 0;
            border-bottom: 1px dotted  black;
        }

        img{
            box-shadow: 0 0 20px 0 black;
        }
    }
`
