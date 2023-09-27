import { NavLink, useNavigate } from "react-router-dom";
import { styled } from "styled-components";

import { useEffect, useState } from "react";
import cn from "classnames";
import { PATH } from "constant";

import { useAuth } from "hooks";
import { Avatar, Popover } from ".";
import { administerUserActions, useAppDispatch } from "store";

export const Header = () => {
  const navigate = useNavigate();
  const { token, users } = useAuth();

  const [scroll, setScroll] = useState<boolean>();
  const handleScroll = () => {
    // console.log(window.pageYOffset);
    if (window.pageYOffset > 20) {
      setScroll(true);
      return;
    }
    setScroll(false);
  };

  const dispatch = useAppDispatch();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Container
      className={cn({
        "header-fixed": scroll,
      })}
    >
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
          <input className="input" type="text" placeholder="Search" />
          <button>Search</button>
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
                    navigate("/")
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
                  {users?.user?.name}
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
    </Container>
  );
};

// Styled component
const Container = styled.header`
  height: var(--header-height);
  box-shadow: 0px 16px 10px -5px rgba(0, 0, 0, 0.1);
  &.header-fixed {
    position: fixed;
    width: 100%;
    z-index: 99;
    background-color: white;
    transition: all 0.5s;
  }
  .header-content {
    padding: 0 40px;
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
      top: 32px;
      font-size: 13px;
      margin-left: 2px;
    }
    .input {
      border: 1px solid black;
      padding: 2px 15px;
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
`;
