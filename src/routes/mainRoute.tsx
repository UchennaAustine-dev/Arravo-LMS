import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../components/layout/AuthLayout";
import Home from "../pages/auth/Home";
import MainLayout from "../components/layout/MainLayout";
import Homepage from "../pages/home/Homepage";
import PrivateRoute from "./PrivateRoute";

export const mainRoute = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/auth",
    element: (
      <PrivateRoute>
        <MainLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Homepage />,
      },
    ],
  },
]);
