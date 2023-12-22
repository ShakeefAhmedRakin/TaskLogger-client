import { Outlet } from "react-router-dom";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";

const Root = () => {
  return (
    <>
      <div className="container mx-auto px-3 md:px-5 lg:px-10 xl:px-28">
        <div className="mb-12">
          <Navbar></Navbar>
        </div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Root;
