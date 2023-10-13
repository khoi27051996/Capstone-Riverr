import { NavLink, generatePath, useNavigate } from "react-router-dom";
import { styled } from "styled-components";

import { useEffect, useState } from "react";
import cn from "classnames";
import { PATH } from "constant";

import { Avatar, Popover } from ".";
import { ROOTSTATE, administerUserActions, useAppDispatch } from "store";
import { useSelector } from "react-redux";
import { danhSachCongViecThunk, getMenuCvThunk, quanLyCongViecActions } from "store/CongViec";
import { quanLyNguoiDungThunk } from "store/NguoiDung";

export const Header = () => {
  const [inputValue, setInputValue] = useState("")
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { token, userSignUp } = useSelector(
    (state: ROOTSTATE) => state.administerUser
  );
  const { listCongViec } = useSelector((state: ROOTSTATE) => state.quanLyCongViec)

  const handleListJob = () => {
    const listJob = listCongViec.filter((v) => v.tenCongViec.toLowerCase().includes(inputValue.toLowerCase()))
    dispatch(quanLyCongViecActions.getListAfterSearch(listJob))
    navigate(PATH.jobAfterSearch)
    setInputValue("")

  }
  const [scroll, setScroll] = useState<boolean>();
  const handleScroll = () => {
    // console.log(window.pageYOffset);
    if (window.pageYOffset > 20) {
      setScroll(true);
      return;
    }
    setScroll(false);
  };


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const { menuCv } = useSelector((state: ROOTSTATE) => state.quanLyCongViec);

  useEffect(() => {
    dispatch(getMenuCvThunk());
    dispatch(quanLyNguoiDungThunk())
    dispatch(danhSachCongViecThunk())
  }, [dispatch]);
  return (
    <Container
      className={cn({
        "header-fixed": scroll,
      })}
    >
      <div className="">
        <div className="header-content">
          <h1
            className="brand"
            onClick={() => {
              navigate("/");
            }}
          >
            fiverr<span className="text-green-500">.</span>
          </h1>
          <div>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input className="input" type="text" placeholder="Search" value={inputValue} onChange={(e) => {
              setInputValue(e.target.value)
            }} onKeyDown={(v) => {
              v.key == "Enter" && handleListJob()

            }} />
            <button onClick={() => {
              handleListJob()
            }}>Search</button>
          </div>
          <nav>
            <NavLink to="">Become a Seller</NavLink>
          </nav>
          {token ? (
            <Popover
              content={
                <div>
                  <button
                    className="!my-[10px]"
                    onClick={() => {
                      navigate(PATH.users);
                    }}
                  >
                    Account Information
                  </button>
                  <hr />
                  <button
                    className="!my-[10px] !bg-red-500 !w-full !p-[5px] !rounded-[10px]"
                    onClick={() => {
                      dispatch(administerUserActions.logOut());
                      navigate("/");
                    }}
                  >
                    Log Out
                  </button>
                </div>
              }
            >
              <div className="flex">
                <h1 className="font-bold tracking-[5px] cursor-pointer me-[10px]">
                  Hello :
                  <span className="font-bold tracking-normal">
                    {userSignUp?.user?.name}
                  </span>
                </h1>
                <Avatar>
                  <i className="fa-regular fa-user"></i>
                </Avatar>
              </div>
            </Popover>
          ) : (
            <div className="flex items-center gap-[60px]">
              <nav>
                <NavLink to={PATH.register}>Sign In</NavLink>
                <NavLink to={PATH.login} className={"Join"}>
                  Join
                </NavLink>
              </nav>
            </div>
          )}
        </div>
      </div>
      <div className="navbar-menu">
        <div className="flex gap-[10px] justify-around mt-[10px] cursor-pointer px-[30px]">
          {menuCv?.map((items) => {
            return (
              <div

                key={items.id}
                onClick={() => {
                  const path = generatePath(PATH.jobAndTypeJob, {
                    typeId: items.id,
                  });
                  navigate(path);
                }}
              >
                {items.tenLoaiCongViec}
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

// Styled component
const Container = styled.header`
  height: 100px;
  box-shadow: 0px 16px 10px -5px rgba(0, 0, 0, 0.1);
  &.header-fixed {
    position: fixed;
    width: 100%;
    z-index: 99;
    background-color: white;
    transition: all 0.3s;
  }
  .header-content {
    padding: 5px 40px;
  
    max-width: var(--max-width);
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .brand {
      font-weight: 700;
      font-size: 30px;
      &:hover {
        cursor: pointer;
      }
    }
    .fa-solid {
      position: absolute;
      top: 20px;
      font-size: 13px;
      margin-left: 2px;
    }
    .input {
      border: 1px solid black;
      padding: 2px 20px;
      border-radius: 5px;
    }
    button {
      border: 1px solid white;
      background-color: #008000da;
      color: white;
      padding: 3px 10px;
      border-radius: 5px;
    }
    nav {
      display: flex;
      gap: 60px;
      a {
        font-weight: 500;
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
            width: 100%;
          }
        }
        &.Join {
          border: 1px solid black;
          padding: 1px 13px;
          border-radius: 5px;
        }
      }
    }

    .search {
      border: 1px solid #111;
      display: flex;
      align-items: center;
      border-radius: 6px;
      overflow: hidden;
      button {
        height: 46px !important;
        border: none;
        border-radius: initial;
        background: #111;
        color: #fff;
        &:hover {
          color: var(--primary-color) !important;
        }
      }
    }

    input {
      margin-top: 0;
      background: transparent;
      color: #111;
      outline: none;
    }
  }
  .navbar-menu {
    &::before {
      content: "";
      display: block;
      width: 100%;
      height: 2px;
      background-color: #e8e6e6;
    }
  }
`;
