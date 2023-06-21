import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "../pages/Layout";
import Table from "../components/Table";
import Form from "../components/Form";
import FormEdit from "../components/Form/FormEdit";
import LoginPage from "../pages/LoginPage";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    loader: () => {
      if (!localStorage.getItem("access_token")) {
        throw redirect("/login");
      }
      return null;
    },
    children: [
      {
        path: "/",
        element: <Table />,
      },
      {
        path: "/create-post",
        element: <Form />,
      },
      {
        path: "/edit-post/:id",
        element: <FormEdit />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
    loader: () => {
      if (localStorage.getItem("access_token")) {
        throw redirect("/");
      }
      return null;
    },
  },
  {
    path: "/register",
    element: <Register />,
    loader: () => {
      if (localStorage.getItem("access_token")) {
        throw redirect("/");
      }
      return null;
    },
  },
]);

export default router;
