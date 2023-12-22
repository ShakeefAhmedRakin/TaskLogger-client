import { NavLink, Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../components/logo";
import "./Navbar.css";
import useAuth from "../hooks/useAuth";
import { toast } from "sonner";
import { GrLogin } from "react-icons/gr";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Successfully logged out");
      })
      .catch((error) => console.log(error));
  };

  const links = (
    <>
      <li className="navigation-link">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="navigation-link">
        <NavLink to="/about">About</NavLink>
      </li>
      <li className="divider divider-vertical lg:divider-horizontal"></li>
      {user ? (
        <>
          <li className="navigation-link">
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to={"/login"}>
              <button className="btn bg-primary border-none hover:shadow-xl hover:bg-primary font-semibold text-white flex-nowrap whitespace-nowrap">
                Log In
                <GrLogin className="text-xl"></GrLogin>
              </button>
            </Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <>
      <div className="bg-background text-primary">
        <div className="navbar container mx-auto py-3 md:py-8">
          <div className="navbar-start">
            <div>
              <NavLink to={"/"}>
                <Logo></Logo>
              </NavLink>
            </div>
          </div>
          <div className="navbar-end">
            <ul className="hidden lg:flex font-heading text-text font-semibold text-lg gap-12 items-center">
              {links}
            </ul>
            {user ? <></> : <></>}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <RxHamburgerMenu className="text-2xl -mr-4" />
              </div>
              <ul
                tabIndex={0}
                className="font-heading text-primary space-y-2 dropdown-content bg-background text-lg mt-3 border-primary border-[1px] z-50 p-3 shadow-xl w-56 block lg:hidden"
              >
                {links}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
