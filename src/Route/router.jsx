import { createBrowserRouter } from "react-router-dom";
import Main from "../Component/Main/Main";
import Home from "../Component/Home/Home/Home";
import AllToys from "../Component/AllToys/AllToys";
import AddToys from "../Component/AddToys/AddToys";
import Login from "../Component/Login/Login";
import Register from "../Component/Login/Register";
import { element } from "prop-types";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
        element: <AllToys></AllToys>,
      },
      {
        path: "/myToys",
        element: <h1>MyToy</h1>,
      },
      {
        path: "/addToy",
        element: <AddToys></AddToys>,
      },
      {
        path: "/blogs",
        element: <h1>blogs pages</h1>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/profile",
        element: <>this is my profile</>,
      },
    ],
  },
]);
export default router;
