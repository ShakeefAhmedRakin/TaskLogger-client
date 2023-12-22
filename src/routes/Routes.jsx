import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import RootDashboard from "../pages/Dashboard/RootDashboard";
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";
import DashboardTasks from "../pages/Dashboard/DashboardTasks/DashboardTasks";
import PrivateRoute from "../routes/PrivateRoute";
import DashboardCreateTask from "../pages/Dashboard/DashboardCreateTask/DashboardCreateTask";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <RootDashboard></RootDashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "/dashboard/tasks",
        element: <DashboardTasks></DashboardTasks>,
      },
      {
        path: "/dashboard/create-task",
        element: <DashboardCreateTask></DashboardCreateTask>,
      },
    ],
  },
]);
