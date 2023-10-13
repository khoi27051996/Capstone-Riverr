import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ROOTSTATE, binhLuanTheoCongViecThunk, chiTietCongViecThunk, themBinhLuanMoiThunk, thueCongViecThunk, useAppDispatch } from "store";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import { Dropdown, Tabs } from "components";
import { PATH } from "constant";
import { ThemBinhLuan, ThueCongViec } from "types";

export const JobTemplate = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const id: number = parseInt(params.idDetailJob, 10);
  const { congViecTheoLoai, chiTietCongViec } = useSelector(
    (state: ROOTSTATE) => state.quanLyCongViec
  );



  const { binhLuanTheoCongViec } = useSelector((state: ROOTSTATE) => state.quanLyBinhLuan)

  const { userSignUp, token } = useSelector((state: ROOTSTATE) => state.administerUser)


  const [noiDung, setNoiDung] = useState("")
  const navigate = useNavigate()
  const handleText = (e) => {
    setNoiDung(e.target.value)
  }
  const [userCmt, setUserCmt] = useState<ThemBinhLuan>({
    id: 0,
    maCongViec: 0,
    maNguoiBinhLuan: 0,
    ngayBinhLuan: new Date(),
    noiDung: "",
    saoBinhLuan: 0
  })
  const handleUserCmt = () => {
    userCmt.maCongViec = id
    userCmt.maNguoiBinhLuan = userSignUp?.user?.id
    userCmt.noiDung = noiDung
  }
  useEffect(() => {
    dispatch(chiTietCongViecThunk(id));
    dispatch(binhLuanTheoCongViecThunk(id))
  }, [dispatch, id, userCmt.noiDung]);

  return (
    <DetailJob>
      <div className="grid grid-cols-12 gap-[50px]">

        <div className="detail col-span-8">
          {chiTietCongViec?.map(v => {
            return <div>
              <div className="thongTinLoaiCv">
                <NavLink to="">{v?.tenLoaiCongViec}</NavLink>
                <i className="fa-solid fa-chevron-right"></i>
                <NavLink className="ms-[20px]" to="">
                  {v?.tenNhomChiTietLoai}
                </NavLink>
                <i className="fa-solid fa-chevron-right"></i>
                <NavLink to="" className="ms-[20px]">
                  {v?.tenChiTietLoai}
                </NavLink>
              </div>
              <div className="detail-job">
                <h1>{v?.congViec?.tenCongViec}</h1>
                <div className="nguoiTaoCv">
                  <img src={v?.avatar} alt="..." />
                  <p>{v?.tenNguoiTao}</p>
                  <p className="color-gray">|</p>
                  <div className="star">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <p>{v?.congViec?.saoCongViec}</p>
                  </div>
                  <p className="color-gray">({v?.congViec?.danhGia})</p>
                  <p className="color-gray">|</p>
                  <p className="color-gray">4 orders in Queue</p>
                </div>
                <p className="teo">
                  <i className="fa-solid fa-trophy"></i>
                  <span>Buyers keep returning!</span> nofilrazzaq has an exceptional
                  number of repeat buyers
                </p>
                <div className="img-job">
                  <img src={v?.congViec?.hinhAnh} alt="" />
                </div>
                <div className="moTa">
                  <p>{v?.congViec?.moTa}</p>
                </div>
              </div>
              <h1 className="font-bold my-[20px]">About The Seller</h1>
              <div className="seller">

                <img src={v?.avatar} alt="..." />

                <div className="star">
                  <p>{v?.tenNguoiTao}</p>
                  <div className="number-star">

                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <p>{v?.congViec?.saoCongViec}</p>
                  </div>
                </div>
                <p className="color-gray">({v?.congViec?.danhGia})</p>
              </div>
              <button>Contact Me</button>
            </div>
          })}
          <div className="faq-layout">
            <h1 className="font-bold text-[20px]">FAQ</h1>
            <Dropdown tieuDe="Do you provide regular updates on order?" noiDung1="A: 123" noiDung2="B: 456" />
            <Dropdown tieuDe="How do you guanrantee product quaillty and rellabllity?" noiDung1="A: 123" noiDung2="B: 456" />
            <Dropdown tieuDe="Do you give post-development support?" noiDung1="A: 123" noiDung2="B: 456" />
            <Dropdown tieuDe="Do you sunyert PSD to HTML?" noiDung1="A: 123" noiDung2="B: 456" />
          </div>

          <div className="comment">
            <h1>Bình Luận</h1>
            {binhLuanTheoCongViec?.map(items => {
              return <div key={items.id} className="comment-Container">
                <div className="avatar-Comment">
                  <img src={items.avatar} alt="..." />
                </div>
                <div className="content-comment">
                  <h1>{items.tenNguoiBinhLuan}</h1>
                  <h2>{items.noiDung}</h2>
                  <p>{items.ngayBinhLuan}</p>
                  <div className="button">
                    <button>Like</button>
                    <button>Dislike</button>
                  </div>
                </div>
              </div>
            })}
          </div>

          <div className="add-Comment">
            <h1></h1>
            <textarea
              className="form-control text-black"
              id="textAreaExample"
              value={noiDung}
              onChange={handleText}
              rows={3}
              cols={50}
              style={{ background: "white", border: "1px solid black", padding: "3px 5px" }}
            />
          </div>
          <button onClick={() => {
            handleUserCmt()
            if (token) {
              dispatch(themBinhLuanMoiThunk(userCmt))
              setNoiDung("")
            } else {
              navigate(PATH.login)
            }
            dispatch(binhLuanTheoCongViecThunk(id))
          }}>Add Comment</button>
        </div>

        <div className="thueCv col-span-4">
          <h1 className="font-bold text-[20px]">Thuê công việc</h1>
          {chiTietCongViec?.map(v => {

            return <Tabs tabPosition="top" items={[
              {
                key: "Bacsic",
                label: "Bacsic",
                children: (
                  <div>
                    <div className="title">
                      <h1>Basic: </h1>
                      <h1> $ {v?.congViec?.giaTien}</h1>
                    </div>
                    <p>Create a simple web application for your business</p>
                    <div className="moTa__Ngan">
                      <p>{v?.congViec?.moTaNgan}</p>
                    </div>
                    <div className="buttonNext flex flex-col ">
                      <button onClick={() => {
                        let thueCongViec: ThueCongViec = {
                          id: 0,
                          hoanThanh: false,
                          maCongViec: id,
                          maNguoiThue: userSignUp?.user?.id,
                          ngayThue: new Date()
                        }
                        if (token) {
                          dispatch(thueCongViecThunk(thueCongViec))
                          navigate(PATH.users)
                        } else {
                          navigate(PATH.login)
                        }
                      }}>Continue ($ {v?.congViec?.giaTien})</button>
                      <button>Compare packages</button>
                    </div>
                  </div>
                )
              },
              {
                key: "Standerd",
                label: "Standerd",
                children: (
                  <div>
                    <div className="title">
                      <h1>Standard: </h1>
                      <h1> $ {v?.congViec?.giaTien}</h1>
                    </div>
                    <p>Create a simple web application for your business</p>
                    <div className="moTa__Ngan">
                      <p>{v?.congViec?.moTaNgan}</p>
                    </div>
                    <div className="buttonNext flex flex-col ">
                      <button onClick={() => {
                        let thueCongViec: ThueCongViec = {
                          id: 0,
                          hoanThanh: false,
                          maCongViec: id,
                          maNguoiThue: userSignUp?.user?.id,
                          ngayThue: new Date()
                        }
                        if (token) {
                          dispatch(thueCongViecThunk(thueCongViec))
                          navigate(PATH.users)
                        } else {
                          navigate(PATH.login)
                        }
                      }}>Continue ($ {v?.congViec?.giaTien})</button>
                      <button>Compare packages</button>
                    </div>
                  </div>
                )
              },
              {
                key: "Primeum",
                label: "Primeum",
                children: (
                  <div>
                    <div className="title">
                      <h1>Primeum: </h1>
                      <h1> $ {v?.congViec?.giaTien}</h1>
                    </div>
                    <p>Create a simple web application for your business</p>
                    <div className="moTa__Ngan">
                      <p>{v?.congViec?.moTaNgan}</p>
                    </div>
                    <div className="buttonNext flex flex-col ">
                      <button onClick={() => {
                        let thueCongViec: ThueCongViec = {
                          id: 0,
                          hoanThanh: false,
                          maCongViec: id,
                          maNguoiThue: userSignUp?.user?.id,
                          ngayThue: new Date()
                        }
                        if (token) {
                          dispatch(thueCongViecThunk(thueCongViec))
                          navigate(PATH.users)
                        } else {
                          navigate(PATH.login)
                        }
                      }}>Continue ($ {v?.congViec?.giaTien})</button>
                      <button>Compare packages</button>
                    </div>
                  </div>
                )
              }

            ]} />
          })}
        </div>
      </div>
    </DetailJob>
  );
};

