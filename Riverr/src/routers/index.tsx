import { AuthLayout, MainLayout } from "components";
import { PATH } from "constant";
import { Account, Home, Login, Register } from "pages";
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
        element: <Account/>
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
