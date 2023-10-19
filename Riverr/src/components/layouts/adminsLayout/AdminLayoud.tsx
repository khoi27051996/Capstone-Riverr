import { NavLink, Outlet, useNavigate } from "react-router-dom"
import { SileBarLayout } from "."
import { Avatar, Popover } from "components";
import { PATH } from "constant";
import { ROOTSTATE, administerUserActions, useAppDispatch } from "store";
import { useSelector } from "react-redux";
import { styled } from 'styled-components'

export const AdminLayoud = () => {
    const { token, userSignUp } = useSelector((state: ROOTSTATE) => state.administerUser)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    return (

        <AdminLayout>

            <div className="grid grid-cols-12">
                <div className="col-span-3">
                    <div>
                        <h1 className="dashboard">
                            <span>Dashboard</span>
                        </h1>
                        <div className="header-admin">
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
                    <SileBarLayout />
                </div>
                <div className="col-span-9">
                    <Outlet />
                </div>
            </div>
        </AdminLayout>
    )
}

const AdminLayout = styled.div`
    .header-admin{
        position: fixed;
        top: 0;
        right: 0;
        a{
            margin-left: 30px;
        }
        padding: 20px;
    }
    .dashboard{
        padding: 30px;
        font-weight: bold;
        font-size: 30px;
        span{
           border-bottom: 5px dotted black;
        }
    }
 
`