import { createBrowserRouter } from "react-router-dom";
import Main from "../Component/Main/Main";
import Home from "../Component/Home/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allToy",
        element: <h1>All toy</h1>,
      },
      {
        path: "/myToys",
        element: <h1>MyToy</h1>,
      },
      {
        path: "/addToy",
        element: <h1>add a toy</h1>,
      },
      {
        path: "/blogs",
        element: <h1>blogs pages</h1>,
      },
      {
        path: "/login",
        element: <h1>Login pages</h1>,
      },
    ],
  },
]);
export default router;