const DetailJob = styled.div`
  padding: 0 40px;
  .thongTinLoaiCv {
    margin-top: 10px;
    a {
      color: blue;
      margin-right: 20px;
    }
  }
  .detail-job {
    margin-top: 20px;
    h1 {
      font-size: 20px;
      font-weight: bold;
    }
    .nguoiTaoCv {
      display: flex;
      align-items: center;
      margin: 10px 0;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      p {
        font-weight: bold;
        margin: 0 20px;
      }
      .star {
        display: flex;
        color: orange;
        margin: 0 20px;
      }
      .color-gray {
        color: gray;
      }
    }
    .teo {
      color: gray;
      padding-top: 10px;
      &::before {
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        background-color: gray;
        margin: 10px 0;
      }
      i{
        font-size: 20px;
      }
      span {
        font-weight: bold;
        color: black;
        margin-left: 10px;
      }
    }
  }
  .seller{
    display: flex;
    align-items:  center;
    img{
      height: 100px;
      width: 100px;
      margin-right: 20px;
    }
    .star{
      /* display: flex; */
      margin: 0 20px;
     .number-star{
      display: flex;
      color: orange;
     }
    }
  }
  button{
    border: 1px solid black;
    padding: 5px 10px;
    margin-top: 10px;
    border-radius: 10px;
    transition: all .5 ease-in-out;
    &:hover{
      background-color: #008000da ;
      border-color: white;
      font-weight: bold;
    }
  }
  .comment{
   
    .comment-Container{
      display: flex;
      gap: 20px;
      margin-top: 20px;
      img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
      .content-comment{
        h1{
          font-weight: bold;
        }

        button{
          margin-right: 30px;
          border: none;
        }
      }
    }
  }
  .img-job{
    margin: 20px 0;
  }
  .faq-layout{
    text-align: center;
    width: 750px;
    margin: 0 auto;
    button{
      border: none;
      border-radius: 0px;
      border-bottom: 1px solid;
    }
  }
  .thueCv{
    margin-top: 50px;
  }
`;
