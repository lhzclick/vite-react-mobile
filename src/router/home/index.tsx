import { lazy } from "react";
const Home = lazy(()=>import('@/pages/home'))


const RoutersHome  = [
  {
    path: "/",
    element: <Home />,
  }
];
export default RoutersHome;
