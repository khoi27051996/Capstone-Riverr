import { PATH } from "constant";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { generatePath, useNavigate, useParams } from "react-router-dom";
import { ROOTSTATE, getCongViecTheoLoaiThunk, useAppDispatch } from "store";
import { styled } from "styled-components";
export const JobByTypeTemplate = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const id: number = parseInt(params.idJobByTypes, 10);
  const { congViecTheoLoai } = useSelector(
    (state: ROOTSTATE) => state.quanLyCongViec
  );
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getCongViecTheoLoaiThunk(id));
  }, [dispatch, id]);
  return (
    <JobByTypeComponet>
      <div className="flex gap-[30px] ">
        {congViecTheoLoai?.map((v) => {
          return (
            <div
              key={v.id}
              className="jobByType"
              onClick={() => {
                const path = generatePath(PATH.detailJob, {
                  idDetailJob: v.id,
                });
                navigate(path);
              }}
            >
              <div className="hinhAnhCv">
                <img src={v.congViec.hinhAnh} alt="..." />
              </div>
              <div className="titleCv">
                <div className="nguoiTaoCv">
                  <img src={v.avatar} alt="..." />
                  <p>{v.tenNguoiTao}</p>
                </div>
                <h3>{v.congViec.tenCongViec}</h3>
                <div className="rate">
                  <p className="star">
                    <i className="fa-solid fa-star"></i>
                    {v.congViec.saoCongViec}
                  </p>
                  <p className="text-gray-500">({v.congViec.danhGia})</p>
                </div>
                <div className="price">
                  <i className="fa-solid fa-heart"></i>
                  <p>Starting At {v.congViec.giaTien} $</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </JobByTypeComponet>
  );
};

const JobByTypeComponet = styled.div`
  padding: 0 50px;
  .jobByType {
    border: var(--button-boder);
    margin-top: 50px;
    max-width: 300px;
    cursor: pointer;
    box-shadow: var(--box-shadow-card);
    border-radius: var(--button-radius);
  }
  .titleCv {
    padding: 10px 20px;
    h3 {
      font-size: 16px;
      font-weight: bold;
    }
    .hinhAnhCv {
      img {
        width: 100%;
      }
    }
    .nguoiTaoCv {
      display: flex;
      align-items: center;
      margin: 10px 0;
      img {
        width: 100px;
        border-radius: 50%;
        margin-right: 10px;
      }
    }
  }
  .rate {
    display: flex;
    .star {
      color: orange;
      i {
        margin-right: 5px;
      }
      margin-right: 10px;
    }
  }
  .price {
    display: flex;
    justify-content: space-between;
    color: gray;
    margin-top: 10px;
  }
`;
