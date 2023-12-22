import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import Logo from "../../components/logo";
import { GrLogout } from "react-icons/gr";
import { toast } from "sonner";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";
import { TbLayoutSidebarLeftExpandFilled } from "react-icons/tb";

const Dashboard = () => {
  const { logOut, user } = useContext(AuthContext);
  const closeSidebar = () => {
    const closeBtn = document.getElementById("my-drawer-2");
    if (closeBtn) {
      closeBtn.checked = false;
    }
  };

  const handleLogOut = () => {
    logOut().then(() => {
      toast.success("Successfully logged out");
    });
  };

  let location = useLocation();

  return (
    <>
      <div className="drawer md:drawer-open h-full">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content overflow-x-auto">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-md text-lg bg-secondary border-none text-white hover:bg-secondary drawer-button md:hidden mb-3 fixed left-2 top-2 rounded-xl z-50"
          >
            <span className="text-xs">Menu</span>
            <TbLayoutSidebarLeftExpandFilled />
          </label>
          <div className="p-2 md:p-4 md:h-full ml-0 md:ml-[321px]">
            <hr className="mt-[54px] block md:hidden" />
            <Outlet></Outlet>
          </div>
        </div>
        <div className="drawer-side h-full z-50">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu h-full p-4 w-80 bg-base-200 text-base-content fixed">
            {/* Sidebar content here */}
            <div className="flex justify-between items-center gap-2">
              <div className="flex flex-col justify-start items-center md:justify-center w-full mb-5">
                <Logo></Logo>
                <hr className="my-4" />
                <img
                  src={user.photoURL}
                  className="w-10 aspect-square rounded-full"
                />
                <h1 className="font-heading">{user.displayName}</h1>
              </div>
              <label
                onClick={closeSidebar}
                className="btn text-xl bg-secondary text-white hover:bg-secondary drawer-button md:hidden"
              >
                <TbLayoutSidebarLeftCollapseFilled />
              </label>
            </div>
            <hr className="my-2" />
            <div className="flex flex-col text-lg font-heading font-medium gap-4">
              {/* SHARED ROUTE */}
              <NavLink
                to={"/dashboard"}
                onClick={closeSidebar}
                className={`p-2 w-full border-2 hover:underline rounded-xl ${
                  location.pathname === "/dashboard" ? "text-accent" : ""
                }`}
              >
                <li>Dashboard</li>
              </NavLink>
              <NavLink
                to={"/dashboard/tasks"}
                onClick={closeSidebar}
                className={`p-2 w-full border-2 hover:underline rounded-xl ${
                  location.pathname === "/dashboard/tasks" ? "text-accent" : ""
                }`}
              >
                <li>My Tasks</li>
              </NavLink>
              <NavLink
                to={"/dashboard/create-task"}
                onClick={closeSidebar}
                className={`p-2 w-full border-2 hover:underline rounded-xl ${
                  location.pathname === "/dashboard/create-task"
                    ? "text-accent"
                    : ""
                }`}
              >
                <li>Create Task</li>
              </NavLink>

              <hr className="my-2" />
              <Link
                to={"/"}
                onClick={closeSidebar}
                className={"btn bg-primary hover:bg-primary text-white"}
              >
                <li>Home</li>
              </Link>
              <button
                className="btn bg-secondary hover:shadow-xl hover:bg-secondary font-semibold text-white"
                onClick={() => handleLogOut()}
              >
                Log Out
                <GrLogout className="text-xl"></GrLogout>
              </button>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
