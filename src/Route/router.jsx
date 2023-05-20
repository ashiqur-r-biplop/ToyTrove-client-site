import { createBrowserRouter } from "react-router-dom";
import Main from "../Component/Main/Main";
import Home from "../Component/Home/Home/Home";
import AllToys from "../Component/AllToys/AllToys";
import AddToys from "../Component/AddToys/AddToys";
import Login from "../Component/Login/Login";
import Register from "../Component/Login/Register";
import { element } from "prop-types";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Details from "../Component/Details/Details";
import MyToy from "../Component/MyToy/MyToy";
import Update from "../Component/Update/Update";
import ErrorPage from "../Component/ErrorPage/ErrorPage";
import Blog from "../Component/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
        element: (
          <PrivateRoute>
            <MyToy></MyToy>
          </PrivateRoute>
        ),
      },
      {
        path: "/addToy",
        element: (
          <PrivateRoute>
            <AddToys></AddToys>
          </PrivateRoute>
        ),
      },
      {
        path: "/blogs",
        element: <Blog></Blog>,
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
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://toy-trove-server-site.vercel.app/details/${params.id}`),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
