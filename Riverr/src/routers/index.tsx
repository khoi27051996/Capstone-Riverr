import { AdminLayoud, AuthLayout, MainLayout, WelcomeAdminLayout } from "components";
import { EditsCv } from "components/UI/EditsCv";
import { PATH } from "constant";
import { Account, Home, Job, JobAfterSearch, JobAndTypeJob, JobByType, Login, QLLCVDetail, QuanLyCongViec, QuanLyDichVu, QuanLyLoaiCongViec, QuanLyNguoiDung, Register, ThemQuanTriVien, UserDetail } from "pages";
import { RouteObject } from "react-router-dom";

export const router: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: PATH.users,
        element: <Account />,
      },
      {
        path: PATH.Job,
        element: <Job />,
      },
      {
        path: PATH.jobAndTypeJob,
        element: <JobAndTypeJob />,
      },
      {
        path: PATH.jobByTypes,
        element: <JobByType />,
      },
      {
        path: PATH.detailJob,
        element: <Job />
      },
      {
        path: PATH.jobAfterSearch,
        element: <JobAfterSearch />
      }
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        element: <Login />,
        path: PATH.login,
      },
      {
        element: <Register />,
        path: PATH.register,
      },
    ],
  },
  {
    path: PATH.admin,
    element: <AdminLayoud />,
    children: [
      {
        index: true,
        element: <WelcomeAdminLayout />
      },
      {
        path: PATH.quanLyCongViec,
        element: <QuanLyCongViec />
      },
      {
        path: PATH.quanLyDichVu,
        element: <QuanLyDichVu />,
      },
      {
        path: PATH.quanLyLoaiCongViec,
        element: <QuanLyLoaiCongViec />
      },
      {
        path: PATH.quanLyNguoiDung,
        element: <QuanLyNguoiDung />
      },
      {
        path: PATH.editsJob,
        element: <EditsCv />
      },
      {
        path: PATH.quanLyLoaiCongViecDetail,
        element: <QLLCVDetail />
      },
      {
        path: PATH.quanLyNguoiDungDetail,
        element: <UserDetail />
      },
      {
        path: PATH.quanLyNguoiDungThemQTV,
        element: <ThemQuanTriVien />
      }
    ]
  }
];
