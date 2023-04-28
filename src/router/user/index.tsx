import { lazy } from "react";
const Login = lazy(()=>import('@/pages/user/login'))
const ModifyPassword = lazy(()=>import('@/pages/user/modifyPassword'))
const Count = lazy(()=>import('@/pages/user/count'))


const RoutersUser  = [
  {
    path: "/user/login",
    element: <Login />,
  },
  {
    path: "/user/modifyPassword",
    element: <ModifyPassword />,
  },
  {
    path: "/user/count",
    element: <Count />,
  }
];
export default RoutersUser;
