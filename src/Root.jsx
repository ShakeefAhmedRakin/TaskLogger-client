import { Outlet } from "react-router-dom";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";

const Root = () => {
  return (
    <>
      <div className="container mx-auto px-3 md:px-5 lg:px-10 xl:px-28">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Root;
