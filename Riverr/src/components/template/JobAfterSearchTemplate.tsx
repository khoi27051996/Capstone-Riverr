import { PATH } from "constant"
import { useSelector } from "react-redux"
import { generatePath, useNavigate } from "react-router-dom"
import { ROOTSTATE } from "store"
import { styled } from 'styled-components'

export const JobAfterSearchTemplate = () => {
    const { listAfterSearch } = useSelector((state: ROOTSTATE) => state.quanLyCongViec)
    const navigate = useNavigate()
    return (
        <JobAfterSearch>

            <div className="grid grid-cols-12 gap-[30px] job-after">
                {listAfterSearch?.map(items => {
                    return <div key={items.id} className="col-span-3 card-job" onClick={() => {
                        const path = generatePath(PATH.detailJob, {
                            idDetailJob: items.id
                        })
                        navigate(path)
                    }}>
                        <div className="imgage-job">
                            <img src={items.hinhAnh} alt="..." />
                        </div>
                        <div className="content">
                            <h1>{items.tenCongViec}</h1>
                            <h2>Người tạo: {items.nguoiTao}</h2>
                            <p>{items.moTa.substring(0, 100)}...</p>
                            <div className="rate flex justify-between">
                                <i className="fa-solid fa-star"></i>
                                <p>{items.saoCongViec}</p>
                                <p>({items.danhGia})</p>
                                <p>$ {items.giaTien}</p>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </JobAfterSearch>
    )
}
const JobAfterSearch = styled.div`
.job-after{
    padding: 50px;
    .imgage-job{
        img{
            width: 100%;
        }
    }
    .card-job{
        box-shadow: 0 0 10px 0 black;
        cursor: pointer;
    }
    .content{
        padding: 10px;
        h1{
            font-weight: bold;
        }
        h2{
            margin: 10px 0;
        }
        p{
            font-size: 13px;
            margin-bottom: 10px;
        }
        i{
            color: orange;
        }
    }
}

`