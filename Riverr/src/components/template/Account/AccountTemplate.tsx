import { zodResolver } from "@hookform/resolvers/zod";
import { Avatar, Button, Input } from "components";

import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { AccountInfo, AccountType } from "schema";
import { ROOTSTATE, dsCvDangThueThunk, upDateInfoToken, useAppDispatch, xoaCvDaThueThunk } from "store";
import { toast } from "react-toastify";
import styled from "styled-components";
import { User2 } from "types";
import { useSelector } from "react-redux";
import { ModelAddSkill } from "components/UI/ModelAddSkill";
import { ModelAddCertifi } from "components/UI/ModelCertifi";
import { generatePath, useNavigate } from "react-router-dom";
import { PATH } from "constant";

export const AccountTemplate = () => {
  const { userSignUp } = useSelector(
    (state: ROOTSTATE) => state.administerUser
  );

  const { user } = userSignUp;
  const navigate = useNavigate()
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<AccountType>({
    mode: "onChange",
    resolver: zodResolver(AccountInfo),
  });
  const OpenCloseModal = () => {
    const modal = document.getElementById("myModal");

    const btn = document.getElementById("myBtn");

    btn.onclick = function () {
      modal.style.display = "block";
    };

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  };
  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<AccountType> = (value) => {
    const { name, birthday, avatar, phone } = value;
    const updateUser: User2 = {
      id: user?.id,
      email: user?.email,
      birthday,
      name,
      avatar,
      phone,
      skill: user?.skill,
      certification: user?.certification,
      password: user?.password,
      role: "USER",
      gender: user?.gender,
      bookingJob: [],
    };
    dispatch(upDateInfoToken(updateUser))
      .then(() => toast.success("Update Complete"))
      .catch((err) => console.log(err));
  };
  const { DsCvDangThue } = useSelector((state: ROOTSTATE) => state.quanLyThueCv)
  useEffect(() => {
    dispatch(dsCvDangThueThunk())
    reset({
      ...user,
    });
  }, [reset, user, dispatch, DsCvDangThue]);
  return (
    <Account>
      <div className="grid grid-cols-12 gap-4 content">
        <div className="col-span-3">
          <div className="informartion">

            <Avatar>
              <i className="fa-regular fa-user"></i> Update
            </Avatar>

            <h1 className="font-bold">Name: {user?.name}</h1>
            <button
              id="myBtn"
              onClick={() => {
                OpenCloseModal();
              }}
            >
              <i className="fa-solid fa-pen"></i> Edit Info
            </button>
            <div className="from-since">
              <div>
                <i className="fa-solid fa-location-dot"></i>
                <span>From</span>
              </div>

              <h1>Vietnam</h1>
            </div>
            <div className="from-since">
              <div>
                <i className="fa-solid fa-user-large"></i>
                <span>Member Since</span>
              </div>
              <h1>DateTime</h1>
            </div>
          </div>
          <div className="account-contact">
            <div className="account-title">
              <div className="title-account">
                <h1>Description</h1>
                <button>Edit Description</button>
              </div>
              <div className="title-content">...</div>
            </div>
            <div className="account-title">
              <div className="title-account">
                <h1>Language</h1>
                <button>Add Now</button>
              </div>
              <div className="title-content"></div>
            </div>
            <div className="account-title">
              <div className="title-account">
                <h1>Link Account</h1>
                <button>Add Now</button>
              </div>
              <div className="title-content"></div>
            </div>
            <div className="account-title">
              <div className="title-account">
                <h1>Skill</h1>
                <button
                  id="myBtn2"
                  onClick={() => {
                    const modal = document.getElementById("editSkill");

                    const btn = document.getElementById("myBtn2");

                    btn.onclick = function () {
                      modal.style.display = "block";
                    };

                    window.onclick = function (event) {
                      if (event.target == modal) {
                        modal.style.display = "none";
                      }
                    };
                  }}
                >
                  Add Now
                </button>
              </div>
              <div className="title-content">
                {user?.skill?.map((items, index) => {
                  return <p key={index}>{items}</p>;
                })}
              </div>
            </div>
            <div className="account-title">
              <div className="title-account">
                <h1>Education</h1>
                <button>Add Now</button>
              </div>
              <div className="title-content"></div>
            </div>
            <div className="">
              <div className="title-account del">
                <h1>Cetification</h1>
                <button
                  id="myBtn3"
                  onClick={() => {
                    const modal = document.getElementById("editCertifi");

                    const btn = document.getElementById("myBtn3");

                    btn.onclick = function () {
                      modal.style.display = "block";
                    };

                    window.onclick = function (event) {
                      if (event.target == modal) {
                        modal.style.display = "none";
                      }
                    };
                  }}
                >
                  Add Now
                </button>
              </div>
              <div className="title-content">
                {user?.certification?.map((items, index) => {
                  return <p key={index}>{items}</p>;
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-9">
          <div className="list-job-top">
            <h1>It seems that you don't have any active Gigs. Get selling</h1>
            <button>Create a New Gig</button>
          </div>
          <div className="list-Job-content">
            {DsCvDangThue?.map((v) => {
              return <div key={v.id} className="grid grid-cols-12 gap-4 list-job-container">
                <div className="image-job col-span-3">
                  <img src={v.congViec.hinhAnh} alt="..." />
                </div>
                <div className="content-job col-span-9">
                  <h1>{v.congViec.tenCongViec}</h1>
                  <p>{v.congViec.moTa}</p>
                  <p>{v.ngayThue}</p>
                  <div className="button-job">
                    <button onClick={() => {
                      const path = generatePath(PATH.detailJob, {
                        idDetailJob: v.congViec.id
                      })
                      navigate(path)
                    }}>View Detail</button>
                    <button onClick={() => {
                      dispatch(xoaCvDaThueThunk(v.id))
                    }}>X</button>
                  </div>
                </div>
              </div>
            })}
          </div>
        </div>
      </div>

      <div id="myModal" className="modal">
        <div className="modal-content">
          <h1 className="text-black font-bold text-[30px] text-center">
            ACCOUNT INFO
          </h1>
          <form noValidate action="" onSubmit={handleSubmit(onSubmit)}>
            <Input
              id="name"
              placeholder="Name"
              name="name"
              type="text"
              register={register}
              error={errors?.name?.message}
            />
            <Input
              id="phone"
              placeholder="Phone"
              name="phone"
              type="text"
              register={register}
              error={errors?.phone?.message}
            />
            <Input
              id="birthday"
              placeholder="Birthday"
              name="birthday"
              type="text"
              register={register}
              error={errors?.birthday?.message}
            />
            <Input
              id="avatar"
              name="avatar"
              placeholder="Link Avatar"
              type="text"
              register={register}
              error={errors?.avatar?.message}
            />
            <Button
              type="primary"
              htmlType="submit"
              className="!w-full !h-[50px] mt-[20px] !bg-red-500 !font-bold"
            >
              Update
            </Button>
          </form>
        </div>
      </div>
      <ModelAddSkill />
      <ModelAddCertifi />
    </Account>
  );
};

const Account = styled.div`
  background-color: #e8e6e6;
  height: 100%;
  .content {
    max-width: 900px;
    margin: 0 auto;
  }
  .informartion {
    height: 250px;
    text-align: center;
    background-color: white;
    margin-top: 50px;
    padding-top: 10px;
    border: var(--account-boder);
    box-shadow: var(--account-box-shadow);

    .ant-avatar {
      font-size: 50px;
      width: 100px;
      height: 100px;
      line-height: 100px;
      margin-bottom: 20px;
    }
    .from-since {
      display: flex;
      justify-content: space-between;
      padding: 5px 10px;
      font-size: var(--account-font-size);

      i {
        margin-right: 5px;
      }
      span {
        color: gray;
      }
      h1 {
        font-weight: var(--account-font-bold);
      }
    }
  }
  .account-contact {
    border: 1px solid black;
    background-color: white;
    padding: 10px;
    margin-top: 20px;
    box-shadow: var(--account-box-shadow);
    font-size: var(--account-font-size);
    .account-title {
      &::after {
        content: "";
        display: block;
        width: 100%;
        height: 2px;
        background-color: #d2cbcb;
      }
    }

    .title-account {
      display: flex;
      justify-content: space-between;
    }
    h1 {
      font-weight: var(--account-font-bold);
    }
    button {
      color: #4d4df7;
    }
    .title-content {
      color: var(--account-color-span);
      font-size: var(--account-font-size);
      display: flex;
      gap: 10px;
    }

    .title-content {
      height: 30px;
    }
  }
  .list-job-top {
    text-align: center;
    background-color: white;
    display: flex;
    justify-content: space-between;
    padding: 20px 15px;
    margin-top: 50px;
    border: var(--account-boder);
    font-size: var(--account-font-size);

    button {
      background-color: var(--button-bgColor);
      color: var(--button-color);
      border: var(--button-boder);
      padding: var(--button-padding);
      border-radius: var(--button-radius);
    }
  }
  .list-Job-content{
    margin-top: 30px;
    background-color: white;
    .list-job-container{
      padding: 20px 10px;
      border: 1px dotted black
    }
    .content-job{
      h1{
        font-weight: bold;
        margin-bottom: 10px;
      }
      p{
        font-size: 13px;
        margin: 5px 0;
      }
    }
    .button-job{
      text-align: right;
      button{
        border: 1px solid black;
        padding: 5px 15px;
        margin-left: 30px;
        border-radius: 10px;
        box-shadow: 5px 5px 5px 0 black;
        &:hover{
          background-color: var(--button-bgColor);
          font-weight: bold;
          border: none;
        }
      }
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
`;
