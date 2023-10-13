import { PATH } from "constant";
import { useSelector } from "react-redux";
import { generatePath, useNavigate, useParams } from "react-router-dom";
import { ROOTSTATE } from "store";
import { styled } from "styled-components";
export const JobAndTypeTemplate = () => {
  const { menuCv } = useSelector((state: ROOTSTATE) => state.quanLyCongViec);
  const params = useParams();
  const id: number = parseInt(params.typeId, 10);
  const typeJob = menuCv.find((v) => v.id == id);
  const { dsNhomChiTietLoai } = typeJob;
  const navigate = useNavigate();
  return (
    <JobAndTypeJob>
      <div className="typeJob-Top">
        <div className="typeJob-img"></div>
        <div className="typeJob-title">
          <h1>Most popular in Graphics & Design</h1>
          <div className="typeJob-content">
            <div className="content">
              <h3>Minimalist Logo Design</h3>
            </div>
            <div className="content">
              <h3>Architecture & Interior Design</h3>
            </div>
            <div className="content">
              <h3>Image Editing</h3>
            </div>
            <div className="content">
              <h3>NFT Art</h3>
            </div>
            <div className="content">
              <h3>T-Shirts & Merchandi</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[30px] graphics-design">
        <h1 className="text-[20px] font-bold my-[10px]">
          Explore Graphics & Design
        </h1>
        <div className="flex gap-[20px]">
          {dsNhomChiTietLoai.map((v) => {
            return (
              <div key={v.id}>
                <img src={v.hinhAnh} alt="..." />
                <h1 className="font-bold text-[18px]">{v.tenNhom}</h1>
                <div>
                  {v.dsChiTietLoai.map((e) => {
                    return (
                      <div
                        key={e.id}
                        className="job-detail"
                        onClick={() => {
                          const path = generatePath(PATH.jobByTypes, {
                            idJobByTypes: e.id,
                          });
                          navigate(path);
                        }}
                      >
                        {e.tenChiTiet}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </JobAndTypeJob>
  );
};

const JobAndTypeJob = styled.div`
  .typeJob-Top {
    .typeJob-img {
      background-image: url(/images/Graphic-Design.jpg);
      height: 250px;
      background-position: top;
      background-repeat: no-repeat;
      background-size: cover;
      filter: brightness(70%);
      border-radius: 10px;
    }
    .typeJob-title {
      h1 {
        font-weight: bold;
        margin-left: 35px;
        font-size: 20px;
        margin-top: 20px;
      }
    }
    .typeJob-content {
      display: flex;
      justify-content: space-around;
      gap: 30px;
      .content {
        border: 1px solid white;
        box-shadow: 0 0 10px 0 black;
        padding: 10px;
        border-radius: 10px;
        cursor: pointer;
        margin: 30px 0;
      }
    }
  }
  .graphics-design {
    img {
      box-shadow: 0 0 10px 0 black;
      height: 200px;
      width: 350px;
      border-radius: 10px;
      margin: 20px 0;
    }
    .job-detail {
      margin: 10px 0;
      cursor: pointer;
      &::after {
        content: "";
        display: block;
        height: 3px;
        background: var(--primary-color);
        width: 0;
        transition: all 0.3s ease-in-out;
      }
      &:hover {
        &::after {
          width: 30%;
        }
      }
    }
  }
`;
