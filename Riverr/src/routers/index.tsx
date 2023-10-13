import { AuthLayout, MainLayout } from "components";
import { PATH } from "constant";
import { Account, Home, Job, JobAfterSearch, JobAndTypeJob, JobByType, Login, Register } from "pages";
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
];
